import * as S from './style'

export const ButtonId = () => {        
    return (
        <S.Container>
            <label>
                <p>Já jogou antes?</p>
                <S.ButtonContainer>
                    <S.IdLabel>ID</S.IdLabel>
                    <button aria-label="button-id-login">
                        Supercell Id
                    </button>
                </S.ButtonContainer>
            </label>
            
        </S.Container>
    )
}