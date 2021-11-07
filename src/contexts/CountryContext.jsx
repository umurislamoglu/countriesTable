import React, { createContext , useState , useEffect} from 'react'
import axios from "axios"


const CountryContext = createContext();

export const CountryProvider = ({children}) => {
    const [countries, setCountries] = useState([])

    const values = {
        countries 
        
    }

    useEffect(()=>{

            axios.get("https://restcountries.com/v2/all").then((res)=>{
                setCountries(res.data)
            })


    },[])

    return (
        <CountryContext.Provider value={values}>{children}</CountryContext.Provider>
    )
}

export default CountryContext
