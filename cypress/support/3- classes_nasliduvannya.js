class Parent {
    constructor(firstName,age){       
        this.firstName = firstName;     //слово this вказує конкретний екземпляр класу - всі дії будуть відбуватися саме для екземпляру, а не всього класу
        this.age  = age;
        this.lastName = 'Ivanenko';

    }
    
    greeting() {
        if (this instanceof Parent) {     //можна додати умову, що саме виконувати для екземпляру класу, і не виконувати для тих хто унаслідував
        console.log('hi!');  
        }
        else {
            console.log('Hey-hey!');
        }
    }

    tellName(firstName,lastName) {
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }

    tellAge(age) {
        console.log(`I'm ${this.age} years old`);
    }
}

class Child extends Parent {           //наслідує клас Перент, тому йому не потрібний конструктор, має ті самі методи, але деякі можуть бути перезаписані
    greeting () {
        console.log('Hey! New greeting ^)')
    }
}

const parent = new Parent('Tetiana','40');

const child = new Child('Ivan','8');

parent.greeting();
parent.tellName();
parent.tellAge();

child.greeting();
child.tellName();
child.tellAge();