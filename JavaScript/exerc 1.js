let weight //undefined (ate o momento)
weight = 60.7

let characteristics = {
    name: 'jones',
    age: 60,
    stars: 4.7,
    isSubscribed: false
}


console.log(`${characteristics.name} de idade ${characteristics.idade} pesa ${weight} kg`)

let students = [
    characteristics
]

console.log(students[0])

const mark = {
    name: 'mark men',
    age: 88,
    weight: 50.4,
    isSubscribed: true
}

// pega a posição 1 e aloca a const mark
students[1] = mark

console.log(students[1])