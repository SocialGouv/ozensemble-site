import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"

import { Row, Col } from "react-bootstrap"

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
  color: var(--primary);
`

function Pourquoi() {
  return (
    <section id="pourquoi">
      <div className="container">
        <div className="section-heading text-center">
          <SectionTitle>Apprenez à réagir</SectionTitle>
          {/* <br />
          <br />
          <Col xs={{ span: 10, offset: 1 }}>
            <p className="text-left">
              <strong>
                Les troubles psychiatriques affectent 1 personne sur 5 chaque
                année (donnée OMS).Trouver le bon traitement peut prendre
                plusieurs années. Pendant ce temps-là, les symptômes évoluent et
                peuvent devenir chroniques. L’état clinique peut s’aggraver et
                le traitement devenir moins efficace.
              </strong>
            </p>
            <p style={{ color: "var(--info)" }} className="text-left">
              <strong>
                Plus les informations concernant mes symptômes sont proches de
                la réalité, de ce que je vis, plus mon médecin sera en mesure de
                me prescrire le bon traitement et d'adapter au mieux mon suivi.
              </strong>{" "}
            </p>
          </Col> */}
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
                  l'alcool
                </li>
                <li>
                  Accompagner vos patients vers une maitrise de leur
                  consommation d'alcool
                </li>
              </ul>
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
                <li>Apprendre à aider une personne dépendante à l'alcool</li>
                <li>
                  Sensibiliser vos bénéficiaires à maitrise leur consommation
                  d'alcool
                </li>
              </ul>
            </FeatureRow>
          </Col>
        </Row>
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow
              title="Vous êtes un proche"
              image="/img/icon-family.png"
            >
              Vous désirez aider un proche dépendant à l'alcool mais vous ne
              savez pas comment vous y prendre ?
            </FeatureRow>
          </Col>
        </Row>
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow title="Vous ?" image="/img/icon-finger.png">
              Vous buvez plus de 2 verres par jour ? Vous désirez apprendre à
              maitriser votre consommation d'alcool ?
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
        <div className="section-heading text-center">
          <SectionTitle>S'informer pour mieux agir</SectionTitle>
        </div>
        <br />
        <br />
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow title="" image="/img/icon-info.png">
              <p>
                <b>
                  L'alcool en France représente la 2ᵉ cause de mortalité
                  évitable après le tabac et c'est malheureusement plus de 50
                  000 personnes qui en meurt chaque année.
                </b>
              </p>
              <p>
                Découvrez le combat de l'association CaPASSCité, fondatrice de
                l'application mobile Oz Ensemble.
              </p>
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
        <div className="section-heading text-center">
          <SectionTitle style={{ fontSize: "2.5em" }}>
            Comment ça marche ?
          </SectionTitle>
          {/* <br />
          <Col xs={{ offset: 1, span: 10 }}>
            <strong>
              Mon suivi psy, c’est une aide, pour un dialogue avec le praticien,
              qui s’adresse à tous.
            </strong>{" "}
          </Col> */}
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
                À l'issu d'un questionnaire d'1 minute, l'usager obtient un
                aperçu de ses potentiels comportements à risques vis-à-vis de sa
                consommation d'alcool.
              </b>
            </FeatureRow>
            <FeatureRow
              title="Suivre sa conso"
              image="/img/demo-followup.png"
              imageSpan={4}
              reverse
            >
              <b>
                Grâce à l'agenda de conso, l'usager apprend à suivre
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
                de l'usager.
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
        <div className="section-heading text-center">
          <SectionTitle>L'alcool en France ...</SectionTitle>
        </div>
        <br />
        <br />
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <Kpi
              text="Coût social de l'alcool en France"
              value="160 millions d'€"
            />
            <Kpi text="décès en France" value="50 000" />
            <Kpi text="cause de mortalité évitable" value="2ème" />
            <Kpi
              text="de personnes dépendantes à l'alcool en Francement obtenu"
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
        <div className="section-heading text-center">
          <SectionTitle>
            Dr Géraldine Talbot, fondatrice d'Oz Ensemble
          </SectionTitle>
        </div>
        <br />
        <br />
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow title="" image="/img/vimeo.webp">
              <b>
                Le Dr Géraldine Talbot, directrice de l'association CaPASSCité
                nous explique pourquoi elle a décidé de lancer l'application
                mobile Oz Ensemble.
              </b>
            </FeatureRow>
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
        <div className="section-heading text-center">
          <SectionTitle>Aidez-nous à en parler</SectionTitle>
        </div>
        <br />
        <br />
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ offset: 1, span: 10 }}>
            <FeatureRow title="" image="/img/twitter.png">
              Rejoignez le mouvement Oz Ensemble et aidez-nous à former un
              maximum de personnes à réagir face à l'addiction à l'alcool.
              Partagez l'app Oz Ensemble sur les réseaux sociaux :
            </FeatureRow>
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
        <div className="section-heading text-center">
          <SectionTitle style={{ fontSize: "2.5em" }}>
            Qui sommes-nous ?
          </SectionTitle>
          <br />
          <Col xs={{ offset: 1, span: 10 }}>
            <p>
              <strong>
                Ce service, créé par le Dr Géraldine TALBOT, est développé par
                la Fabrique Numérique des Ministères Sociaux et l'association
                CaPASSCité.
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
      <div className="container">
        <hr />
        <br />
        <div className="section-heading text-center">
          <SectionTitle style={{ fontSize: "2.5em" }}>
            Contactez-nous
          </SectionTitle>
        </div>
        <br />
        <br />
        <LeafletMap />
      </div>
    </section>
  )
}
