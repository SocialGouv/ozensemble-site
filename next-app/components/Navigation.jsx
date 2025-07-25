"use client"

import { useEffect, useState } from "react"
import { HiMenu } from "react-icons/hi"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.addEventListener("click", () => setIsOpen(false))
  })

  return (
    <>
      <nav className="flex items-center justify-between px-5 bg-white w-full h-[120px] top-0 z-0">
        <div>
          <a className="flex-center" href="/">
            <img
              className="w-40"
              src="/images/logo_mtssf.jpg"
              alt="Logo principal, cliquez pour accéder à l'accueil"
            />
          </a>
        </div>
        <div className="items-center justify-center md:flex">
          {/* Mobile */}
          <button
            className="block md:hidden"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(true)
            }}
          >
            <HiMenu className="text-2xl text-black" />
          </button>

          <div
            className={`inset-y-0 top-0 right-0 p-4 pl-6 pt-12 md:p-0 lg:justify-end transform shadow-xl md:shadow-none md:transform-none md:w-auto md:relative md:border-0 transition-transform z-0 flex flex-col items-start bg-white space-y-8 md:space-y-0 md:items-center md:flex-row w-72 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            // eslint-disable-next-line
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation links removed as requested */}
          </div>
        </div>
      </nav>
    </>
  )
}
