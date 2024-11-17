import Image from "next/image"
import Link from "next/link"
import React from "react"
import { DropdownMenu } from "./dropdown-menu"

const ButtonLink = ({
  text,
  icon,
  link,
  className,
  children,
}: {
  text?: string
  icon: string
  link: string
  className?: string
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}) => {
  return (
    <Link
      href={link}
      className={`flex items-center gap-x-2 text-white min-w-40 ${className}`}
    >
      <Image src={icon} width={32} height={32} alt="icon memo" />
      {text}
      {children}
    </Link>
  )
}

const links = [
  {
    text: "自分の記録",
    icon: "/icons/icon_memo.svg",
    link: "/my-records",
  },
  {
    text: "チャレンジ",
    icon: "/icons/icon_challenge.svg",
    link: "/",
  },
  {
    text: "お知らせ",
    icon: "/icons/icon_info.svg",
    link: "/",
  },
]

export function Header() {
  return (
    <section id="header" className="w-full bg-dark-500 py-2">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={109} height={60} />
        </Link>
        <div className="flex items-center justify-end">
          {links.map((link) => {
            if (link.icon === "/icons/icon_info.svg") {
              return (
                <ButtonLink key={link.text} {...link} className="relative">
                  <div className="absolute py-0.5 px-1 text-xs rounded-full leading-none bg-primary-500 -top-1 left-5 text-center inline-flex items-center">
                    <span style={{ fontSize: 10 }} className="text-white">
                      1
                    </span>
                  </div>
                </ButtonLink>
              )
            }
            return <ButtonLink key={link.text} {...link} />
          })}
          <DropdownMenu />
        </div>
      </div>
    </section>
  )
}
