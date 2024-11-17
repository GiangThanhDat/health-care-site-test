import React from "react"

export function Button({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={`mx-auto rounded-md max-w-[296px] w-full text-white py-4 bg-gradient-to-b from-primary-400 to-primary-300 block hover:opacity-80 ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
