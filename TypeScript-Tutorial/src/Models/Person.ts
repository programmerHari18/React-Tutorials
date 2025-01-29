import { createContext } from "react";
import { Countries } from "./Enum";

export interface Props {
    name : string,
    age : number, 
    isMarried : boolean,
    country : Countries;
}

export interface UserContextType{
    users: Props[] | null,
    addUser : (user : Props) => void; // It takes Props type and returns void type
    updateUser : (id : string) => void; 
    deleteUser : (id : string) => void; 
}

const contextInitialValues = {
    users : [],
    addUser:  () => [],
    updateUser: () => [],
    deleteUser : () => [], 
};

export const UserContext = createContext<UserContextType>(contextInitialValues);
