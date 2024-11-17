"use client"
import { motion } from "motion/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => setIsOpen(!isOpen)

  const router = useRouter()

  return (
    <div className="flex">
      <button
        onClick={toggleDrawer}
        className={` min-w-0 flex items-center gap-x-2 text-white`}
      >
        <Image
          src={"/icons/icon_menu.svg"}
          width={32}
          height={32}
          alt="icon memo"
        />
      </button>
      {/* Drawer Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer Content (Right Side) */}
      <motion.div
        className="fixed top-0 right-0 h-full w-64 bg-gray-400 shadow-lg z-40"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="">
          <ul className="">
            <li className="bg-gray-400 px-8 py-6 hover:bg-gray-300/15  text-white">
              <a href="#" className="block">
                自分の記録
              </a>
            </li>
            <div className="h-[1px] bg-white opacity-15" />
            <li className="bg-gray-400 px-8 py-6 hover:bg-gray-300/15 text-white">
              <a href="#" className="block">
                体重グラフ
              </a>
            </li>
            <div className="h-[1px] bg-white opacity-15" />
            <li className="bg-gray-400 px-8 py-6 hover:bg-gray-300/15 text-white">
              <a href="#" className="block">
                目標
              </a>
            </li>
            <div className="h-[1px] bg-white opacity-15" />
            <li className="bg-gray-400 px-8 py-6 hover:bg-gray-300/15 text-white">
              <a href="#" className="block">
                選択中のコース
              </a>
            </li>
            <div className="h-[1px] bg-white opacity-15" />
            <li
              className="bg-gray-400 px-8 py-6 hover:bg-gray-300/15 text-white hover:cursor-pointer"
              onClick={() => {
                router.push("/columns")
                toggleDrawer()
              }}
            >
              <a href="#" className="block">
                コラム一覧
              </a>
            </li>
            <div className="h-[1px] bg-white opacity-15" />
            <li className="bg-gray-400 px-8 py-6 hover:bg-gray-300/15 text-white">
              <a href="#" className="block">
                設定
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
