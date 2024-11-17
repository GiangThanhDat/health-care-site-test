import { columnsMock, postsMock } from "@/data/columns"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"

export default function ColumnsPage() {
  return (
    <div className="container pb-16">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mt-14">
        {columnsMock.map((item) => (
          <div
            key={item.id}
            className="flex h-36 items-center justify-center bg-dark-600"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="text-primary-300 font-inter uppercase text-[22px] max-w-[200px] text-center">
                {item.title}
              </p>
              <div className="h-[1px] bg-white w-14 mt-[10px]" />
              <span className="text-lg text-white mt-2 font-light">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid mt-14 md:grid-cols-4 grid-cols-1 gap-x-2 gap-y-[18px]">
        {postsMock.map((item) => (
          <div key={item.id}>
            <Card img={item.thumbnail} text={item.dateTime} className="h-36" />
            <p className="mt-[5px] line-clamp-2 text-[15px] font-light leading-[22px]">
              {item.title}
            </p>
            <span className="font-light text-xs leading-[22px] text-primary-300">
              {item.hashtag}
            </span>
          </div>
        ))}
      </div>
      <Button className="mt-6">記録をもっと見る</Button>
    </div>
  )
}
