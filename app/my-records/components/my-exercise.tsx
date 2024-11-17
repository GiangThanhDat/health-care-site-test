import { exercisesMock } from "@/data/records"

export function MyExercise() {
  return (
    <div className="bg-dark-500 py-4 px-6 h-full space-y-1">
      <div className="flex items-start text-white gap-x-6">
        <p className="font-inter text-[15px] leading-[18px]">
          MY
          <br /> EXERCISE
        </p>
        <p className="font-inter text-[22px] leading-[27px]">2021.05.21</p>
      </div>
      <div className="overflow-auto grid grid-cols-2 gap-x-10 gap-y-2 h-[12rem] custom-scrollbar pr-6">
        {exercisesMock.map((item) => {
          return (
            <div
              key={item.id}
              className="pb-0.5 border border-transparent border-b-gray-400"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-x-1.5">
                  <span className="text-white text-[5px] font-light leading-[7px]">
                    ●
                  </span>
                  <p className="text-white">{item.name}</p>
                </div>
                <span className="text-primary-300">{item.time}</span>
              </div>
              <p className="text-primary-300 ml-2.5 leading-4">{item.kcal}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
