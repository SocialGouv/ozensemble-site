import React from "react"
import Head from "next/head"
import { Layout } from "../src/components/Layout"
import { Container, Row, Col } from "react-bootstrap"

export default function Mentions() {
  return (
    <Layout>
      <Head>
        <title>Mentions légales</title>
      </Head>
      <Container>
        <Row>
          <Col style={{ marginTop: 30 }}>
            <h1>Mentions légales</h1>
            <br />
            <br />
            <h2>Éditeur du site</h2>
            Association CaPASSCité
            <br />
            Madame Géraldine TALBOT, Directrice
            <br />
            70, rue Douy Delcupe
            <br />
            93100 Montreuil
            <br />
            <br />
            <br />
            <h2>Directeur de la publication</h2>
            Madame Géraldine TALBOT, Directrice de l’Association CaPASSCité
            <br />
            <br />
            <br />
            <h2>Hébergement du site</h2>
            Ce site est hébergé par :
            <br />
            <br />
            Microsoft Azure
            <br />
            37-39 Quai du Président Roosevelt
            <br />
            92130 Issy les Moulineaux
            <br />
            France
            <br />
            <br />
            <br />
            <h3>Accessibilité</h3>
            La conformité aux normes d’accessibilité numérique est un objectif
            ultérieur mais nous tâchons de rendre ce site accessible à toutes et
            à tous.
            <br />
            <br />
            <h4>Signaler un dysfonctionnement</h4>
            Si vous rencontrez un défaut d’accessibilité vous empêchant
            d’accéder à un contenu ou une fonctionnalité du site, merci de nous
            en faire part.
            <br />
            <br />
            Si vous n’obtenez pas de réponse rapide de notre part, vous êtes en
            droit de faire parvenir vos doléances ou une demande de saisine au
            Défenseur des droits.
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
