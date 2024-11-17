import Image from "next/image"

export function Card({
  text,
  img,
  className,
}: {
  text: string
  img: string
  className?: string
}) {
  return (
    <div className={`relative h-60 ${className}`}>
      <Image
        fill
        src={img}
        alt={img}
        className="object-cover hover:opacity-80 transition-opacity duration-75"
      />
      <div className="p-2 bg-primary-300 text-white absolute bottom-0 left-0 font-inter text-[15px] leading-[18px]">
        {text}
      </div>
    </div>
  )
}
