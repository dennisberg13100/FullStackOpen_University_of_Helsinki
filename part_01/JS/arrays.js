const t = [1, -1, 3]

t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value=> {
    console.log(value)
})

// functional programing (like used in react) use imutable data structures
// That's why in React we use concat instead of push 

console.log('--- Second Part ---')

const t2 = t.concat(7)

console.log(t)
console.log(t2)

console.log('--- Map example ---')

const m1 = t.map(value => value * 2)
console.log(m1)

console.log('--- Using map to make somthing completely different---')
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

console.log('--- Distructuring assignment ---')
const array = [1,2,3,4,5]

const [first, second, ...rest] = array

console.log(first, second)
console.log(rest)