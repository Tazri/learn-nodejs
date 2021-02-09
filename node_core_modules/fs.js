// fs module use for create, read,write ,update and delete

let fs = require('fs');
let faker = require('faker');

class Person{
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.favoriteColor = faker.commerce.color();
    }
    getFullName(){
        return this.firstName +' '+this.lastName;
    }
}

function createRandomPerson(numberOfPeople){
    const people = [];
    for(let i = 0;i < numberOfPeople;i++){
        people.push(new Person());
    }
    return people;
}

let peopleData = createRandomPerson(40);
let peopleJsonData = JSON.stringify(peopleData);

// write file
fs.writeFile('./src/json/randomFile.json',peopleJsonData,error=>{
    if(error){
        console.log(error);
    }else{
        console.log('>>>>File write Successfully<<<<');
    }
})