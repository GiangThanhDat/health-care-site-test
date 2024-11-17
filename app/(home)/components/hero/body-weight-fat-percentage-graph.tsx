"use client"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts"

const data = [
  { month: "6 月", weightPercent: 90, fatPercent: 90 },
  { month: "7 月", weightPercent: 87, fatPercent: 80 },
  { month: "8 月", weightPercent: 60, fatPercent: 64 },
  { month: "9 月", weightPercent: 70, fatPercent: 65 },
  { month: "10 月", weightPercent: 65, fatPercent: 45 },
  { month: "11 月", weightPercent: 59, fatPercent: 52 },
  { month: "12 月", weightPercent: 68, fatPercent: 48 },
  { month: "1 月", weightPercent: 55, fatPercent: 46 },
  { month: "2 月", weightPercent: 51, fatPercent: 44 },
  { month: "3 月", weightPercent: 47, fatPercent: 37 },
  { month: "4 月", weightPercent: 45, fatPercent: 30 },
  { month: "5 月", weightPercent: 58, fatPercent: 28 },
]

export function BodyWeightFatPercentageGraph() {
  return (
    <LineChart width={589} height={294} data={data} className="mx-auto">
      <CartesianGrid stroke="#ccc" horizontal={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        axisLine={false}
        tickMargin={10}
        stroke="#FFFFFF"
      />
      <Line
        dataKey="weightPercent"
        type="linear"
        stroke="var(--color-primary-500)"
        strokeWidth={4}
        dot={true}
        activeDot={{ r: 6 }}
      />
      <Line
        dataKey="fatPercent"
        type="linear"
        stroke="var(--color-secondary-300)"
        strokeWidth={4}
        dot={true}
        activeDot={{ r: 6 }}
      />
      <Tooltip />
    </LineChart>
  )
}
