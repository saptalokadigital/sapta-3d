"use client"
import { Carousel } from "flowbite-react"
import { useEffect, useState } from "react"
import BlogCardLS from "./BlogCardLS"

export default function CarouselBlog(){
    const [carousel,setCarousel] = useState([])

    useEffect(async ()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs?populate=image&pagination[start]=0&pagination[limit]=5&sort=id:desc`,{ cache: "no-store" })
        const data = await res.json()
        setCarousel(data.data)
    },[])

    return(
    <div className="h-40 md:h-80 border">
     <Carousel>
           {
                carousel.map((a,key)=>{
                  const title = a.attributes.title
                  const slug = a.attributes.slug
                  const content = a.attributes.content
                  const image = a.attributes.image.data[0].attributes.url
                  return(
                    <BlogCardLS image={process.env.NEXT_PUBLIC_URL+image} slug={slug} title={title} content={content} key={key}/>
                  )
                })
            }
    </Carousel>
   </div>
    )
}