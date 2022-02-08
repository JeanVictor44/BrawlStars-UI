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
interface ContentProps {
    isConfirmButtonDisabled: boolean
}
export const Content = styled.main <ContentProps>`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    
    button {
        margin:25px auto;
        height:70px;
        width:200px;
        background-color:#808080;
        border:1px solid #000;
        font-size:20px;
        cursor:pointer;
        border-radius:5px;
        text-transform:uppercase;
        font-weight:bold;
        transition:background-color .2s ease-in;
        :disabled {
            cursor:not-allowed;
        }
        :hover {
            background-color:${({isConfirmButtonDisabled}) => isConfirmButtonDisabled ? '#CC0915' : '#00D903'};
        }
        a {
            color:#FFF;
            text-decoration:none;
        }
    }

    h1 {
        color:#FFF;
        font-size:45px;
        text-align:center;
    }
    > p {
        margin:20px 0;
        color:#FFF;
        font-size:18px;
        color:#81EBFE;
        :last-child {
            color:#FFF;
            span {
                color:#74DEFA;
                text-decoration:underline;
            }
        }
    }
    
    
`
export const AgeBox = styled.div `
    border:4px solid #37A5FD;
    margin:20px 0px;
    width:100%;
    max-width:80%;
    height:200px;
    background-color:#2373FE;
    display:flex;
    justify-content:space-between;
    img {
        width:240px;
    }
    img:last-child {
        transform:scaleX(-1);
    
    }

`
export const AgeSlider = styled.div `
    
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    width:80%;
    input {
        -webkit-appearance: none;
        appearance: none;
        height:50px;
        width:100%;
        background-color:#364977;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width:85px;
            height:60px;
            border-radius:5px;
            background-color:#00D903;
        } 
    }
    p {
        margin:20px 0;
        color:#FFF;
        font-size:18px;
    }
`
export const SliderBox = styled.div `
        width:100%;
        position:relative;
        
        /* img {
            width:40px;
            position:absolute;    
            top:50%;
            transform:translateY(-50%);
            &:first-of-type {
                transform:scaleX(-1);
            }
        } */
`

interface DisplayAgeProps {
    sliderValue: number
}

export const DisplayAge = styled.output<DisplayAgeProps> `
    position:absolute;
    top:-100px;
    background-color:#FFF;
    width:70px;
    height:55px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    left:${({sliderValue}) => `calc(${sliderValue}% + ( 42.5px - ${sliderValue} * 0.80px))` } ;
    transform:translateX(-50%);
    ::after {
        content: "";
        position: absolute;
        width: 0px;
        height: 0px;

        /* Triangle */
        border-top:10px solid #FFF;
        border-left:10px solid transparent;
        border-right:10px solid transparent;

        bottom : -10px;
        left: 50%;
        transform:translateX(-50%);
    }
`