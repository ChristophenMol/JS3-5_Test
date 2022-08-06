class Person {
    constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }
}

function createNewObject() {
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById("lastName").value;
var age = document.getElementById("age").value;
let p = new Person(firstName, lastName, age);
let newText = document.createElement("div");
//newText.innerHTML = "Hello " + p.firstName + p.lastName + "! You are " + p.age + "years old.";
let newString = document.createTextNode("Hello " + p.firstName + p.lastName + "! You are " + p.age + " years old.");
newText.appendChild(newString);
let sentence = document.getElementById("div1");
sentence.appendChild(newText);
     }
     
    
    
    