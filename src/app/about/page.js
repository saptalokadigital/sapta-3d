import Link from "next/link"
import ProfilCard from "@/components/ProfilCard"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

async function getDataAbout(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/abouts`,{ cache: "no-store" })
    return res.json()
}

async function getDataLeader(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/leaders?populate=image`,{ cache: "no-store" })
    return res.json()
}

export default async function About(){
    const dataAbout = await getDataAbout()
    const dataLeader = await getDataLeader()
    const about = await dataAbout.data[0].attributes
    return(
        <>
        <div className="bg-cover bg-no-repeat bg-[url('/images/about/banner/foto.png')] bg-no-repeat w-full md:h-[600px] ">
            <div className="bg-cover bg-no-repeat bg-[url('/images/about/banner/blue.png')] w-full bg-no-repeat h-full z-10 text-center items-center">
                <h1 className="font-bold md:text-5xl text-4xl text-white pb-16 pt-20 md:pt-32 md:pb-24">PT SAPTALOKA DIGITAL INDONESIA</h1>
                <h5 className="font-bold md:pb-24 pb-16 text-white md:text-3xl text-xl">{about.title}</h5>
                <div className="flex justify-center pb-20">
                    <Link href="#weare" className="border-r-black text-white text-xs md:text-lg font-bold">WE ARE</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-3"/>   
                    <Link href="#wedo" className="border-r-black text-white text-xs md:text-lg font-bold">WE DO</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-3"/>
                    <Link href="#vision" className="border-r-black text-white text-xs md:text-lg font-bold">VISION</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-3"/>
                    <Link href="#mission" className="border-r-black text-white text-xs md:text-lg font-bold">MISSION</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-3"/>
                    <Link href="#ourleader" className="border-r-black text-white text-xs md:text-lg font-bold">OUR LEADER</Link>
                </div>
            </div>
        </div>
        <div className="bg-cover bg-no-repeat h-max w-full bg-[url('/images/about/bgsaptaloka.png')] bg-no-repeat text-center">
            <h1 className="md:text-4xl text-base font-bold text-blue-700 pt-16 pb-14 uppercase">{about.title}</h1>
            <h3 className="md:text-2xl text-sm text-blue-700 pb-20 font-bold md:px-32 px-10 uppercase">
                <ReactMarkdown children={about.description}/></h3>
        </div>
        <div className="bg-cover bg-no-repeat grid grid-cols-2 gap-2 my-10 h-full w-full bg-no-repeat bg-[url('/images/about/bgwawd.png')]">
            <div className="bg-cover bg-no-repeat grid-span-1 bg-[url('/images/about/rectangle10.png')]">
            <div className="md:m-10 m-4">
                <h1 id='weare' className="font-bold md:text-3xl text-xl text-white">WE ARE</h1>
                <h3 className="font-bold md:text-xl text-xs text-white mt-2"><ReactMarkdown children={about.weare}/></h3>
            </div>
            </div>
            <div></div>
            <div></div>
            <div className="bg-cover bg-no-repeat grid-span-4 h-full w-full bg-no-repeat bg-[url('/images/about/rectangle10.png')]">
                <div className="md:m-10 m-4">
                <h1 id='wedo' className="font-bold md:text-3xl text-xl text-white">WE DO</h1>
                <h3 className="font-bold md:text-xl text-xs text-white mt-2"><ReactMarkdown children={about.wedo}/></h3>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 h-max w-full">
            <div className="bg-cover bg-no-repeat grid-span-1 bg-no-repeat bg-[url('/images/about/vsms.png')]">
                <div className="md:m-20 m-4 text-center pb-14">
                <h1 id='vision' className="mt-6 md:mt14 text-xl md:text-4xl text-white font-bold">OUR VISION</h1>
                <h3 className="md:p-10 p-1 text-xs md:text-3xl text-white font-bold"><ReactMarkdown children={about.vision}/></h3>                
                </div>
            </div>
            <div className="grid-span-1">
            <div className="md:m-20 m-4 text-center pb-14 text-blue-700">
                <h1 id='mission' className="mt-6 md:mt14 text-xl md:text-4xl font-bold">OUR MISSION</h1>
                <h3 className="md:p-10 p-1 text-xs md:text-3xl font-bold"><ReactMarkdown children={about.mission}/></h3>
                </div>
            </div>
        </div>
        <div className="text-center">
            <h1 id='ourleader' className="md:mt-10 mt-5 font-bold text-lg md:text-4xl">OUR LEADER</h1>
        <div className="overflow-auto w-full h-full">
        <div className="justify-evenly flex md:mb-10 mb-2 md:h-full h-[350px] md:w-full w-[615px] flex-nowrap">
             {
                dataLeader.data.map((a,key)=>{
                  const name = a.attributes.name  
                  const title = a.attributes.title
                  const image = a.attributes.image.data[0].attributes.url
                  return(
                    <ProfilCard image={process.env.NEXT_PUBLIC_URL+image} title={title} name={name} key={key}/>
                  )
                })
             }

        </div>
        </div>
        </div>
        </>
    )
}