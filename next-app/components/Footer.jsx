"use client"

import { useState, useEffect } from "react"

export default function Footer() {
  const [baseUrl, setBaseUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin)
    }
  }, [])
  return (
    <>
      <footer className="py-10 text-white bg-oz-blue">
        <div className="grid-flow-col gap-5 mx-10 md:mx-15 xl:mx-40 md:grid auto-cols-fr">
          <div className="col-span-4 mb-8">
          </div>
          {/* Section Accès rapide supprimée comme demandé */}
          <div className="col-span-2 mb-8">
            <ArrowList
              text="Mentions légales"
              link="/mentions-legales"
            />
          </div>
          {/* Section Liens du gouv supprimée comme demandé */}
        </div>
        <div className="text-center mb-4 mx-[10%]">
          <p>
            La Fabrique du Ministère du Travail, de la Santé, des Solidarités et des Familles ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  )
}

const ArrowList = ({ text, link }) => (
  <div className="mb-2">
    <a href={link}>
      <p className="text-sm font-light underline">→ {text}</p>
    </a>
  </div>
)
