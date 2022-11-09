const person = {
    name: 'Leonardo',
    shirt: 'white'
}

//access object: dot notation vs bracket notation
// console.log(person.name)
// console.log(person.shirt)

// console.log(person['name'])
// console.log(person['shirt'])

//assign object
// person.phone = '1-222-333-444'
// person['address'] = 'something'

// console.log(person.phone)
// console.log(person.address)

// console.log(person)

const personTwo = {
    name: 'Matt',
    shirt: 'green'
}

//METHODS - PROPERTY CONTAINING A FUNCTION DEFINITION

/* 
    car - object

    properties
    car.name
    car.model

    methods
    car.start()
    car.break()
*/


// es6 arrow function (2 arguments)
// object
// template literals
const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 100000,
        liabilities: 70000,
        netWorth: function() {
            return this.assets - this.liabilities
        }
    }

    const intro = `Hi, my name is ${person.name} and my shirt is ${person.shirt} and my amount is ${person.netWorth()} PLN`

    

    return intro
    return amount
} 

//console.log(introducer('Matt', 'green'))
