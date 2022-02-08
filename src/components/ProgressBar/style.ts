import styled from "styled-components";

interface ContainerProps {
    width:string,
    height:string,
}

export const Container = styled.div<ContainerProps>`
    width:${({width}) => width};
    height:${({height}) => height};
    border-radius:5px;
    background-color:#202538;
    border:2px solid #000;
    display:flex;
    align-items:center;
    position:relative;

    div:nth-child(2) {
        position:relative;
        right:15%;
        display:flex;
        align-items:center;
    }
    div {
        span{
            color:#FFF;
        }
    }
    img {
        width:40px;
}

`
interface ProgressProps {
    color:string
}
export const Progress = styled.div <ProgressProps>`
    height:100%;
    width:50%;
    border-radius:5px;
    background-color:${({color}) => color};
    display:flex;
    justify-content:center;
    align-items:center;
    
`