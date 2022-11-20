import { Link, Outlet } from "@remix-run/react";


// folder and file in same level with same name, the file turns a Layout file
export default function CurrenciesLayout(){
    return (
        <>
        <p className="bg-slate-700 text-white p-4">
            Moedas mais utilizadas  | {''}
        <Link to="/currencies/BRL">BRL</Link> | {''}
        <Link to="/currencies/USD">USD</Link> | {''}
        <Link to="/currencies/EUR">EUR</Link> | {''}
       
        </p>
        <Outlet/>
        </>
    )
}