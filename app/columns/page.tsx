import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"

const columns = [
  {
    id: 1,
    title: "Recommended column",
    text: "オススメ",
  },
  {
    id: 2,
    title: "Recommended diet",
    text: "ダイエット",
  },
  {
    id: 3,
    title: "Recommended beauty",
    text: "美容",
  },
  {
    id: 4,
    title: "Recommended health",
    text: "健康",
  },
]

const posts = [
  {
    id: 1,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dateTime: "2021.05.17 23:25",
    thumbnail: "/images/column-1.jpg",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    id: 2,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dateTime: "2021.05.17 23:25",
    thumbnail: "/images/column-2.jpg",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    id: 3,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dateTime: "2021.05.17 23:25",
    thumbnail: "/images/column-3.jpg",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    id: 4,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dateTime: "2021.05.17 23:25",
    thumbnail: "/images/column-4.jpg",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    id: 5,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dateTime: "2021.05.17 23:25",
    thumbnail: "/images/column-5.jpg",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    id: 6,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dateTime: "2021.05.17 23:25",
    thumbnail: "/images/column-6.jpg",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    id: 7,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dateTime: "2021.05.17 23:25",
    thumbnail: "/images/column-7.jpg",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    id: 8,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    dateTime: "2021.05.17 23:25",
    thumbnail: "/images/column-8.jpg",
    hashtag: "#魚料理  #和食  #DHA",
  },
]

export default function ColumnsPage() {
  return (
    <div className="container pb-16">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mt-14">
        {columns.map((item) => (
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
        {posts.map((item) => (
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
