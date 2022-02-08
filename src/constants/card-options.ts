import shopIcon from '../assets/icons/shop.png'
import newsIcon from '../assets/icons/news.png'
import brawlersIcon from '../assets/icons/brawlers.png'
import friendsIcon from '../assets/icons/friends.png'
import clubIcon from '../assets/icons/club.png'
import chatIcon from '../assets/icons/chat.png'

const CARD_OPTIONS = {
    SHOP:shopIcon,
    BRAWLERS: brawlersIcon,
    NEWS:newsIcon,

    FRIENDS:friendsIcon,
    CLUB: clubIcon,
    CHAT: chatIcon
} as const

export default CARD_OPTIONS