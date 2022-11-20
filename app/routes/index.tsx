import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Header from "~/components/Header";

export const loader : LoaderFunction = () => {
  console.log("loader")
  return fetch('http://httpbin.org/uuid')
}

export default function Index() {
  const {uuid} = useLoaderData()
  return (
    <div >
      
     
      <p>UUID: {uuid}</p>
      <Link to='/about-us'>Abolt us</Link>
    </div>
  );
}
