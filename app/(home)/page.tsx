import { MealHistory } from "./components/meal-history"
import { Hero } from "./components/hero"
import { HexagonSection } from "./components/hexagons"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HexagonSection />
      <MealHistory />
    </>
  )
}
