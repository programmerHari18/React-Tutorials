var name = "Pedro";
console.log("Hello ", name);
name = "Hari";
console.log("Hello Mr", name);


const event = new Promise((resolve, reject) => {
    var name = "Pedro";
    if (name == "Pedro"){
        resolve(name);
    }else{
        reject("Name is not pedro");
    }
});

//resolve() function helps to make the execution to run smoother
//reject() make sure to reject the execution, when the condition fails

event.then((name) => {
    console.log(name);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("PROMISE FINISHED");
})
//This returns an object.
//then called when resolve happens, catch called when reject happens
//we can use this to fetch data from api

const axios = require("axios");


// console.log(data);
// data.then((response) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Promise resolved");
// });
//if we don't use then and catch, and use console to show the data, the promise object will be in pending state. So we use then and catch statements to get the data and store it in data variable

const fetchData = async () => {
    try{
        const data = await axios.get("https://cat-fact.herokuapp.com/factss");
        console.log(data);
    }catch(err){
        console.log(err);
    }finally{
        console.log("Finally API has been called")
    }
}
fetchData();

//Alternate for then, catch, finally we can use async and await keywords to get the data from the api Asynchronously. 