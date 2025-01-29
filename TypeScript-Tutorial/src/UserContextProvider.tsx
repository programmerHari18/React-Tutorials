import { useEffect, useState } from "react"
import { Props } from "./Models/Person"
import { UserContext } from "./Models/Person"
import { Countries } from "./Models/Enum"

interface Prop{
    children : React.ReactNode
}
export const UserProvider = (props : Prop) => {

    const [users, setUsers] = useState<Props[] | null>(null);

    useEffect(() => {
        setUsers([{name: "Harihara", age: 32, isMarried: false, country : Countries.India}])
    }, []);

    const addUser = (user: Props) => {
        setUsers((prevUsers) => prevUsers ? [...prevUsers, user] : [user]);
    };
    
    const updateUser = (id: string) => {
        console.log("Update user logic here with ID:", id);
    };
    
    const deleteUser = (id: string) => {
        console.log("Delete user logic here with ID:", id);
    };
    

    return <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>
    {props.children}
    </UserContext.Provider>
}