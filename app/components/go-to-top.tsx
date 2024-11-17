"use client"
import { useEffect, useState } from "react"

export function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the button after scrolling 300px down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 leading-none flex items-center p-3 justify-center rounded-full bg-white text-black shadow-lg  border border-gray-400"
      >
        <span className="leading-none">︿</span>
      </button>
    )
  )
}
