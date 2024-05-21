"use client"

import { useEffect, useRef } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { FiMail } from "react-icons/fi"

const ContactPopup = ({ showPopup, setShowPopup }) => {
  const popupFirstFocus = useRef(null)

  useEffect(() => {
    // on popup open, focus on the first link
    if (showPopup) {
      popupFirstFocus.current.focus()
    }
  }, [showPopup])

  if (!showPopup) {
    return null
  }

  return (
    <div
      className="test fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-all flex justify-center items-center"
      // eslint-disable-next-line
      onClick={() => setShowPopup(false)}
    >
      <div
        className="rounded-3xl bg-white text-center py-6 px-4 sm:p-10 mx-[10%] max-w-[800px] relative min-w-[40vw]"
        // eslint-disable-next-line
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0">
          <button
            className="rounded-full bg-oz-blue p-4 absolute top-1/2 right-1/2 transform translate-x-1/3 -translate-y-1/3 border-2 border-white"
            onClick={() => setShowPopup(false)}
            tabIndex={2}
            aria-label="Fermer la popup"
          >
            <AiOutlineClose color="white" size={24} />
          </button>
        </div>
        <h6 className="text-oz-blue text-3xl font-bold">Nous contacter</h6>
        <div className="w-1/5 h-1 bg-oz-pink m-auto my-7" />
        <p className="break-words md:text-xl mb-7">
          {" "}
          Envoyez-nous un mail à{" "}
          {
            "\u006f\u007a\u0065\u006e\u0073\u0065\u006d\u0062\u006c\u0065\u0040\u0066\u0061\u0062\u0072\u0069\u0071\u0075\u0065\u002e\u0073\u006f\u0063\u0069\u0061\u006c\u002e\u0067\u006f\u0075\u0076\u002e\u0066\u0072"
          }
        </p>
        <div className="mb-1 flex justify-center">
          <a
            className="flex gap-3 px-6 py-4 rounded-lg bg-oz-pink text-white font-bold items-center"
            href={
              "\u006d\u0061\u0069\u006c\u0074\u006f\u003a\u006f\u007a\u0065\u006e\u0073\u0065\u006d\u0062\u006c\u0065\u0040\u0066\u0061\u0062\u0072\u0069\u0071\u0075\u0065\u002e\u0073\u006f\u0063\u0069\u0061\u006c\u002e\u0067\u006f\u0075\u0076\u002e\u0066\u0072"
            }
            ref={popupFirstFocus}
            tabIndex={1}
          >
            <span>Envoyer un mail</span>
            <FiMail size={24} className="stroke-white" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPopup
