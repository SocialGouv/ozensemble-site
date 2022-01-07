import React from "react"
import Link from "next/link"

export function Footer() {
  return (
    <footer
      style={{
        marginTop: 150,
        background: "var(--primary)",
        color: "var(--white)",
      }}
    >
      <div className="container text-center">
        <p>La Fabrique Numérique des Ministères Sociaux © 2020</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link href="/mentions-legales" passHref>
              <a
                style={{
                  color: "var(--white)",
                  fontSize: "0.8em",
                }}
              >
                mentions légales
              </a>
            </Link>
          </li>

          <li className="list-inline-item">
            <Link href="/politique-confidentialite" passHref>
              <a
                style={{
                  color: "var(--white)",
                  fontSize: "0.8em",
                }}
              >
                politique de confidentialité
              </a>
            </Link>
          </li>

          <li className="list-inline-item">
            <Link href="#" passHref>
              <a
                style={{
                  color: "var(--white)",
                  fontSize: "0.8em",
                }}
              >
                Accessibilité : non conforme
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
