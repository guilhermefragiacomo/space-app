import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineExpandAlt } from "react-icons/ai";

const FigureEstilizado = styled.figure`
    padding: 0;
    margin: 0 15px 15px 0;
    border-radius: 15px;
    background-color: #0a1731;

    img {
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }
`

const FigEstilizado = styled.figcaption`

    h3 {
        margin-left: 20px;
        font-size: 11pt;
        color: #eeeeee;
        margin-bottom: 0;
    }
    p {
        margin-top: 5px;
        font-size: 9pt;
        margin-left: 20px;
        color: #c5c5c5;
    }
`

const FooterFlex = styled.footer`
    display: flex;
    justify-content: space-between;

    button {
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        background-color: rgba(0,0,0,0);
        cursor: pointer;
    }
`
const Buttons = styled.div`
    margin: 0 10px 10px 0;
`

const Imagem = ({ foto, aoZoomSolicitado, expandida = false, aoAlternarFavorito }) => {
    return (
        <FigureEstilizado>
            <img src={foto.path} />
            <FigEstilizado>
                <h3>{foto.titulo}</h3>
                <FooterFlex>
                    <p>{foto.path}</p>
                    <Buttons>
                        <button onClick={() => aoAlternarFavorito(foto)}>{foto.favorita ? <AiFillHeart /> : <AiOutlineHeart />}</button>
                        <button onClick={() => aoZoomSolicitado(foto)}><AiOutlineExpandAlt /></button>
                    </Buttons>
                </FooterFlex>
            </FigEstilizado>
        </FigureEstilizado>
    )
}

export default Imagem;