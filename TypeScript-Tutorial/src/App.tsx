import './App.css'
import { Countries } from './Models/Enum'
import { User } from './Person'
import { UserProvider } from './UserContextProvider'
// let name : string = "Pedro"; //we have to define the type to the variable, and we cannot assign other type to the variable. Basically this is strict mode
// let age : number = 24;
// let isMarried : boolean = true;

// let ages : number[] = [1,2,3,4];
// let  person: any = 3;
// person = "Harihara"; //not recommended using any

function App() {
  return (
    <UserProvider>
    <User name={"Pedro"} age = {22} isMarried = {false} country={Countries.India} /> {" "}  
    <User name={"Harihara"} age = {23} isMarried = {true}country={Countries.UnitedStates}/>{" "}
    
    </UserProvider>
  )
}
//We can use Props among several components for the passage of the data.
//In the props, we can give "22" in the prop, it will show the value, and if we give
//But this is wrong. If we define an interface and pass it to it, then it will raise a bug that the type that we are mentioning is not as expected. This will be seen even before we run the scripts
export default App

//When we observe, we are using Countries.India but not "India" directly, this is because We defined directly Enum type at the props.
