import React from "react"
import Head from "next/head"
import { Layout } from "../src/components/Layout"

export default function Mentions() {
  return (
    <Layout>
      <Head>
        <title>Conditions générales et mentions légales</title>
      </Head>
      <h1>Conditions générales et mentions légales</h1>
      <h3>Présentation</h3>
      <p>
        Oz Ensemble est un service de suivi de la consommation d’alcool à
        destination des particuliers et de celles et ceux qui les conseillent,
        dans un cadre professionnel ou bénévole. Il s&apos;agit d&apos;une
        application mobile qui permet de d’évaluer son niveau de consommation,
        les risques associés pour la santé et de contacter un professionnel de
        soins.
      </p>
      <p>
        Le code du logiciel est libre, et peut donc être vérifié et amélioré par
        toutes et tous.
      </p>
      <h3>Vocabulaire</h3>
      <li>« Nous » se réfère à l’éditeur de Oz Ensemble. </li>
      <li>« Vous » se réfère à un·e usager de Oz Ensemble.</li>
      <li>
        {" "}
        « Partenaires » se réfère aux organismes responsables d’attribuer les
        aides calculées par Oz Ensemble.{" "}
      </li>
      <br />
      <h3>Absence de garantie</h3>
      <p>
        Les résultats fournis par ce service ont une valeur informative et ne
        représentent en aucun cas un diagnostic médical. Nous ne garantissons
        pas l&apos;exactitude du contenu des sites externes vers lesquels nous
        redirigeons la navigation. Ces sites ne sont pas non plus régis par les
        mêmes conditions d&apos;utilisation, notamment en ce qui concerne leur
        traitement des données à caractère personnel. Nous mettons Oz Ensemble à
        disposition sans garantie sur sa disponibilité, en « best effort ». Cela
        signifie que d&apos;éventuelles indisponibilités n&apos;ouvriront pas
        droit à compensation financière.
      </p>
      <h3>Vos données</h3>
      <p>
        Oz Ensemble ne vous demande ni ne stocke d&apos;information nominative
        telle que nom, prénoms ou adresse. Pour autant, lorsque vous que vous
        demanderez à être contacté, vous nous transmettrez des coordonnées
        nécessaires à la prise de contact par nos services. Ces coordonnées sont
        des données personnelles et nous en avons donc déclaré le traitement
        auprès de la CNIL. Nous conservons ces données pendant deux ans à
        compter de la première saisie pour analyser les usages, mesurer
        l&apos;impact et la diffusion territoriale de Oz Ensemble, et améliorer
        le service. Vous avez un droit d&apos;accès, de rectification et de
        suppression de vos données. Pour l&apos;exercer, envoyez-nous un
        courriel à l&apos;adresse à compléter en précisant les coordonnées
        transmises. Comme nous n&apos;enregistrons pas d&apos;éléments
        nominatifs, seuls ces éléments peuvent nous permettre de retrouver votre
        utilisation.{" "}
      </p>
      <p>
        Nous nous engageons à ne jamais exploiter les informations que vous nous
        transmettrez dans un but commercial ou publicitaire. De manière
        générale, Oz Ensemble n’accepte aucune forme de publicité autre que
        celle que constitue la présentation des aides des partenaires. Nous
        collectons également des données anonymes d&apos;audience,
        indépendamment des suivis de consommation effectués. Cela nous permet
        par exemple de déterminer la durée d&apos;un suivi et les pages à
        améliorer en priorité. Nous nous engageons à prendre toutes les mesures
        nécessaires pour garantir la sécurité et la confidentialité des
        informations que vous nous fournissez. Les situations enregistrées sont
        enregistrées dans un centre de données sécurisé. Seules nos équipes
        techniques et celles de nos partenaires peuvent y accéder.
      </p>
      <h3>Évolutions</h3>
      <p>
        Nous pouvons faire évoluer Oz Ensemble sans information préalable. Nous
        ajoutons régulièrement des aides, améliorons l&apos;interface et
        modifions des formulations sur la base de vos retours et des évolutions
        règlementaires. Nous pouvons suspendre l&apos;accès à Oz Ensemble sans
        information préalable, notamment pour des raisons de maintenance. Nous
        mettons l&apos;application à jour plusieurs fois par semaine.
        L&apos;indisponibilité ne dépasse généralement pas une dizaine de
        secondes. Nous pouvons amender ces conditions d’utilisation. En cas de
        changement significatif, une notification s&apos;affichera lors de
        l&apos;accès à Oz Ensemble au moins 30 jours avant l&apos;entrée en
        vigueur des nouvelles conditions. Tout l&apos;historique de ces
        conditions est librement accessible.
      </p>
      <h3>Utilisation</h3>
      <p>
        Oz Ensemble est en téléchargement libre sur les plateformes Apple App
        Store et Google Play. Son utilisation est gratuite et facultative. Si
        vous effectuez un suivi de votre consommation, vous acceptez ces
        conditions d&apos;utilisation. Comme indiqué dans l&apos;article L.
        112-9 du code des relations entre le public et l&apos;administration.
        L’utilisation de Oz Ensemble requiert une connexion internet et un
        smartphone récent. Nous nous réservons le droit de bloquer, sans
        information préalable ni compensation financière, les usages mettant en
        péril l&apos;utilisation du logiciel par d&apos;autres usagers. Cela
        nous permet d&apos;anticiper d&apos;éventuelles attaques par déni de
        service.
      </p>
      <h3>Mentions légales</h3>
      <li>
        <b>Éditeur:</b> Fabrique numérique des Ministères Sociaux
      </li>
      <li>
        <b>Directeur de la publication:</b> Docteur TALBOT Géraldine.{" "}
      </li>
      <li>
        <b>Hébergeur</b>: Microsoft France
      </li>
    </Layout>
  )
}
