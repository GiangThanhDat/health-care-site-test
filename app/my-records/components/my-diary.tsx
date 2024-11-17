import { Button } from "@/app/components/ui/button"

const myDiaries = [
  {
    id: 1,
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 2,
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 3,
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 4,
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 5,
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 6,
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 7,
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    id: 8,
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
]

export function MyDiary() {
  return (
    <div className="">
      <p className="uppercase font-inter text-[22px] leading-[27px] h-8">
        My Diary
      </p>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
        {myDiaries.map((item) => {
          return (
            <div
              key={item.id}
              className="p-4 pb-7 border-gray-400 border-2 text-dark-500"
            >
              <p className="font-inter text-lg leading-[22px]">{item.date}</p>
              <p className="font-inter text-lg leading-[22px]">{item.time}</p>
              <div className="mt-2 text-xs font-light leading-4 ">
                <p>{item.time}</p>
                <p>{item.content}</p>
              </div>
            </div>
          )
        })}
      </div>
      <Button className="mt-6">自分の日記をもっと見る</Button>
    </div>
  )
}
