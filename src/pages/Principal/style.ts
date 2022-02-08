import { Link } from "react-router-dom";
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

export const Header = styled.header `
    padding:10px;
    display:flex;
    justify-content:space-between;
`

/* Profile infos extreme left */
export const ProfileInfosContainer = styled.div `
    display:flex;
    gap:20px;
`
export const ProfileCard = styled.div `
transition:transform .2s ease-in;
    :hover {
        transform:translateY(-5px);
        cursor:pointer;
    }
    width:140px;
    height:90px;
    padding:10px 0 0 0;
    background-color:#323C50;
    border:2px solid #000;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    p {
        font-size:18px;
        color:#FFF;
        text-transform:uppercase;
    }
    img {
        width:50%;
    }
`
export const ProfileCardTrophies = styled.div `
    transition:transform .2s ease-in;
    :hover {
        transform:translateY(-5px);
        cursor:pointer;
    }

    width:180px;
    height:90px;
    background-color:#323C50;
    padding:0px 0px 0px 5px;
    border:2px solid #000;
    border-radius:5px;
    header {
        width:100%;
        padding:5px;
        display:flex;
        gap:20px;
        img {
            width:50px;
        }
        div {
            display:flex;
            justify-content:center;
            align-items:center;
            img {
                width:35px;
                transform:rotate(5deg);
            }
            span {
                color:#F3B82C
            }
            
        }
    }
    > div {
        display:flex;
        img {
            width:30px;
        }
    }

`


/* Player resources medium right */
export const PlayerResourcesContainer = styled.div`
display:flex;
gap:10px;
`
export const PlayerResource = styled.div `
    height:40px;
    background-color:#000;
    width:100px;

    display:flex;
    gap:10px;
    justify-content:center;
    align-items:center;
    div {
        img {
            width:30px;
        }   
        display:flex;
        justify-content:center;
        align-items:center;
    }
    span {
        color:#FFF;
    }
`


/* Colorcar um after e um before para preencher com as cores #5E5979 no topo e #252B37 embaixo */
export const SettingButton = styled.button `
    height:50px;
    width:80px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:5px;
    background-color:#323A51;
    border:none;
    border-radius:5px;
    cursor:pointer;

    div {
        background-color:#FFF;
        width:50%;
        height:5px;
        border-radius:5px;
    }
    transition:background-color .5s;
    :hover {
        filter:brightness(0.8);
    }
`

export const Main = styled.main `
    display:flex;
    justify-content:space-between;
`
export const CardOption = styled(Link) `
    transition:transform .2s ease-in;
    :hover {
        transform:translateY(-5px);
        cursor:pointer;
    }

    width:80px;
    height:50px;
    position:relative;
    border:2px solid #000;
    background-color:#333B51;
    text-decoration:none;
    border-radius:5px;
    
    p {
        position:absolute;
        left:50%;
        bottom:0;
        transform:translateX(-50%);
        color:#FFF;
        text-align:center;
        text-transform:uppercase;        

    }
    img {
        display:block;
        margin:0 auto;
        width:40px;
        position:absolute;
        left:50%;
        top:-10px;
        transform:translateX(-50%);
    }
`
export const SideOptions = styled.div `
    align-self:center;
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:10px;
`

export const BrawlerView = styled.div `
display:flex;
align-items:center;
`

export const Actions = styled.div `

`
export const Action = styled.div `
    width:60px;
    height:60px;
    background:linear-gradient(to bottom, #B19CF3,  #DCD5F6);
    border:2px solid #FFF;
    border-radius:5px;
    margin-bottom:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    img {
        width:30px;
    }

`

export const Brawler = styled.div `
    > div {
        margin:0 auto;    
    }
    > img {
      width:400px;
    }
`
export const Rank = styled.div `
    display:flex;
    div:nth-child(1) {
        img {
            width:40px;
            position:relative;
            left:20px;
            z-index:20;
        }
        
    }
`
export const Footer = styled.footer `
    padding:0 10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const BrawlPass = styled.div `
    width:250px;
    height:80px;
    background-color:#333C50;
    display:flex;
    border-radius:5px;
    justify-content:center;
    align-items:center;
    position:relative;  
    border:2px solid #000;
`
export const PassIcon = styled.div `
position:absolute;
top:-60px;
left:0;
z-index:10;
    img {
        width:120px;   
        position:absolute;
    }
    span {
        text-transform:uppercase;
        color:#FFF;
        font-size:20px;
        position:relative;
        top:50px;
        left:70px;
        display:block;
        width:150px;    

        z-index:20;
    }
`

export const GameButtons = styled.div `
    display:flex;
    gap:20px;
    align-items:flex-end;
    
`
export const TokenInfo = styled.div`;
`
export const ContainerPlayButton = styled.div`
    display:inline-block;
    margin:0 0 0 auto;
`
export const PlayButton = styled.button `
    border:2px solid #000;
    background-color:#EDC508;
    height:80px;
    width:250px;
    color:#FFF;
    font-size:30px;
    border-radius:5px;
    text-transform:uppercase;
    font-weight:bold;
    cursor:pointer;

`

export const ContainerEventButton = styled.div `

`
export const EventIcon = styled.div `
`
export const EventDetails = styled.div `
    margin-left:10px;
    p:nth-child(1) {
        color:#FFF;
        font-size:25px;

    }
    p + p {
        color:#808FCA;
        font-size:18px;
    }
`
export const EventButton = styled.div `
border:2px solid #000;
    width:400px;
    height:70px;
    background-color:#333C50;
    border-radius:5px;
    cursor:pointer;
    display:flex;
    align-items:center;
    padding:10px;
    img {
        width:70px;
    }
    

`