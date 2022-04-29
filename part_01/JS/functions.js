console.log('--- Sum function ---')

const sum = (p1, p2) => {
    console.log(p1) 
    console.log(p2) 
    return p1 * p2
}

console.log(sum(1,5))

console.log('--- Square function ---')

const square = p => {
    console.log(p) 
    return p * p
}

console.log(square(3))

console.log('--- Shorter square function ---')

const shortSquare = p => p * p

console.log(shortSquare(5))

console.log('--- Array squared function ---')

const t = [1,2,3,4,5]
const tSquared = t.map(p => p * p)
 
console.log(tSquared)

console.log('--- Oldschool function ---')

function product(a,b) {
    return a * b
}

console.log(product(2,6))

const average = function(a,b) {
    return (a + b) / 2
}

console.log(average(2,5))