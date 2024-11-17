const exercise = [
  {
    id: 1,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 2,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 3,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 4,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 5,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },

  {
    id: 6,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 7,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 8,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 9,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 10,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 11,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 12,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 13,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    id: 14,
    name: "家事全般（立位・軽い)",
    kcal: "26kcal",
    time: "10 min",
  },
]

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
        {exercise.map((item) => {
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
