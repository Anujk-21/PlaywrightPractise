//class

class animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        return `${this.name} make a sound`
    }
}

const dog = new animal("Buddy");
console.log(dog);
//inheritance
class Cat extends animal{
    speak(){
        return `${this.name} meow loudly`;
    }
}

//polymorphism

const specificDog = new dog("max")
const genericanimal = new dog('leo');
console.log(specificDog);
console.log(genericanimal);

