import Image from "next/image"

const HexagonContent = ({
  icon,
  text,
  className,
}: {
  icon: string
  text?: string
  className?: string
}) => {
  return (
    <div
      className={`relative hexagon w-[135px] h-[150px] bg-gradient-to-r from-primary-300 to-primary-400 ${className}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <Image src={icon} alt={icon} width={56} height={56} />
        <span className="text-white font-inter text-xl leading-6">{text}</span>
      </div>
    </div>
  )
}

export function HexagonSection() {
  return (
    <section
      id="hexagon-buttons"
      className="container flex items-center justify-evenly py-6"
    >
      <HexagonContent text="Morning" icon="/icons/icon_knife.svg" />
      <HexagonContent text="Lunch" icon="/icons/icon_knife.svg" />
      <HexagonContent text="Dinner" icon="/icons/icon_knife.svg" />
      <HexagonContent text="Snack" icon="/icons/icon_cup.svg" />
    </section>
  )
}
