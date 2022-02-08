import * as S from './style'
import { PROGRESS_COLORS } from '../../constants'
import { convertProgressColorNametoHexadecimal } from '../../utils'
import trophyIcon from '../../assets/icons/trophy.png'

type Colors = keyof typeof PROGRESS_COLORS // get keys that exist in PROGRESS_COLORS

export type ProgressType = 'trophy' | 'pass' | false

interface ProgressBarProps {
    progressColor: Colors,
    width:string,
    height:string,
    progressType?: ProgressType,
}
export const ProgressBar = ({progressColor, width, height, progressType=false}: ProgressBarProps) => {
    return (
        <S.Container width={width} height={height} >
            <S.Progress color={convertProgressColorNametoHexadecimal(progressColor)}>
            </S.Progress>
            {
                    progressType === 'trophy' ? (
                        <div>                    
                            <img src={trophyIcon}/>
                            <span>576</span>
                        </div>
                    ) 
                    : progressType === 'pass' && 
                    (
                            <div>
                                <span>2/500</span>
                            </div>
                    )

            }
        </S.Container>
    )
}