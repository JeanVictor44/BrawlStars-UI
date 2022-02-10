import * as S from './style'
import registerBg from '../../assets/backgrounds/register-bg.svg'
import useAuth from '../../contexts/auth'
import { ProgressBar } from '../../components/ProgressBar'
import { BRAWLERS_ANIMATION, CARD_OPTIONS, ICONS} from '../../constants'
import { Link } from 'react-router-dom'
import { Progress } from '../../components/ProgressBar/style'

export const Principal = () => {
    const { userData: { userName } } = useAuth()
    
    return (
        <S.Container background={registerBg}>
            <S.Header>
                <S.ProfileInfosContainer >
                    <S.ProfileCard>
                        <img src={ICONS.MIKE} alt='Profile icon'/>
                        <p>{userName}</p>   
                    </S.ProfileCard>
                    <S.ProfileCardTrophies>
                        <header> 
                            <img src={ICONS.LEAGUE} alt="League icon"/>
                            <div>
                                <img src={ICONS.TROPHY} alt="Trophy icon" />
                                <span>999</span>
                            </div>
                        </header>
                        <div>
                            <ProgressBar width={'80%'} height={'25px'} progressColor='orange' />
                            <img src={ICONS.REWARD_PROFILE} alt="Reward profile icon"/>
                        </div>
                    </S.ProfileCardTrophies>
                </S.ProfileInfosContainer>
                <S.PlayerResourcesContainer>
                    <S.PlayerResource>
                        <div>
                            <img src={ICONS.POWER_POINT} alt="Power point icon" />
                        </div>
                        <span>999</span>
                    </S.PlayerResource>
                    <S.PlayerResource>
                        <div>
                            <img src={ICONS.COIN} alt="Coin icon" />
                        </div>
                        <span>999</span>
                    </S.PlayerResource>
                    <S.PlayerResource>
                        <div>
                            <img src={ICONS.GEM} alt="Gem icon" />
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
                        <img src={CARD_OPTIONS.SHOP} alt="Shop card"/>
                        <p>shop</p>
                    </S.CardOption>
                    <S.CardOption to="/brawlers">
                        <img src={CARD_OPTIONS.BRAWLERS} alt="Brawlers card"/>
                        <p>brawlers</p>
                    </S.CardOption>
                    <S.CardOption to="/news">
                        <img src={CARD_OPTIONS.NEWS} alt="News card"/>
                        <p>news</p>
                    </S.CardOption>
                </S.SideOptions>
                
                <S.BrawlerView>
                    <S.Actions>
                        <S.Action>
                            <img src={ICONS.PLUS} alt="Plus icon"/>
                        </S.Action>
                        <S.Action>
                            <img src={ICONS.SEARCH} alt="Search icon"/>
                        </S.Action>
                    </S.Actions>
                    <S.Brawler>
                            <S.Rank>
                                <div>
                                    <img src={ICONS.RANK} alt="rankIcon"/>
                                </div>
                                <ProgressBar width={'250px'} height={'40px'} progressColor='orange' progressType='trophy' />
                            </S.Rank>
                        <img src={BRAWLERS_ANIMATION._8bit} alt="Brawler image" />
                    </S.Brawler>
                </S.BrawlerView>

                <S.SideOptions>
                    <S.CardOption to="/friends">
                        <img src={CARD_OPTIONS.FRIENDS} alt="friends card"/>
                        <p>friend</p>
                    </S.CardOption>
                    <S.CardOption to="/club">
                        <img src={CARD_OPTIONS.CLUB} alt="Club card"/>
                        <p>club</p>
                    </S.CardOption>
                    <S.CardOption to="/chat">
                        <img src={CARD_OPTIONS.CHAT} alt="Chat card"/>
                        <p>chat</p>
                    </S.CardOption>
                </S.SideOptions>
            </S.Main>
            <S.Footer>
                
                <S.BrawlPass>
                    <S.PassIcon>
                        <img src={ICONS.PASS} alt="Pass icon"/>
                        <span>Brawl Pass</span>
                    </S.PassIcon>
                    <ProgressBar width='80%' height="35px" progressColor='yellow' progressType='pass'/>
                </S.BrawlPass>

                <S.GameButtons>
                    <S.ContainerEventButton>
                        <S.EventButton>
                            <S.EventIcon>
                                <img src={ICONS.GAME_MODE} alt="Game mode icon"/>
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