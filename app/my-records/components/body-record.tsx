"use client"

import { useState } from "react"
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

export function BodyRecord() {
  const [filter, setFilter] = useState<string>("年")
  return (
    <div className="bg-dark-500">
      <div className="flex items-start text-white pl-6 pt-4 gap-x-6">
        <p className="font-inter text-[15px] leading-[18px]">
          BODY
          <br /> RECORD
        </p>
        <p className="font-inter text-[22px] leading-[27px]">2021.05.21</p>
      </div>
      <LineChart
        width={960}
        height={185}
        data={data}
        className="mx-auto px-[3.125rem]"
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
          stroke="  var(--color-primary-500)"
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
      <div id="filter" className="px-8 pb-2 flex items-center gap-x-4">
        <button
          type="button"
          className={`px-5 leading-[22px] font-light text-[15px] rounded-full ${
            filter === "日"
              ? "bg-primary-300 text-white"
              : "bg-white text-primary-300"
          }`}
          onClick={() => setFilter("日")}
        >
          日
        </button>
        <button
          type="button"
          className={`px-5 leading-[22px] font-light text-[15px] rounded-full ${
            filter === "週"
              ? "bg-primary-300 text-white"
              : "bg-white text-primary-300"
          }`}
          onClick={() => setFilter("週")}
        >
          週
        </button>
        <button
          type="button"
          className={`px-5 leading-[22px] font-light text-[15px] rounded-full ${
            filter === "月"
              ? "bg-primary-300 text-white"
              : "bg-white text-primary-300"
          }`}
          onClick={() => setFilter("月")}
        >
          月
        </button>
        <button
          type="button"
          className={`px-5 leading-[22px] font-light text-[15px] rounded-full ${
            filter === "年"
              ? "bg-primary-300 text-white"
              : "bg-white text-primary-300"
          }`}
          onClick={() => setFilter("年")}
        >
          年
        </button>
      </div>
    </div>
  )
}
