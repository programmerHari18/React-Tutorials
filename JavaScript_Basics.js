//ARROW FUNCTIONS
function DoSomething() {
    return 2;
} //Regular Function

const DoSomething = () => {
    return 10;
} // Arrow Function ( Good for Callback functions)
//if we use Regular function, we had to use export default and function name for usage of the component in multiple components
//if we use Arrow functions, then we can just use export const and function name
//we can use this directly in the components too. like Anonymous functions
<button onClick={() => {
    console.log("Button Clicked");
}}>Click Here ! 
</button>
//This is an example of Anonymous function



//TERNARY OPERATORS
let age = 16;
let name = "Pedro";

if(age > 16){
    name = "Pedro";
}else{
    name = "Jack";
}
//We can use Ternary operators instead of this for lesser lines of codes.

name = age > 10 ? "Pedro" : "Jack";

//implementation

const Component = () => {
    return age > 10 ? <div>Pedro</div> : <div>Jack</div>
}

//OBJECTS
const person = {
    name : "Hari",
    age : 20,
    isMarried : false
};

const userName = person.name;
const userAge = person.age;
const isMarried = person.isMarried;
//This is taking too much space and we can write in a line
const {simpleName, simpleAge, simpleIsMarried} = person;
//we can retrieve this variables Separately
console.log("Simple name : ", simpleName);
console.log("Simple Age : ", simpleAge);
console.log("Is Married : ", simpleIsMarried);

const details = {
    company : "Adtech Corp",
    address : "Nanakramguda",
    Size : 100
};
//If, the variable and property in an object has same name, then just use as above.

const person2 = {...person, name : "eAppSys"}
//If person and person 2 has same property but differ in at least one property, then we can use the above example

const names = ["Harihara", "Vardhan", "Badri", "Saketh"];
const names2 = [,,,names, "Havish"]; //We are adding names of previous array to current array.

//ARROW FUNCTIONS (MAP, FILTER, REDUCE)

//MAP
//If you want to alter each value in an array, then instead of use for-loop, just use the map functions
names.map((name) => {
    console.log("Name : ",name);
    return name + "1";
});//This appends 1 to every string in the array.

//Implementation
<ul>
    {names.map((name, index) => (
        <li key={index}>{name}</li>
    ))}
</ul>

//FILTER

console.log(names.filter((name) => {
    return name !== "Saketh";
}));


