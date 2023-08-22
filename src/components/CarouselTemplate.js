export default function CarouselTemplate({image,title,description}) {
  return (
      <div className="md:h-96 h-56">
        <div
          className="absolute w-6/12 md:h-96 h-48 md:mt-24 mt-4"
          style={{
            backgroundImage: "url(/images/home/carousel/rectangle2.png)",
          }}
        >
          <div className="md:mt-16 mt-4 md:mx-10 mx-5">
            <h1 className="md:my-6 my-2 font-bold md:text-3xl text-xs text-white uppercase show">
              {title}
            </h1>
            <p className="md:text-lg text-[0.45rem] font-bold text-white uppercase show">
              {description}
            </p>
          </div>
        </div>
        <img
          className="md:h-[600px] h-56 w-full"
          src={image}
        />
      </div>
  );
}
