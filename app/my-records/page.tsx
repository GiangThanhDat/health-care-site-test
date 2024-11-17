import { recommendMocks } from "@/data/records"
import { BodyRecord } from "./components/body-record"
import { MyDiary } from "./components/my-diary"
import { MyExercise } from "./components/my-exercise"
import { Recommend } from "./components/recommend"

export default function MyRecordPage() {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-x-12 mt-14" id="recommend">
        {recommendMocks.map((item) => (
          <Recommend
            key={item.title}
            title={item.title}
            text={item.text}
            backgroundImage={item.img}
          />
        ))}
      </div>
      <div className="mt-14 ">
        <BodyRecord />
      </div>
      <div className="mt-14">
        <MyExercise />
      </div>
      <div className="mt-14 pb-16">
        <MyDiary />
      </div>
    </div>
  )
}
