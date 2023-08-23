"use client"
import { Carousel } from "flowbite-react"
import { useEffect,useState } from "react"
import CarouselTemplate from "./CarouselTemplate"

export default function Carousels(){
  // const [carousel,setCarousel] = useState([])

  // useEffect(async ()=>{
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/carousels?populate=banner`)
  //   const data = await res.json()
  //   setCarousel(data.data)
  // },[])

return (
    <div className="h-56 z-10 md:h-[600px]">
  <Carousel className="z-10">
    {/* {
      carousel.map((a,key)=>{
      const title = a.attributes.title
      const desc = a.attributes.description
      const image = a.attributes.banner.data.attributes.url
      return(
        <CarouselTemplate image={process.env.NEXT_PUBLIC_URL+image} title={title} description={desc} key={key}/>
      )
    })
    } */}
    <CarouselTemplate image={"/images/home/carousel/banner1.png"} title={"sasdasd"} description={"asdasasd"} />
    <CarouselTemplate image={"/images/home/carousel/banner2.png"} title={"sasdasd"} description={"asdasasd"} />
    <CarouselTemplate image={"/images/home/carousel/banner3.png"} title={"sasdasd"} description={"asdasasd"} />
  </Carousel>
</div>
)}