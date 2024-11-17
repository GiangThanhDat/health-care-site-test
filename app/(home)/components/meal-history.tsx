import { mealHistoriesMock } from "@/data/meals"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"

export function MealHistory() {
  return (
    <div className="container space-y-7 pb-16">
      <section className="grid grid-cols-4 gap-2">
        {mealHistoriesMock.map((dish) => (
          <Card {...dish} key={dish.id} />
        ))}
      </section>
      <Button>記録をもっと見る</Button>
    </div>
  )
}
