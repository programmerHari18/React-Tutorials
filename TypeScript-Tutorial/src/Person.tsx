//We can create a custom Component in .tsx file, which may be used in several components
//Interface helps us to create classes as same as Java

import {  useState } from "react";
import { Props } from "./Models/Person";

//Instead of usage of any type. Creating Interfaces helps us to define types and it restricts the unnecessary type comparisions
export const User = (props : Props) => {

    const [personBio, setPersonBio] = useState<string | null>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value)
    };

    //This is for change events like onChange, onHover events
    //As we are taking input from web, we used HTMLInputElement
    
    // const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    //     eve nt.preventDefault();
    // }
    //This is for form submission

    // const [isShowInfo, setShowInfo] = useState<boolean | null>(false); // we are explicitly casting the type, so that no other type can be set to the variable. | null makes the variable can accept either boolean or null value
    // const toggleInfo = () => {
    //     setShowInfo((prev) => !prev)
    // }

    return <div>
        {/* {isShowInfo && ( */}
            <>
                <p>Name : {props.name}</p>
                <p>Age : {props.age}</p>
                
                <p>This person {props.isMarried ? "is married" : "is single"}</p>
                <p>Country of Origin : {props.country}</p>
            </>
     {/* )} */}
    <p> {props.name}'s Bio : {personBio === null ? "No Bio Available" : personBio}</p>

    {/* <button onClick={toggleInfo}>Toggle Info</button> */}
    <input onChange={handleChange}/>
        </div>
};