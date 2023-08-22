import Link from 'next/link'

export default function BlogCard({image="",title="not found",slug="/blog"}){
    return(
        <div class="md:m-5 md:w-80 w-48 h-64 md:h-auto mb-2 mx-2 text-center items-center rounded-lg ">
    <Link href={`/blog/${slug}`} className="m-auto items-center text-center">
        <img class="m-auto rounded-lg md:w-72 md:h-52 w-48 h-36" src={image} alt=""/>
    </Link>
    <div class="md:p-4 p-3 text-center">
        <Link href={`/blog/${slug}`}>
            <p class="text-sm md:text-2xl font-bold tracking-tight text-blue-600 hover:text-blue-800">{title}</p>
        </Link>      
    </div>
</div>
    )
}