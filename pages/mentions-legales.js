import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Title from "../components/Title"

const Mentions = () => {
  return (
    <div className="">
      <Navigation />

      <div className="py-14">
        <h1 className="mb-6 text-2xl font-bold text-center lg:text-4xl text-oz-blue lg:mb-10">
          Mentions légales
        </h1>

        <div className="mx-[10%] max-w-[900px] md:m-auto">
          <Title>Éditeur du site</Title>
          <p>
            La Plateforme est éditée par l’Agence régionale de santé
            Île-de-France située : <br /> <br />
            Immeuble Le Curve <br />
            13 Rue du Landy <br />
            93200 Saint-Denis <br />
            Téléphone : 01 44 02 00 00 <br />
            <br />
            <br />
          </p>
          <Title>Directrice de la publication</Title>
          <p>
            Madame Amélie Verdier, Directrice générale de l’Agence régionale de
            santé (ARS) Île-de-France.
            <br />
            <br />
            <br />
          </p>
          <Title>Hébergement du site</Title>
          <p>
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
          </p>
          <Title>Accessibilité</Title>
          <p>
            La conformité aux normes d’accessibilité numérique est un objectif
            ultérieur mais nous tâchons de rendre ce site accessible à toutes et
            à tous.
            <br />
            <br />
          </p>
          <Title>En savoir plus</Title>
          <p>
            Pour en savoir plus sur la politique d’accessibilité numérique de
            l’État
            : http://references.modernisation.gouv.fr/accessibilite-numerique
            <br />
            <br />
          </p>
          <Title>Signaler un dysfonctionnement</Title>
          <p>
            Si vous rencontrez un défaut d’accessibilité vous empêchant
            d’accéder à un contenu ou une fonctionnalité du site, merci de nous
            en faire part ici : ozensemble@fabrique.social.gouv.fr
            <br />
            <br />
            Si vous n’obtenez pas de réponse rapide de notre part, vous êtes en
            droit de faire parvenir vos doléances ou une demande de saisine au
            Défenseur des droits.
            <br />
            <br />
            Pour le joindre, vous pouvez :
            <br />
          </p>
          <ul className="list-disc list-inside">
            <li>
              Utiliser le formulaire de contact en ligne ici :
              https://formulaire.defenseurdesdroits.fr/code/afficher.php?ETAPE=accueil_2016
            </li>
            <li>
              Composer le 09 69 39 00 00 (du lundi au vendredi de 8h à 20h)
            </li>
            <li>
              Envoyer un courrier (sans timbre) à l’adresse suivante : Défenseur
              des droits, Libre réponse 71120, 75342 Paris CEDEX 07.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mentions
