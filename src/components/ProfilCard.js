export default function ProfilCard({image,title,name}){
    return(
        <>
         <div className="md:m-10 md:w-72 w-36 h-56 md:h-96 m-3 text-center items-center">
            <img src={image} className="mx-auto pt-4 my-7 md:w-64 md:h-64 w-32 h-36"/>
            <h1 className="md:text-2xl font-bold text-sm mx-3 uppercase">{title}</h1>
            <h3 className="text-xs md:text-xl font-semibold uppercase mt-3">{name}</h3>
         </div>
        </>
    )
}