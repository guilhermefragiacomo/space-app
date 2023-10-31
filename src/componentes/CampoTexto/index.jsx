import { styled } from "styled-components";

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const InputEstilizado = styled.input`
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);
    padding: 12px 16px;
    padding-right: 72px;
    align-items: center;
    background-color: rgba(0,0,0,0);
    height: 30px;
    width: 540px;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #D9D9D9;
`
const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 17px;
    width: 38px;
    height: 38px;
`

const CampoTexto = () => {
    return (
        <ContainerEstilizado>
            <InputEstilizado placeholder="O que você procura?" />
            <IconeLupa src="/imagens/search.png" alt="Icone de Lupa" />
        </ContainerEstilizado>
    )
}
export default CampoTexto