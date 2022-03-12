function intro (){
    console.log(`hi my name is ${this.name} and i enjoy ${this.hobbies.join(", ")}.`)
}

const andrew = {
    name: "Andrew", 
    hobbies: ['football', 'sci-fi'],
}


const andew = intro.bind(andrew)

andew()
