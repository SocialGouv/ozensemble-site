import Footer from "components/Footer"
import Navigation from "components/Navigation"
import Title from "components/Title"

export default () => {
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
          </p>
          <Title>Directeur de la publication</Title>
          <p>
            Madame Géraldine TALBOT, Directrice de l’Association CaPASSCité
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
          <Title>Signaler un dysfonctionnement</Title>
          <p>
            Si vous rencontrez un défaut d’accessibilité vous empêchant
            d’accéder à un contenu ou une fonctionnalité du site, merci de nous
            en faire part.
            <br />
            <br />
            Si vous n’obtenez pas de réponse rapide de notre part, vous êtes en
            droit de faire parvenir vos doléances ou une demande de saisine au
            Défenseur des droits.
            <br />
            <br />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
