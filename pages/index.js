import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import { Row, Col } from "react-bootstrap";

import { Layout } from "../src/components/Layout";
import { FeatureRow } from "../src/components/FeatureRow";

const LeafletMap = dynamic(
  () => import("../src/components/Map").then((mod) => mod.Map),
  {
    ssr: false,
  }
);

export default function index() {
  return (
    <Layout showHeader>
      <br />
      <br />
      <Pourquoi />
      <br />
      <br />
      <Comment />
      <br />
      <br />
      <Qui />
      <br />
      <br />
      <Contact />
    </Layout>
  );
}

const SectionTitle = styled.h2`
  color: var(--primary);
`;

function Pourquoi() {
  return (
    <section id="pourquoi">
      <div className="container">
        <div className="section-heading text-center">
          <SectionTitle>Pourquoi mon suivi psy ?</SectionTitle>
          <br />
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
          </Col>
        </div>
        <br />
        <br />
        <Row style={{ marginBottom: 40 }}>
          <Col xs={{ span: 10, offset: 1 }}>
            <FeatureRow
              title="Service gratuit anonyme"
              image="/img/icon-person.png"
            >
              Le service est totalement gratuit, anonyme et sans création de
              compte
            </FeatureRow>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <FeatureRow title="Sécurité des données" image="/img/icon-eu.png">
              La personne reste propriétaire de ses données et ne les partage
              avec son praticien que si elle le souhaite
            </FeatureRow>
          </Col>
        </Row>
      </div>
    </section>
  );
}

function Comment() {
  return (
    <section id="comment">
      <div className="container">
        <div className="section-heading text-center">
          <SectionTitle style={{ fontSize: "2.5em" }}>
            Comment ce service fonctionne ?
          </SectionTitle>
          <br />
          <Col xs={{ span: 10, offset: 1 }}>
            <strong>
              Mon suivi psy, c’est une aide, pour un dialogue avec le praticien,
              qui s’adresse à tous.
            </strong>{" "}
          </Col>
        </div>
        <br />
        <br />
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <FeatureRow
              title="Le choix des symptômes"
              image="/img/demo-journal.png"
              imageSpan={4}
            >
              La possibilité de sélectionner les symptômes et les effets
              indésirables des traitements médicamenteux, que je souhaite suivre
              <br />
              <div className="text-muted">
                Fonctionnalité non disponible en V1
              </div>
            </FeatureRow>
            <FeatureRow
              title="Un rappel quotidien"
              image="/img/demo-rappels.png"
              imageSpan={4}
              reverse
            >
              Un rappel quotidien pour m’aider à y penser
            </FeatureRow>
            <FeatureRow
              title="Une solution simple et ludique"
              image="/img/demo-mood.png"
              imageSpan={4}
            >
              Des écrans simples permettant une saisie rapide
            </FeatureRow>
            <FeatureRow
              title="Des écrans de synthèses"
              image="/img/demo-dashboard.png"
              imageSpan={4}
              reverse
            >
              Une synthèse de l’évolution de l’intensité des symptômes
            </FeatureRow>
            <FeatureRow
              title="Des informations sur les symptômes"
              image="/img/demo-info.png"
              imageSpan={4}
            >
              Un accès à des données informatives concernant les symptômes
              suivis
            </FeatureRow>
            <FeatureRow
              title="La transmission au practicien"
              image="/img/demo-journal.png"
              imageSpan={4}
              reverse
            >
              La possibilité de transmettre au praticien les données par mail
              <br />
              <div className="text-muted">
                Fonctionnalité non disponible en V1. Disponible d’ici
                mi-novembre
              </div>
            </FeatureRow>
          </Col>
        </Row>
      </div>
    </section>
  );
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
          <Col xs={{ span: 10, offset: 1 }}>
            <p>
              <strong>
                Ce service, créé par le Dr Lya Pedron, est développé par la
                Fabrique Numérique des Ministères Sociaux et l’Établissement
                public de santé Barthélémy Durand et est financé par l’Agence
                Régionale de Santé d’Île de France.
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
        <img src="/img/logo-bd.png" alt="Logo BD" />
        <img src="/img/logo-ARS.png" alt="Logo ARS" />
      </div>
    </section>
  );
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
  );
}
