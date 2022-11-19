import type { LoaderFunction } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react";


export const loader : LoaderFunction = ({params}) => {
const currency = params.currency
    const myHeaders = new Headers();
myHeaders.append("apikey", "BONWvbeeNL5d0ldN7fR5ZhidSjsDwlYw");

    const requestOptions = {
        method: 'GET',
        
        headers: myHeaders
      };
      
      return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=BRL&from=${currency}&amount=1`, requestOptions)
     
}

export default function CurrencyHome() {
    const data = useLoaderData()
    return (
        <>
        <h1>
        <Link to="/currencies">
        Converting: ${data.query.to} ${data.query.from}
        </Link>
           </h1>
   <p>{data.result}</p>

        </>
    ) 
}