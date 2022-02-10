import { ButtonId } from "../../components/ButtonId"
import * as S from './style'
import registerBg from '../../assets/backgrounds/register-bg.svg'
import { ICONS } from "../../constants" 
import useUserData from "../../contexts/userData"
import useAuth from "../../contexts/auth"
import { Link } from "react-router-dom"

export const Age = () =>  {
    const {setUserAgeData, userData } = useUserData()
    const { signIn } = useAuth()
    const { userAge} = userData
    
    return (
        <S.Container background={registerBg}>
            <ButtonId />
            <S.Content isConfirmButtonDisabled={userAge === 0}>
                <h1>Este é o Brawl Stars!</h1>
                <p>Qual é a sua idade?</p>
                <S.AgeBox>
                    <img src={ICONS.BEA} alt='Bea icon'/>
                    <S.AgeSlider>

                        <S.SliderBox>
                            <S.DisplayAge sliderValue={userAge}>
                                { userAge }
                            </S.DisplayAge>

                            {/* <img src={arrow} />
                            <img src={arrow} /> */}
                            <input type="range" defaultValue={0} onChange={(ev) => setUserAgeData(Number(ev.target.value))}/>
                        </S.SliderBox>
                                                
                        <p>Isso não afetará o jogo</p>
                    </S.AgeSlider>
                    <img src={ICONS.MIKE} alt='Mike icon'/>
                </S.AgeBox>
                <button disabled={userAge === 0} onClick={() => signIn(userData)}><Link to="/principal">Confirmar</Link></button>
                <p>Ao selecionar CONFIRMAR, você aceita os nossos <span>Termos de Uso</span> e a nossa <span>Política de Privacidade.</span></p>
            </S.Content>
        </S.Container>
    )
}