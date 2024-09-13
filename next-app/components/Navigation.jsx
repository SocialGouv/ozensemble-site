"use client"

import { useEffect, useState } from "react"
import { HiMenu } from "react-icons/hi"
import ContactPopup from "./ContactPopup"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showContactPopup, setShowContactPopup] = useState(false)

  useEffect(() => {
    document.body.addEventListener("click", () => setIsOpen(false))
  })

  return (
    <>
      <ContactPopup
        showPopup={showContactPopup}
        setShowPopup={setShowContactPopup}
      />
      <nav className="flex items-center justify-between px-5 bg-white fixed w-full h-[70px] top-0 z-0">
        <div>
          <a className="flex-center" href="/">
            <img
              className="w-14"
              src="/images/logo_oz.png"
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
            className={`fixed inset-y-0 top-0 right-0 p-4 pl-6 pt-12 md:p-0 lg:justify-end transform shadow-xl md:shadow-none md:transform-none md:w-auto md:relative md:border-0 transition-transform z-0 flex flex-col items-start bg-white space-y-8 md:space-y-0 md:items-center md:flex-row w-72 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            // eslint-disable-next-line
            onClick={(e) => e.stopPropagation()}
          >
            <Link name="Accueil" target="/" setIsOpen={setIsOpen} />
            <Link
              name="Comment ça marche"
              target="/#how-it-works"
              setIsOpen={setIsOpen}
            />
            {/* <Link
              name="Nous contacter"
              target="mailto:ozensemble@fabrique.social.gouv.fr"
              setIsOpen={setIsOpen}
              onClick={() => setShowContactPopup(true)}
            /> */}
            <Link name="Blog" target="/blog" setIsOpen={setIsOpen} />
            <Link name="Plan du site" target="/plan" setIsOpen={setIsOpen} />
            <Link
              name="Ils parlent de nous"
              target="/partners"
              setIsOpen={setIsOpen}
            />
            <ContactPopupTrigger setShowPopup={setShowContactPopup} />
          </div>
        </div>
      </nav>
    </>
  )
}

const Link = ({ name, target = null, setIsOpen }) => (
  <a
    className="text-sm font-bold transition-all text-oz-blue hover:text-oz-green mr-6"
    href={target}
    onClick={() => setIsOpen(false)}
  >
    {name}
  </a>
)

const ContactPopupTrigger = ({ setShowPopup }) => {
  return (
    <>
      <button
        className="text-sm font-bold transition-all text-oz-blue hover:text-oz-green mr-6 cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        Nous contacter
      </button>
    </>
  )
}
