import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader : LoaderFunction = async() => {
    const myHeaders = new Headers();
myHeaders.append("apikey", "BONWvbeeNL5d0ldN7fR5ZhidSjsDwlYw");

const requestOptions = {
  method: 'GET',

  headers: myHeaders
};

return fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
 

}


export default function Currencies(){
    const {symbols} = useLoaderData()
    return (
        <>
        <h1>Currencies</h1>
        <ul>
            {Object.keys(symbols).map((sigla : string) => (
                <li key={sigla}>
                    <Link to={`/currencies/${sigla}`}>
                   {sigla}-{symbols[sigla]}
                      </Link>
                    </li>
                  
            ))}
        </ul>
        </>
    
    
    )
}