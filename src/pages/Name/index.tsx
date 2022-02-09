import * as S from './style'
import registerBg from '../../assets/backgrounds/register-bg.svg'
import { ButtonId } from '../../components/ButtonId'
import { Link } from 'react-router-dom'
import useUserData from '../../contexts/userData'

export const Name = () => {
    const { setUserNameData, userData } = useUserData()
    const { userName } = userData

    return (
        <S.Container background={registerBg}>
            <ButtonId />
            <S.Content>
                <h1>Bem-vindo ao Brawl Stars!</h1>
                <p>Qual é o seu nome?</p>
                <S.InputContainer isOkButtonDisabled={userName.length === 0}>
                    <input type="text" aria-label="name-input" placeholder="Insira seu nome aqui" maxLength={12} onChange={(ev) => setUserNameData(ev.target.value)}/>
                    <button >
                        <Link aria-label="confirm-link" to={userName.length > 0 ? '/age' : ''} >
                            ok
                        </Link>
                    </button>
                </S.InputContainer>
            </S.Content>
            
        </S.Container>
    )
}