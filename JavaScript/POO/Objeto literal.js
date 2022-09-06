let user = {
    nome: {
        first: 'Mr.',
        last: 'Anderson'
    },
    age: undefined,
    genre: 'M',
    bio: function() {
        alert('Error! No biograph declared to ' + this.name)
    }
}

user.nome.first
user.name.last
user.age
user.bio()