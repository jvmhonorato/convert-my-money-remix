import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader : LoaderFunction = () => {
  console.log("loader")
  return fetch('http://httpbin.org/uuid')
}

export default function Index() {
  const {uuid} = useLoaderData()
  return (
    <div >
      <h1 className="p-4 bg-slate-200">Welcome to Convert-my-money</h1>
      <p>UUID: {uuid}</p>
      <Link to='/about-us'>Abolt us</Link>
    </div>
  );
}
