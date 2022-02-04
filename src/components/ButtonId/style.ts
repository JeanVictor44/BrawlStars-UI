import styled from "styled-components";

export const Container = styled.div `
    user-select:none;
    padding: 5px 0px 0px 30px;

    p {
        font-size:30px;
        color:#FFF;
    }
    button {
        display:flex;
        justify-content:center;
        align-items:center;

        text-transform:uppercase;
        margin:5px 0 0 20px;
        background-color:#485578;
        height:50px;
        width:200px;    
        border:2px solid #000;
        border-radius:5px;
        border-bottom-right-radius:10px;
        box-shadow:#010821 0px 5px 3px;
        cursor:pointer;
        color:#FFF;
        font-size:16px;
        font-weight:700;
    }
`
export const IdLabel = styled.div `
    color:#FFF;
    height:30px;
    width:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid;
    background-color:#000;
    border-radius:10px;
    
    position:absolute;
    top:50%;
    transform:translate(15px,-50%);
    


`
export const ButtonContainer = styled.div `
    position:relative;
`