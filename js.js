//loop

function accum(s) {
    const arr = []
    const lowerStr = s.toLowerCase()

    for(let i = 0; i < lowerStr.length; i++) {
        let tempStr = lowerStr[i].toUpperCase()
        for(let j = 0; j < i; j++) {
            tempStr += lowerStr[i]
        }
        arr.push(tempStr)
    }

    return arr.join("-")
}



function isIsogram(str) {
    const counts = {}

    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase()

        if (!counts[letter]) {
            counts[letter] = 1
        } else {
            return false
        }
    }
    return true
}