import React from "react"
import Link from "next/link"
import { Container, Nav as BSNav, Navbar } from "react-bootstrap"
import styled from "styled-components"

const NavLink = styled(Link).attrs({ as: "a" })`
  font-weight: bold !important;
  margin: 0 10px;
`

export function Nav() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div>
          <a href="/#page-top" alt="Retour à l'accueil">
            <img
              src="/img/logo-oz.png"
              width={68}
              height={68}
              alt="Logo MonSuiviPsy"
            />
          </a>
        </div>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <BSNav>
            <NavLink href="/#pourquoi">Apprenez à réagir</NavLink>
            <NavLink href="/#comment">Comment ça marche ?</NavLink>
            <NavLink href="/#qui">L'alcool en France</NavLink>
            <NavLink href="/#qui">Qui sommes-nous ?</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </BSNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
