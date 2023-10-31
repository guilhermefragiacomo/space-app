import { styled } from "styled-components";
import Imagem from "../Galeria/Tags/Imagem";

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizada = styled.dialog`
    position: absolute;
    top: 294px;
`

const ModalZoom = ({ foto, aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizada open={!!foto} >
                    <Imagem foto={foto} aoAlternarFavorito={aoAlternarFavorito} />
                    <form method="dialog">
                        <button>OK</button>
                    </form>
                </DialogEstilizada>
            </>}
        </>
    )
}

export default ModalZoom;