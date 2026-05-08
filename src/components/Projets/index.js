import React from "react";
import { FiExternalLink } from "react-icons/fi";

import Icon1 from "../../medias/svg-4.svg";
import Icon2 from "../../medias/svg-5.svg";
import Icon3 from "../../medias/svg-6.svg";
import {
  ProjetsWrapper,
  ProjetsContainer,
  ProjetsHeader,
  ProjetsH1,
  ProjetsH2,
  ProjetsIcon,
  ProjetsCard,
  ProjetsP,
  ProjetsLink,
  ProjetsTopline,
  ProjetsIntro,
  ProjetsCta,
  ProjetsStatus,
} from "./ProjetsElements";

const Projets = () => {
  return (
    <ProjetsContainer id="projet">
      <ProjetsHeader>
        <ProjetsTopline>Projets</ProjetsTopline>
        <ProjetsH1>Des projets concrets à explorer</ProjetsH1>
        <ProjetsIntro>
          Les cartes actives ouvrent le projet dans un nouvel onglet.
        </ProjetsIntro>
      </ProjetsHeader>

        <ProjetsWrapper>
          <ProjetsLink
            href="https://kosmicdiscovery.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visiter Kosmic Discovery"
          >
            <ProjetsCard $interactive>
              <ProjetsIcon src={Icon3} />
              <ProjetsH2>Kosmic Discovery</ProjetsH2>
              <ProjetsP>
                Un blog de vulgarisation scientifique où j'explore l'espace,
                les grandes questions et quelques théories qui font réfléchir.
              </ProjetsP>
              <ProjetsCta>
                Visiter le projet <FiExternalLink aria-hidden="true" />
              </ProjetsCta>
            </ProjetsCard>
          </ProjetsLink>

          <ProjetsLink
            href="https://life-stats-gamma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visiter Life Stats Calculator"
          >
            <ProjetsCard $interactive>
              <ProjetsIcon src={Icon2} />
              <ProjetsH2>Life Stats Calculator</ProjetsH2>
              <ProjetsP>
                Une petite application qui transforme une année de naissance en
                statistiques parlantes, avec une approche simple et ludique.
              </ProjetsP>
              <ProjetsCta>
                Visiter le projet <FiExternalLink aria-hidden="true" />
              </ProjetsCta>
            </ProjetsCard>
          </ProjetsLink>

          <ProjetsCard>
            <ProjetsIcon src={Icon1} />
            <ProjetsH2>Prochain projet</ProjetsH2>
            <ProjetsP>
              Un espace réservé pour une prochaine démo. Le lien sera ajouté
              dès que le projet sera prêt à être présenté.
            </ProjetsP>
            <ProjetsStatus>Bientôt en ligne</ProjetsStatus>
          </ProjetsCard>
        </ProjetsWrapper>
    </ProjetsContainer>
  );
};

export default Projets;
