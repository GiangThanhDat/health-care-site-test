import Image from "next/image"

export function Recommend({
  title,
  text,
  backgroundImage,
}: {
  title: string
  text: string
  backgroundImage: string
}) {
  return (
    /** */
    <div className="border-solid border-[1.5rem] border-primary-300">
      <div className="relative h-60 w-60">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <Image
          src={backgroundImage}
          alt="my-recommend-1"
          fill
          className="object-cover mix-blend-darken  grayscale hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-[10px] z-20">
          <p className="text-primary-300 font-inter text-[25px] text-nowrap leading-[30px]">
            {title}
          </p>
          <p className="px-3 w-fit mx-auto py-0.5 text-white bg-primary-400 text-nowrap text-sm font-light">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}
