import Footer from "~/components/Footer"
import Navigation from "~/components/Navigation"
export const metadata = {
  title: "Plan du site | Oz Ensemble",
  description: "Plan du site de l'application Oz Ensemble",
}
import { fetchAPI } from "~/app/api/strapi";


export default async function Plan() {
  const data = await getData();
  return (
    <div className="mt-[70px]">
      <Navigation />
      <div className="mt-30 lg:mt-40">
        <h1 className="mb-2 text-3xl text-center font-extrabold lg:text-5xl text-oz-blue">         {data?.title || "Plan du site"}
        </h1>
        <div className="flex flex-col gap-9 pl-40 py-12">
        { data?.sections?.map((section)=> ( 
            <>
            { section.parentUrl ?
              <ArrowList key={section.id} text={section.title} link={section.parentUrl} />
              : <h3 key={section.id} className="text-2xl text-[#115F3D]">{section.title}</h3>
            }
            { section.urls?.length > 0 &&
              <div className="flex flex-col gap-6 px-12">
                {section.urls.map((link)=>(
                  <SubArrowList key={link.id} text={link.title} link={link.url} />
                ))}
              </div>
            }
          </>
          ))}

        </div>
      </div>
      <Footer />
    </div>
  )
}

async function getData() {
  try {
    const path = `/plan-page`;
    const urlParamsObject = {
      populate: ["sections", "sections.urls"],
    };
    const options = {};
    const { data } = await fetchAPI(path, urlParamsObject, options);
    console.log(data);
    return data?.attributes;
  } catch (error) {
    console.error(error);
    return [];
  }
}
const ArrowList = ({ text, link }) => (
  <div className="mb-2 items-start">
    <a href={link}>
      <p className="text-2xl underline text-[#115F3D]">→ {text}</p>
    </a>
  </div>
)
const SubArrowList = ({ text, link }) => (
  <div className="mb-2 items-start">
    <a href={link}>
      <p className="text-xl font-light underline text-[#115F3D]">→ {text}</p>
    </a>
  </div>
)
