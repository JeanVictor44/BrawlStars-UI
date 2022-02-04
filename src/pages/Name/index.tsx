import * as S from './style'
import registerBg from '../../assets/backgrounds/register-bg.svg'
import { ButtonId } from '../../components/ButtonId'

export const Name = () => {
    return (
        <S.Container background={registerBg}>
            <ButtonId />
            <S.Content>
                <h1>Bem-vindo ao Brawl Stars!</h1>
                <p>Qual é o seu nome?</p>
                <S.InputContainer>
                    <input type="text" placeholder="Insira seu nome aqui" maxLength={10}/>
                    <button>ok</button>
                </S.InputContainer>
            </S.Content>
            
        </S.Container>
    )
}