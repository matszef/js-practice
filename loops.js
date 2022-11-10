const fruits = ['banana', 'apple', 'orange', 'pinapple']

console.log(fruits)

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// console.log('')

// for (const f of fruits) {
//     console.log(f)
// }

const numbers = [1, 2, 3, 4, 5, 6]

// const result = []

// for (const n of numbers) {
//     result.push(n * 2)
// }

// console.log(result)

const doubleValues = (numbers) => {
    let result = []
    for (const n of numbers) {
        result.push(n * 2)
    }

    return result
}

const squareValues = (numbers) => {
    let result = []
    for (const n of numbers) {
        result.push(Math.pow(n, 2))
        result.push( n ** 2)
    }

    return result
}

const howManyLetters = (phrase) => {
    //of gives value
    //in gives index of value

    let result = 0

    for (const index in phrase) {
        console.log(Number(index) + 1)
        result = Number(index) + 1
    }

    //return {result: result}
    return { result } //if we return one thing as an object!
}

//const phrase = 'psst hey kid, wanna be a programmer?'
//console.log(howManyLetters(phrase))

const sumArray = (numbers) => {

    let result = 0

    for (const n of numbers) {
        result += n
    }

    return { result }
}

const maxValue = (numbers) => {

    let max = numbers[0]

    for (const n of numbers) {
        if (n > max) {
            max = n
        }
    }

    return { max }
}

const data = [-10, -2, -2, -22, -2, -4, -5]

console.log(sumArray(data))
console.log(maxValue(data))


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

