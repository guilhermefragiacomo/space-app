import styled from 'styled-components';
import tags from './tags.json'

const ContainerTags = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    min-width: 540px;
    margin-top: 40px;
    height: 35px;
    p {
        margin: auto;
        color: #acacac;
        margin-right: 70px;
    }
    button {
        margin: auto;
        background-color: #5f616e;
        border: none;
        color: white;
        border-radius: 5px;
        height: 35px;
    }
    button:hover {
        border: 1px solid #7B7BE6;
    }

`

const Tags = () => {
    return (
        <ContainerTags>
            <p>Busque por tags:</p>
            {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)}
        </ContainerTags>
    )
}
export default Tags;