import { BodyRecord } from "./components/body-record"
import { MyDiary } from "./components/my-diary"
import { MyExercise } from "./components/my-exercise"
import { Recommend } from "./components/recommend"

export default function MyRecordPage() {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-x-12 mt-14" id="recommend">
        <Recommend
          title="BODY RECORD"
          text="自分のカラダの記録"
          backgroundImage="/images/MyRecommend-1.jpg"
        />
        <Recommend
          title="MY EXERCISE"
          text="自分の運動の記録"
          backgroundImage="/images/MyRecommend-2.jpg"
        />
        <Recommend
          title="MY DIARY"
          text="自分の日記"
          backgroundImage="/images/MyRecommend-3.jpg"
        />
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
