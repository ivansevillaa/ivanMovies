export function secondsToMinutes(seconds) {
    const min = parseInt(seconds / 60, 10)
    const secs = parseInt(seconds % 60, 10)
    return `${leftPad(min.toString())}:${leftPad(secs.toString())}`
}

function leftPad(number) {
    const pad = '00'
    return pad.substr(0, pad.length - number.length) + number    
}