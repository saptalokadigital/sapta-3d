import Carousel from "@/components/Carousel";
import Slide from "@/components/Slide";
import Card from "@/components/Card";
import BlogCard from "@/components/BlogCard";
import { cardContent } from "./content";

async function getDataBlog(){
 const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs?populate=image&pagination[start]=0&pagination[limit]=3&sort=id:desc`,{ cache: "no-store" })
 return res.json()
}

async function getDataPartner(){
 const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/partners?populate=logo`)
 return res.json()
}

export default async function Home() {
  const dataBlog = await getDataBlog()
  const dataPartner = await getDataPartner()

  return (
    <>
      <Carousel/>
      <div className="text-center m-10 md:m-20">
        <h1 className="font-bold text-2xl md:text-4xl md:mb-10 mb-5 show">
          OUR SOLUTIONS WILL LEAD YOUR BUSINESS TO DIGITAL TRANSFORMATION
        </h1>
        <h3 className="font-bold text-lg md:text-2xl show">
          SAPTALOKA DIGITAL IS MADE OF THREE CORE BUSINESS
        </h3>
      </div>
      <div className="flex justify-center flex-wrap md:flex-nowrap">
        {
          cardContent.map((a,key)=>{
            return(
              <Card url={a.url} title={a.title} desc={a.desc} key={key}/>
            )})
        }
      </div>

      <div className="bg-no-repeat flex justify-end my-14 md:my-24 w-full h-1/6 bg-[url('/images/home/core_value/bg.png')]">
        <img
          src="/images/home/core_value/text.png"
          className="h-full w-6/12 md:w-4/12 md:mr-5"
        />
      </div>
      <div>
         <Slide logo={dataPartner.data[0].attributes.logo.data}/>
      </div>  
      <div className="text-center md:mb-6 mb-3">
        <h1 className="md:my-10 my-5 font-bold md:text-4xl text-xl">LASTEST NEWS</h1>
        <div className="w-full overflow-auto">
        <div className="flex md:w-full w-[600px] justify-center md:justify-evenly">
          {
            dataBlog.data.map((a,key)=>{
              const title = a.attributes.title
              const slug = a.attributes.slug
              const image = a.attributes.image.data[0].attributes.url
              return(
                <BlogCard
                  title={title}
                  image={process.env.NEXT_PUBLIC_URL+image}
                  slug={slug}
                  key={key}
                />
              )})
          }
        </div>
        </div>
      </div>
    </>
  );
}
