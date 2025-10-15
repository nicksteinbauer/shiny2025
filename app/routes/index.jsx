
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
//import { MetaFunction } from "@remix-run/node";

export async function loader(){
	return json(await client.getPage("Home"))
}



export default function Index() {
	const {title } = useLoaderData();
	
  return (
	<h1>{title}</h1>
  );
}
