import { useState } from "react"
import { FiSmartphone } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import Fade from "@mui/material/Fade"

import { ANDROID_URL, IOS_URL } from "constants"

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-5 bg-white fixed w-full h-[70px] top-0 z-10">
      <div>
        <a className="flex-center" href="/">
          <img className="w-14" src="/images/logo_oz.png" alt="" />
        </a>
      </div>
      <div className="items-center justify-center lg:flex">
        <div className="hidden lg:flex space-x-6 mr-6">
          <Link name="Accueil" target="/" />
          <Link name="Comment ça marche" target="#how-it-works" />
          <Link
            name="Nous contacter"
            target="mailto:ozensemble@fabrique.social.gouv.fr"
          />
        </div>
        <DownloadPopup />
      </div>
    </nav>
  )
}

const Link = ({ name, target }) => (
  <a
    className="text-sm font-bold transition-all text-oz-blue hover:text-oz-green"
    href={target}
  >
    {name}
  </a>
)

const DownloadPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="group rounded-full bg-oz-pink font-bold text-white py-2 px-6 flex gap-1 items-center cursor-pointer hover:text-oz-pink hover:bg-white border border-oz-pink transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiSmartphone className="stroke-white group-hover:stroke-oz-pink transition" />
        <span>Télécharger l'app</span>
      </button>
      <Fade in={!!isOpen} timeout={200}>
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-all flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className="rounded-3xl bg-white text-center p-4 sm:p-10 mx-[10%] max-w-[800px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0">
              <button
                className="rounded-full bg-oz-green p-4 absolute top-1/2 right-1/2 transform translate-x-1/3 -translate-y-1/3"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            <h6 className="text-oz-blue text-3xl font-bold">
              Télécharger l’application Oz Ensemble
            </h6>
            <div className="w-1/5 h-1 bg-oz-pink m-auto my-8"></div>
            <p className="text-xl mb-10">Elle est 100% gratuite et anonyme.</p>
            <div className="grid max-w-[250px] sm:max-w-none sm:grid-flow-col gap-6 auto-cols-fr md:w-5/6 m-auto">
              <a href={ANDROID_URL}>
                <img
                  className="object-contain w-full"
                  src="images/other/google-play-fr.png"
                  alt=""
                />
              </a>
              <a href={IOS_URL}>
                <img
                  className="object-contain w-full"
                  src="images/other/app-store-fr.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </>
  )
}
