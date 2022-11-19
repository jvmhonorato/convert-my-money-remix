import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader : LoaderFunction = () => {
  console.log("loader")
  return fetch('http://httpbin.org/uuid')
}

export default function Index() {
  const {uuid} = useLoaderData()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <p>UUID: {uuid}</p>
      <Link to='/about-us'>Abolt us</Link>
    </div>
  );
}
