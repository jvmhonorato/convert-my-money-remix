import { Link, Outlet } from "@remix-run/react";


// folder and file in same level with same name, the file turns a Layout file
export default function JurosLayout(){
    return (
        <>
        <p className="bg-slate-700 text-white p-4">
        <Link to="/juros/100">100</Link> | {''}
        <Link to="/juros/200">200</Link> | {''}
        <Link to="/juros/300">300</Link> | {''}
        <Link to="/juros/400">400</Link> | {''}
        <Link to="/juros/500">500</Link> | {''}
        <Link to="/juros/600">600</Link> | {''}
        </p>
        <Outlet/>
        </>
    )
}