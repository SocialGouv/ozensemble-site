import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        marginTop: 150,
        background: "var(--primary)",
        color: "var(--white) !important",
      }}
    >
      <div className="container text-center">
        <p>La Fabrique Numérique des Ministères Sociaux © 2020</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link href="/cgu" passHref>
              <a
                style={{
                  color: "var(--white) !important",
                  fontSize: "0.8em",
                }}
              >
                condititions générales
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
