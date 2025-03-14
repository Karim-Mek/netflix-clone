import Accordion from "../components/Accordion";

const faq = [
  {
    question: "Netflix, qu'est-ce que c'est ?",
    answer: [
      "Netflix est un service de streaming qui propose une vaste sélection de séries, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.",
      "Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries chaque semaine, il y en a pour tous les goûts !",
    ],
  },
  {
    question: "Combien coûte Netflix ?",
    answer: [
      "Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les offres vont de 3,99 $US à 9,99 $US par mois. Pas de contrat ni de frais supplémentaires.",
    ],
  },
  {
    question: "Oû puis-je regarder Netflix ?",
    answer: [
      "Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.",
      "Vous pouvez aussi télécharger vos séries préférées avec l'application iOS ou Android. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous.",
    ],
  },
  {
    question: "Comment puis-je annuler mon offre ?",
    answer: [
      "Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.",
    ],
  },
  {
    question: "Que puis-je regarder sur Netflix ?",
    answer: [
      "Netflix propose un vaste catalogue comprenant notamment des longs-métrages, des documentaires, des séries, des animes et des programmes originaux Netflix primés. Regardez Netflix à volonté, quand vous le voulez.",
    ],
  },
  {
    question: "Est-ce que Netflix est adapté aux enfants ?",
    answer: [
      "Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.",
      "Les profils Jeunesse comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques.",
    ],
  },
];

export default function FAQ() {
  return (
    <section class="faq-section section">
      <h2>Foire aux questions</h2>

      <ul className="faq-list">
        {faq.map((f) => (
          <Accordion question={f.question} answer={f.answer} />
        ))}
      </ul>
    </section>
  );
}
