import styled from "styled-components";
import { BackgroundAnimation } from "../../styles/Animations";



interface ContainerProps {
    background:string
}

export const Container = styled.div<ContainerProps> `
    background:url(${({background}) => background });
    background-repeat:no-repeat;
    background-size:cover;
    height:140vh;
    animation: ${BackgroundAnimation} 5s infinite;
    animation-direction:alternate;
    
`

export const Content = styled.main `
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    h1 {
        color:#FFF;
        font-size:45px;
        text-align:center;
    }
    p {
        color:#FFF;
        font-size:18px;
        color:#81EBFE;
    }
    
`
export const InputContainer = styled.div `
    margin:5px 0;
    width:100%;
    height:50px;
    max-width:550px;
    display:flex;
    justify-content:center;
    input {
        flex:4;
        outline:none;
        border:none;
        text-align:center;
        font-size:30px;
        font-weight:700;
        border-radius:5px;
        border-top-right-radius:0;
        border-bottom-right-radius:0;
        &::placeholder {
            color:#000;
            
        }
    }
    button {
        flex:1;
        background-color:#7D7D7D;
        border:none;
        color:#FFF;
        font-size:30px;
        text-transform:uppercase;
        cursor:pointer;
        border-radius:5px;
        border-top-left-radius:0;
        border-bottom-left-radius:0;
    }
`