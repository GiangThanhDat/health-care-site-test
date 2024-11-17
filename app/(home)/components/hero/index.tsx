import Image from "next/image"
import { BodyWeightFatPercentageGraph } from "./body-weight-fat-percentage-graph"
import { CircularProgress } from "./circular-progress"

export function Hero() {
  const current = new Date()
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    year: "2-digit",
  }).format(current)

  return (
    <section id="hero" className="w-full flex">
      <div className="min-w-[540px] h-[312px] relative">
        <Image src="/images/achievement-rate-bg.png" alt="d01" fill />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircularProgress
            dateText={formattedDate}
            percentage={75}
            strokeWidth={2}
          />
        </div>
      </div>
      <div className="bg-dark-500 flex-1">
        <BodyWeightFatPercentageGraph />
      </div>
    </section>
  )
}
