import * as S from './style'
import registerBg from '../../assets/backgrounds/register-bg.svg'
import mikeIcon from '../../assets/icons/mike.svg'
import useAuth from '../../contexts/auth'
import trophyIcon from '../../assets/icons/trophy.png'
import leagueIcon from '../../assets/icons/league.png'
import rewardProfileIcon from '../../assets/icons/reward-profile.png'
import gemIcon from '../../assets/icons/gem.png'
import coinIcon from '../../assets/icons/coin.png'
import powerPointIcon from '../../assets/icons/power-point.png'
import { ProgressBar } from '../../components/ProgressBar'
import { BRAWLERS_ANIMATION, CARD_OPTIONS } from '../../constants'
import searchIcon from '../../assets/icons/search.png'
import plusIcon from '../../assets/icons/plus.png'
import rankIcon from '../../assets/icons/rank.png'
import passIcon from '../../assets/icons/pass.png'
import gameModeIcon from '../../assets/icons/game-mode.png'
import { Link } from 'react-router-dom'
import { Progress } from '../../components/ProgressBar/style'

export const Principal = () => {
    const { userData: { userName } } = useAuth()
    
    return (
        <S.Container background={registerBg}>
            <S.Header>
                <S.ProfileInfosContainer >
                    <S.ProfileCard>
                        <img src={mikeIcon} alt='Profile icon'/>
                        <p>{userName}</p>   
                    </S.ProfileCard>
                    <S.ProfileCardTrophies>
                        <header> 
                            <img src={leagueIcon} />
                            <div>
                                <img src={trophyIcon} />
                                <span>999</span>
                            </div>
                        </header>
                        <div>
                            <ProgressBar width={'80%'} height={'25px'} progressColor='orange' />
                            <img src={rewardProfileIcon} />
                        </div>
                    </S.ProfileCardTrophies>
                </S.ProfileInfosContainer>
                <S.PlayerResourcesContainer>
                    <S.PlayerResource>
                        <div>
                            <img src={powerPointIcon} alt="coin" />
                        </div>
                        <span>999</span>
                    </S.PlayerResource>
                    <S.PlayerResource>
                        <div>
                            <img src={coinIcon} alt="coin" />
                        </div>
                        <span>999</span>
                    </S.PlayerResource>
                    <S.PlayerResource>
                        <div>
                            <img src={gemIcon} alt="coin" />
                        </div>
                        <span>30</span>
                    </S.PlayerResource>
                </S.PlayerResourcesContainer>
                <S.SettingButton>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.SettingButton>
            </S.Header>
            <S.Main>
                <S.SideOptions>
                    <S.CardOption to="/shop">
                        <img src={CARD_OPTIONS.SHOP} />
                        <p>shop</p>
                    </S.CardOption>
                    <S.CardOption to="/brawlers">
                        <img src={CARD_OPTIONS.BRAWLERS} />
                        <p>brawlers</p>
                    </S.CardOption>
                    <S.CardOption to="/news">
                        <img src={CARD_OPTIONS.NEWS} />
                        <p>news</p>
                    </S.CardOption>
                </S.SideOptions>
                
                <S.BrawlerView>
                    <S.Actions>
                        <S.Action>
                            <img src={plusIcon} />
                        </S.Action>
                        <S.Action>
                            <img src={searchIcon} />
                        </S.Action>
                    </S.Actions>
                    <S.Brawler>
                            <S.Rank>
                                <div>
                                    <img src={rankIcon} />
                                </div>
                                <ProgressBar width={'250px'} height={'40px'} progressColor='orange' progressType='trophy' />
                            </S.Rank>
                        <img src={BRAWLERS_ANIMATION._8bit} />
                    </S.Brawler>
                </S.BrawlerView>

                <S.SideOptions>
                    <S.CardOption to="/friends">
                        <img src={CARD_OPTIONS.FRIENDS} />
                        <p>friend</p>
                    </S.CardOption>
                    <S.CardOption to="/club">
                        <img src={CARD_OPTIONS.CLUB} />
                        <p>club</p>
                    </S.CardOption>
                    <S.CardOption to="/chat">
                        <img src={CARD_OPTIONS.CHAT} />
                        <p>chat</p>
                    </S.CardOption>
                </S.SideOptions>
            </S.Main>
            <S.Footer>
                
                <S.BrawlPass>
                    <S.PassIcon>
                        <img src={passIcon} />
                        <span>Brawl Pass</span>
                    </S.PassIcon>
                    <ProgressBar width='80%' height="35px" progressColor='yellow' progressType='pass'/>
                </S.BrawlPass>

                <S.GameButtons>
                    <S.ContainerEventButton>
                        <S.EventButton>
                            <S.EventIcon>
                                <img src={gameModeIcon} />
                            </S.EventIcon>
                            <S.EventDetails>
                                <p>Brawl ball</p>
                                <p>Super Stadium</p>
                            </S.EventDetails>
                        </S.EventButton>
                    </S.ContainerEventButton>
                    <S.ContainerPlayButton>
                        <S.PlayButton>
                            Play
                        </S.PlayButton>

                    </S.ContainerPlayButton>   
                </S.GameButtons>
            </S.Footer>
        </S.Container>
    )
}