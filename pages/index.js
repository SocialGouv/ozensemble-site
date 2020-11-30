import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"

import { Button, Row, Col } from "react-bootstrap"

import { Layout } from "../src/components/Layout"
import { FeatureRow } from "../src/components/FeatureRow"
import Kpi from "../src/components/Kpi"

const LeafletMap = dynamic(
  () => import("../src/components/Map").then((mod) => mod.Map),
  {
    ssr: false,
  }
)

export default function index() {
  return (
    <Layout showHeader>
      <br />
      <br />
      <Pourquoi />
      <br />
      <br />
      <Info />
      <br />
      <br />
      <Comment />
      <br />
      <br />
      <EnFrance />
      <br />
      <br />
      <Speech />
      <br />
      <br />
      <Aide />
      <br />
      <br />
      <Qui />
      <br />
      <br />
      <Contact />
    </Layout>
  )
}

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--primary);
`

const Video = styled.video`
  &:focus {
    outline: none;
  }
`

function Pourquoi() {
  return (
    <section id="pourquoi">
      <div className="container">
        <div className="section-heading text-center">
          <SectionTitle>Apprenez à réagir</SectionTitle>
        </div>
        <br />
        <br />
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="Vous êtes un professionnel de santé"
              image="/img/icon-doctor.png"
            >
              Vous désirez :
              <ul>
                <li>
                  Apprendre à détecter et orienter une personne dépendante à
                  l&apos;alcool
                </li>
                <li>
                  Accompagner vos patients vers une maitrise de leur
                  consommation d&apos;alcool
                </li>
              </ul>
              <Button
                href="https://play.google.com/store/apps/details?id=com.addicto"
                size="lg"
                target="_blank"
                style={{
                  backgroundColor: "#6acb9a",
                  border: "none",
                  "box-shadow": "0 2px 0 #54a27b",
                }}
              >
                Téléchargez l&apos;app
              </Button>
            </FeatureRow>
          </Col>
        </Row>
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="Vous êtes un acteur social"
              image="/img/icon-help.png"
            >
              Vous désirez :
              <ul>
                <li>
                  Apprendre à aider une personne dépendante à l&apos;alcool
                </li>
                <li>
                  Sensibiliser vos bénéficiaires à maitrise leur consommation
                  d&apos;alcool
                </li>
              </ul>
              <Button
                href="https://play.google.com/store/apps/details?id=com.addicto"
                size="lg"
                target="_blank"
                style={{
                  backgroundColor: "#6acb9a",
                  border: "none",
                  "box-shadow": "0 2px 0 #54a27b",
                }}
              >
                Téléchargez l&apos;app
              </Button>
            </FeatureRow>
          </Col>
        </Row>
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="Vous êtes un proche"
              image="/img/icon-family.png"
            >
              Vous désirez aider un proche dépendant à l&apos;alcool mais vous
              ne savez pas comment vous y prendre ?
              <br />
              <br />
              <Button
                href="https://play.google.com/store/apps/details?id=com.addicto"
                size="lg"
                target="_blank"
                style={{
                  backgroundColor: "#6acb9a",
                  border: "none",
                  "box-shadow": "0 2px 0 #54a27b",
                }}
              >
                Téléchargez l&apos;app
              </Button>
            </FeatureRow>
          </Col>
        </Row>
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow title="Vous ?" image="/img/icon-finger.png">
              Vous buvez plus de 2 verres par jour ? Vous désirez apprendre à
              maitriser votre consommation d&apos;alcool ?
              <br />
              <br />
              <Button
                href="https://play.google.com/store/apps/details?id=com.addicto"
                size="lg"
                target="_blank"
                style={{
                  backgroundColor: "#6acb9a",
                  border: "none",
                  "box-shadow": "0 2px 0 #54a27b",
                }}
              >
                Téléchargez l&apos;app
              </Button>
            </FeatureRow>
          </Col>
        </Row>
      </div>
    </section>
  )
}

function Info() {
  return (
    <section id="info">
      <div className="container">
        <hr />
        <br />
        <br />
        <div className="section-heading text-center">
          <SectionTitle>S&apos;informer pour mieux agir</SectionTitle>
        </div>
        <br />
        <br />
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow title="" image="/img/icon-info.png" imageSpan={6}>
              <p>
                <b>
                  L&apos;alcool en France représente la 2ᵉ cause de mortalité
                  évitable après le tabac et c&apos;est malheureusement plus de
                  50 000 personnes qui en meurt chaque année.
                </b>
              </p>
              <p>
                Découvrez le combat de l&apos;association CaPASSCité, fondatrice
                de l&apos;application mobile Oz Ensemble.
              </p>
              <Button
                href="https://capasscite.fr/association/"
                size="lg"
                target="_blank"
                style={{
                  backgroundColor: "#6acb9a",
                  border: "none",
                  "box-shadow": "0 2px 0 #54a27b",
                }}
              >
                En savoir plus
              </Button>
            </FeatureRow>
          </Col>
        </Row>
      </div>
    </section>
  )
}

function Comment() {
  return (
    <section id="comment">
      <div className="container">
        <hr />
        <br />
        <br />
        <div className="section-heading text-center">
          <SectionTitle>Comment ça marche ?</SectionTitle>
        </div>
        <br />
        <br />
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="Comprendre sa consommation"
              image="/img/demo-eval.png"
              imageSpan={4}
            >
              <b>
                À l&apos;issu d&apos;un questionnaire d&apos;1 minute,
                l&apos;usager obtient un aperçu de ses potentiels comportements
                à risques vis-à-vis de sa consommation d&apos;alcool.
              </b>
            </FeatureRow>
            <FeatureRow
              title="Suivre sa conso"
              image="/img/demo-followup.png"
              imageSpan={4}
              reverse
            >
              <b>
                Grâce à l&apos;agenda de conso, l&apos;usager apprend à suivre
                régulièrement sa consommation.
              </b>
            </FeatureRow>
            <FeatureRow
              title="Se faire aider"
              image="/img/demo-assist.png"
              imageSpan={4}
            >
              <b>
                Des professionnels en addictologie se tiennent à disposition
                pour répondre gratuitement et de manière anonyme aux questions
                de l&apos;usager.
              </b>
            </FeatureRow>
          </Col>
        </Row>
      </div>
    </section>
  )
}

function EnFrance() {
  return (
    <section id="enfrance">
      <div className="container">
        <hr />
        <br />
        <br />
        <div className="section-heading text-center">
          <SectionTitle>L&apos;alcool en France ...</SectionTitle>
        </div>
        <br />
        <br />
        <Row style={{ marginBottom: 40 }}>
          <Col
            xs={{ offset: 1, span: 10 }}
            style={{ display: "flex", "flex-wrap": "wrap" }}
          >
            <Kpi
              text="Coût social de l'alcool en France"
              value="160 millions d'€"
            />
            <Kpi text="décès en France" value="50 000" />
            <Kpi text="cause de mortalité évitable" value="2ème" />
            <Kpi
              text="de personnes dépendantes à l'alcool en France"
              value="5 millions"
            />
          </Col>
        </Row>
      </div>
    </section>
  )
}

function Speech() {
  return (
    <section id="speech">
      <div className="container">
        <hr />
        <br />
        <br />
        <div className="section-heading text-center">
          <SectionTitle>
            Dr Géraldine Talbot, fondatrice d&apos;Oz Ensemble
          </SectionTitle>
        </div>
        <br />
        <br />
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <Row
              style={{
                alignItems: "center",
              }}
            >
              <Col xs={12} md={5} className="mb-3 mb-md-0">
                <Video width="100%" height="240" controls>
                  <track kind="captions" />
                  <source src="/presentation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </Video>
              </Col>
              <Col xs={12} md={7}>
                <b>
                  Le Dr Géraldine Talbot, directrice de l&apos;association
                  CaPASSCité nous explique pourquoi elle a décidé de lancer
                  l&apos;application mobile Oz Ensemble.
                </b>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  )
}

function Aide() {
  return (
    <section id="aide">
      <div className="container">
        <hr />
        <br />
        <br />
        <div className="section-heading text-center">
          <SectionTitle>Aidez-nous à en parler</SectionTitle>
        </div>
        <br />
        <br />
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }} className="text-center">
            <p>
              Rejoignez le mouvement Oz Ensemble et aidez-nous à former un
              maximum de personnes à réagir face à l&apos;addiction à
              l&apos;alcool. Partagez l&apos;app Oz Ensemble sur les réseaux
              sociaux :
            </p>
            <br />
            <br />
            <a
              href="https://twitter.com/OzEnsemble"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="124px"
                height="124px"
                src="/img/twitter.png"
                alt="twitter logo"
              />
            </a>
          </Col>
        </Row>
      </div>
    </section>
  )
}

function Qui() {
  return (
    <section id="qui">
      <div className="container">
        <hr />
        <br />
        <br />
        <div className="section-heading text-center">
          <SectionTitle>Qui sommes-nous ?</SectionTitle>
          <br />
          <Col xs={{ offset: 1, span: 10 }}>
            <p>
              <strong>
                Ce service, créé par le Dr Géraldine TALBOT, est développé par
                la Fabrique Numérique des Ministères Sociaux et
                l&apos;association CaPASSCité.
              </strong>
            </p>
          </Col>
        </div>
      </div>
      <div className="text-center">
        <img
          src="/img/logo-ministere.png"
          alt="Logo Minisères des solidarités et de la Santé"
        />
        <img src="/img/logo-capasscite.png" alt="Logo CaPassCite" />
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="container text-center">
        <hr />
        <br />
        <div className="section-heading text-center">
          <SectionTitle>Contactez-nous</SectionTitle>
        </div>
        <br />
        <br />
        Contactez-nous par email{" "}
        <a href="mailto:ozensemble@fabrique.social.gouv.fr&subject=MonSuiviPsy">
          ozensemble@fabrique.social.gouv.fr
        </a>
        {/* <LeafletMap /> */}
      </div>
    </section>
  )
}
