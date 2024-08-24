import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";

const UserContext = createContext()

function UserContextProvider({children}){

    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        
        const loginEmail = localStorage.getItem('dataUser') && localStorage.getItem('dataUser')

        axios.get('https://reqres.in/api/users')
        .then(data => {
            const  dataUser = data.data.data.find(({email}) => email === loginEmail)

            if(dataUser != null){
                setTimeout(() => {
                    setUsuario({
                        name: `${dataUser.first_name} ${dataUser.last_name}`,
                        avatar: dataUser.avatar,
                        registered: '29/06/2022'
                    })
                },1000)
            }
        })
    }, [])

    return(
        <>
            <UserContext.Provider value={usuario}>
               { children }
            </UserContext.Provider>  
        </>
    )
}

export {UserContext, UserContextProvider}