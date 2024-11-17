"use client"

import { bodyRecords } from "@/data/records"
import { useState } from "react"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts"

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
        data={bodyRecords}
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
