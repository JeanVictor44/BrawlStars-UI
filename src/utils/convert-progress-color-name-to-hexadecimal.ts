import { PROGRESS_COLORS } from "../constants"

const convertProgressColorNametoHexadecimal = (color: keyof typeof PROGRESS_COLORS ) => {
    return PROGRESS_COLORS[color]
}

export default convertProgressColorNametoHexadecimal