groceries = ['banana', 'apple', 'orange', 'pinapple']

//add element to the end of array
groceries.push('kiwi', 'blueberries')
console.log(groceries)

//grabbing elements
//start from 0 inclusive and up to 2 
console.log(groceries.slice(0, 3))
console.log(groceries.slice(3, 6))
console.log(groceries.slice(1, 4))

//array method (slice, push, indexOf, lenght)
console.log(groceries.indexOf('orange'))

console.log(groceries.length)