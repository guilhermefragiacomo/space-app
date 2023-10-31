import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares"
import Imagem from "./Tags/Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const UlEstilizada = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    padding: 0;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <UlEstilizada>
                        {fotos.map(foto =>
                            <li key={foto.id}>
                                <Imagem
                                    foto={foto}
                                    aoAlternarFavorito={aoAlternarFavorito}
                                    aoZoomSolicitado={aoFotoSelecionada}
                                />
                            </li>
                        )}
                    </UlEstilizada>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria;