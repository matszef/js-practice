const letterFrequency = (phrase) => {
    let frequency = {}
    for (const letter of phrase) {
        if (letter in frequency) {
            frequency[letter]++
        } else {
            frequency[letter] = 1
        }
    }
    return frequency
}

console.log(letterFrequency('WioletaSzefler'))



const wordFrequency = (phrase) => {
    const words = phrase.split(' ')
    return letterFrequency(words)
}

console.log(wordFrequency('hi hi hi same same same'))