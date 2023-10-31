import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import { useState } from "react"

import fotos from './fotos.json'
import ModalZoom from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const DivEstilizada = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 80%;
`

const App = () => {

  const [fotosDaGaleria, setFotosdaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosdaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id == foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <DivEstilizada>
        <BarraLateral />
        <ConteudoGaleria>
          <Banner texto={"A galeria mais completa de fotos do espaço!"}
            backgroundImage={"src/assets/banner.png"} />
          <Galeria
            aoFotoSelecionada={foto => setFotoSelecionada(foto)}
            aoAlternarFavorito={aoAlternarFavorito}
            fotos={fotosDaGaleria}
          />
        </ConteudoGaleria>
      </DivEstilizada>
      <ModalZoom
        foto={fotoSelecionada}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
