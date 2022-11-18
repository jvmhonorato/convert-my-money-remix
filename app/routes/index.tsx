import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader : LoaderFunction = () => {
  console.log("loader")
  return fetch('http://httpbin.org/uuid')
}

export default function Index() {
  const {uuid} = useLoaderData()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <p>UUID: {uuid}</p>
    </div>
  );
}
