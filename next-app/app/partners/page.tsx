import Footer from "~/components/Footer"
import Navigation from "~/components/Navigation"
import { fetchAPI, getStrapiMedia } from "~/app/api/strapi"
import { Key} from "react";

export const metadata = {
  title: "Partenaires | Oz Ensemble",
  description:
    "Découvrez les partenaires qui ont soutenu Oz Ensemble, une application mobile qui fut dédiée à la maîtrise de la consommation d'alcool.",
}

async function getPartners() {
  try {
    const path = `/partners-page`;
    const urlParamsObject = {
      populate: ["section", "section.logos", "section.logos.image"],
    };
    const options = {};
    const { data } = await fetchAPI(path, urlParamsObject, options);
    return data?.attributes;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Partners() {
  const partners = await getPartners();
  return (
    <div className="mt-[70px]">
      <Navigation />
      <div className="mt-30 lg:mt-40">
        <h1 className="mb-2 text-3xl text-center font-extrabold lg:text-5xl text-oz-blue">
          {partners?.title || "Ils parlent de nous"}
        </h1>
        {partners?.section?.map((section: { id: Key; title: string; logos: any[]; }) => (
          <div key={section.id} className="px-20 lg:py-10">
          <h3 className="text-2xl font-bold lg:text-4xl text-oz-green">
            {section.title}
          </h3>
          <div className="flex items-center flex-wrap mt-10 gap-10 ">
            {section.logos?.map((logo)=>(
              <div key={logo.id} className="transition duration-500 hover:scale-110 basis-1/6">
              <a
                className=""
                href={logo.url}
              >
                <img
                  className="pt-8"
                  src={getStrapiMedia(logo.image.data?.attributes.url) || ""}
                  alt={logo.image.data?.attributes.alternativeText || ""}
                  height={120}
                  width={120}
                />
              </a>
            </div>
          ))}
          </div>
        </div>
        ))}
      </div>
      <Footer />
    </div>
  )}
