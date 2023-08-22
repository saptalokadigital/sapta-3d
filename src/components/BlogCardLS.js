export default function BlogCardLS({image,title,content,slug}){
    const piece = content.slice(0,330)
    return(
        <a href={`/blog/${slug}`} class="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 md:h-80 h-48 dark:border-gray-700 dark:hover:bg-gray-700 ">
            <img class="object-cover rounded-t-lg w-48 h-full md:w-[400px] md:p-5 p-2 md:rounded-none md:rounded-l-lg" src={image} alt="blog"/>
        <div class=" w-72 md:w-full h-full px-2 md:px-5 text-center md:mt-20 items-center">
           <h2 class="md:mb-8 mb-3 text-xs md:text-3xl font-bold tracking-tight text-blue-800">{title}</h2>
           <h5 class="mb-3 font-normal text-xs md:text-xl">{piece}...</h5>
           <h2 className="text-blue-400 text-xl mt-4">READ MORE</h2>
        </div>
    </a>
    )
}