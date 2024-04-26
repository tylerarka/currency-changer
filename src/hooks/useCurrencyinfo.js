import {useEffect,useState} from 'react'

function useCurrencyinfo(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
     .then((res)=>res.json)//as we get the api in string so we need to convert it into json//
     .then((res)=>setData(res[currency]))

    },[currency])
    console.log(data)
    return data

    
}
export default useCurrencyinfo