
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
//import { MetaFunction } from "@remix-run/node";
import RichTextRenderer from "../components/RichTextRenderer";
import SimpleImageMap from "../components/SimpleImageMap";
import SimpleButtonMap from "../components/SimpleButtonMap";

export async function loader(){
	return json(await client.getPageByTitle("Shiny Windows Window Cleaning"))
}



export default function Index() {
	const {title, secondaryTitle, content, pageClass, bannersCollection, buttonsCollection } = useLoaderData();
	
  return (
	<div className={`flex-sm inside-xl noPadding ${pageClass}`}>

		<section className="backWhite sixty flex-vertical">
			<div className="inside-lg">
				<h1><span>{secondaryTitle}</span>{title}</h1>
				{content?.json && (
					<div><RichTextRenderer content={content.json} /></div>
				)}
				{buttonsCollection?.items?.length > 0 && (
					<div className="">
						<SimpleButtonMap buttonsCollection={buttonsCollection}/>
					</div>
				)}
			</div>
		</section>
		
		{bannersCollection?.items?.length > 0 && (
			<div className="forty flex-vertical">
				<div className="aboutPadd">
					<SimpleImageMap bannersCollection={bannersCollection}/>
				</div>
			</div>
		)}
		
	</div>
  );
}
