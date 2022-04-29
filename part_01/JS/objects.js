const arto = {
    name: 'Arto Hellas', 
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const object2 = {
    name: 'Full Stack web application development', 
    level: 'intermediate studies', 
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov'
    },
    grades: [2,3,5,3],
    department: 'Stanford University',
}

console.log(arto.name)
const fieldName = 'age'
console.log(arto[fieldName])

arto.adress = "Helsinki"
arto['secret number'] = 12345

console.log(arto.adress)
console.log(arto['secret number'])

console.log('--- second part ---')

arto.greet()

arto.grownOlder = function() {
    this.age += 1
}

console.log(arto.age)
arto.grownOlder()
console.log(arto.age)

arto.doAdition = (a,b) => console.log(a+b)

arto.doAdition(1,4)

const referenceToAdition = arto.doAdition
referenceToAdition(10,15)

const referenceToGreet = arto.greet
console.log('when called through reference the methode lose knowlege of "this"!')
referenceToGreet()


console.log('Functions like setTimeout() use reference to the methode and lose the knolege of "this" aswell')
setTimeout(arto.greet, 1000)

console.log("This problem can be fixed with bind(Obj)")
setTimeout(arto.greet.bind(arto),1000)