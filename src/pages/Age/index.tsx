import { ButtonId } from "../../components/ButtonId"
import * as S from './style'
import registerBg from '../../assets/backgrounds/register-bg.svg'
import jessIcon from "../../assets/icons/jess-icon.svg"
import mikeIcon  from "../../assets/icons/mike-icon.svg"
import { useState } from "react"


export const Age = () =>  {
    const [ age, setAge] = useState(0)

    return (
        <S.Container background={registerBg}>
            <ButtonId />
            <S.Content>
                <h1>Este é o Brawl Stars!</h1>
                <p>Qual é a sua idade?</p>
                <S.AgeBox>
                    <img src={jessIcon} />
                    <S.AgeSlider>

                        <S.SliderBox>
                            <S.DisplayAge sliderValue={age}>
                                { age }
                            </S.DisplayAge>
                            <input type="range" defaultValue={0} onChange={(ev) => setAge(Number(ev.target.value))}/>
                        </S.SliderBox>
                                                
                        <p>Isso não afetará o jogo</p>
                    </S.AgeSlider>
                    <img src={mikeIcon}/>
                </S.AgeBox>
                <button>Confirmar</button>
                <p>Ao selecionar CONFIRMAR, você aceita os nossos <span>Termos de Uso</span> e a nossa <span>Política de Privacidade.</span></p>
            </S.Content>
        </S.Container>
    )
}