import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"

const meals = [
  {
    id: 1,
    text: "05.21.Morning",
    img: "/images/m01.jpg",
  },
  {
    id: 2,
    text: "05.21.Lunch",
    img: "/images/l03.jpg",
  },
  {
    id: 3,
    text: "05.21.Dinner",
    img: "/images/d01.jpg",
  },
  {
    id: 4,
    text: "05.21.Snack",
    img: "/images/s01.jpg",
  },
  {
    id: 5,
    text: "05.20.Morning",
    img: "/images/m01.jpg",
  },
  {
    id: 6,
    text: "05.20.Lunch",
    img: "/images/l02.jpg",
  },
  {
    id: 7,
    text: "05.20.Dinner",
    img: "/images/d02.jpg",
  },
  {
    id: 8,
    text: "05.21.Snack",
    img: "/images/s02.jpg",
  },
]

export function MealHistory() {
  return (
    <div className="container space-y-7 pb-16">
      <section className="grid grid-cols-4 gap-2">
        {meals.map((dish) => (
          <Card {...dish} key={dish.id} />
        ))}
      </section>
      <Button>記録をもっと見る</Button>
    </div>
  )
}
