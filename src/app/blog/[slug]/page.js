import Image from "next/image"
import BlogCard from "@/components/BlogCard"
import Link from "next/link"

async function getDataBlogOne(params){
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs?populate=image&filters[slug]=${params}`)
    return res.json()
}

async function getDataBlog(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs?populate=image&pagination[start]=0&pagination[limit]=4&sort=id:desc`,{ cache: "no-store" })
    return res.json()
}

export default async function DetailBlog({params}){
    const dataBlogOne = await getDataBlogOne(params.slug)
    const dataBlog = await getDataBlog()
    const blog = await dataBlogOne.data[0].attributes

    return(
        <>
           <div className="bg-cover bg-no-repeat w-full md:h-[600px] h-[300px]" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_URL+blog.image.data[0].attributes.url})`}}>
            <div className="bg-cover bg-[url('/images/solution/banner/rectangle14.png')] w-full h-full z-10 text-center items-center">
                <h1 className="font-bold text-2xl md:text-5xl text-white mx-5 md:mx-14 md:pb-16 pb-5 md:pt-40 pt-20">
                {blog.title}
                </h1>
                <div className="flex justify-center pb-16">
                    <Link href="#" className="border-r-black text-white text-xs md:text-lg font-bold uppercase ">{blog.author}</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1"/>   
                    <Link href="#" className="border-r-black text-white text-xs md:text-lg font-bold">{blog.publishedAt}</Link>
                </div>
                <h1 className="uppercase md:text-2xl text-lg font-bold text-white md:pb-14 pb-5 mx-auto">{blog.category}</h1>
            </div>
        </div>
        <div >
            <img src={process.env.NEXT_PUBLIC_URL+blog.image.data[0].attributes.url} className="w-full md:w-4/12 md:h-96 h-64 md:p-10 p-4 float-left"/>
            <h4 className="font-normal md:text-lg text-sm md:m-16 m-4">
             {blog.content}
            </h4>
        </div>
        <div style={{backgroundImage:'url(/images/news/rectangle18.png)'}} className="bg-cover bg-no-repeat w-full md:h-20 h-14 text-center py-5">
           <h1 className="mx-auto my-auto text-2xl font-bold text-white md:pb-10 pb-7">OTHER POSTS</h1>
        </div>
        <div className="overflow-auto w-full">
        <div className="flex flex-nowrap md:w-full w-[900px] justify-evenly md:py-14 py-5">
            {
               dataBlog.data.map((a,key)=>{
                const image = a.attributes.image.data[0].attributes.url
                const title = a.attributes.title
                const slug = a.attributes.slug
                return(
                    <BlogCard image={process.env.NEXT_PUBLIC_URL+image} title={title} slug={slug} key={key}/>
                )
               })
            }
        </div>
        </div>
        </>
    )
}