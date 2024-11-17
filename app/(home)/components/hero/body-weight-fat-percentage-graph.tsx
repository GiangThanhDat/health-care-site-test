"use client"
import { bodyWeightFatPercenTageMock } from "@/data/body-weight-fat-percentage"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts"

export function BodyWeightFatPercentageGraph() {
  return (
    <LineChart
      width={589}
      height={294}
      data={bodyWeightFatPercenTageMock}
      className="mx-auto"
    >
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
