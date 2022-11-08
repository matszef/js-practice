const add = (a, b) => a + b
const sub = (a, b) => a - b
const mult = (a, b) => a * b
const div = (a, b) => {
    if( a == 0 || b == 0 ){
        alert('dont divide by zero')
    }
    return a / b
}

const input = prompt('add, sub, mult or div?')

switch (input) {
    case 'add':
        const a = Number(prompt('enter a'))
        const b = Number(prompt('enter b'))
        const result = add(a, b)
        alert(result)
        break;

    default:
        break;
}