export default (range = {}) => {
    if (Object.keys(range).length === 0) {
        return Math.random()
    }
    else {
        if (range.hasOwnProperty('min') && range.hasOwnProperty('max')) {
            return Math.floor(Math.random() * (range.max - range.min) + range.min)
        }
        else console.log('Error: config object must have min and max properties')
    }
}