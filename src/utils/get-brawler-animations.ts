import { BrawlersName } from '../common/types'

const getBrawlerAnimation = (brawlerName: BrawlersName):string => {
   console.log(require(`../assets/brawlers/${brawlerName}/${brawlerName}-1.png`) )
   return require(`../assets/brawlers/${brawlerName}/${brawlerName}-1.png`).default
    
}

export default getBrawlerAnimation