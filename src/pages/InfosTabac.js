import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../styles/variables.css';
import '../styles/InfosTabac.css';

const InfosTabac = () => {
  return (
    <div className="infos-container">
      <div className="infos-content">
        <div className="infos-title">
          <Typography variant="h1">Informations sur le Tabac</Typography>
        </div>

        <section className="section" style={{ animationDelay: '0.2s' }}>
          <Typography variant="h2" className="section-title">
            Composition du Tabac et Ses Effets sur la Santé
          </Typography>

          <div className="subsection">
            <Typography variant="h3" className="subsection-title">
              Ce que contient une cigarette
            </Typography>
            <Typography className="content-text">
              Une cigarette contient bien plus que du simple tabac. Voici les principales substances nocives que vous inhalez à chaque bouffée :
            </Typography>
            <div className="list-item">
              La nicotine : substance addictive qui crée une forte dépendance en agissant directement sur le cerveau
            </div>
            <div className="list-item">
              Le goudron : substance cancérigène qui s'accumule dans les poumons et noircit les tissus
            </div>
            <div className="list-item">
              Le monoxyde de carbone : gaz toxique qui réduit l'oxygénation des organes
            </div>
            <div className="list-item">
              Les métaux lourds : arsenic, plomb, cadmium, substances hautement toxiques pour l'organisme
            </div>
          </div>

          <div className="subsection">
            <Typography variant="h3" className="subsection-title">
              Les effets sur le corps
            </Typography>
            <div className="highlight-box">
              <Typography variant="h4" className="highlight-title">
                Effets à court terme
              </Typography>
              <div className="list-item">
                Difficultés respiratoires et essoufflement rapide
              </div>
              <div className="list-item">
                Diminution significative du goût et de l'odorat
              </div>
              <div className="list-item">
                Baisse d'énergie et fatigue accrue
              </div>
              <div className="list-item">
                Mauvaise haleine et jaunissement des dents
              </div>
            </div>
            <div className="highlight-box">
              <Typography variant="h4" className="highlight-title">
                Effets à long terme
              </Typography>
              <div className="list-item">
                Risques accrus de cancers (poumons, gorge, vessie...)
              </div>
              <div className="list-item">
                Maladies cardiovasculaires graves
              </div>
              <div className="list-item">
                BPCO (Broncho-Pneumopathie Chronique Obstructive)
              </div>
              <div className="list-item">
                Vieillissement prématuré de la peau
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ animationDelay: '0.4s' }}>
          <Typography variant="h2" className="section-title">
            L'Impact du Tabac au-delà du Fumeur
          </Typography>

          <div className="subsection">
            <Typography variant="h3" className="subsection-title">
              Le tabagisme passif
            </Typography>
            <Typography className="content-text">
              La fumée du tabac n'affecte pas uniquement le fumeur. Le tabagisme passif représente un danger réel pour l'entourage :
            </Typography>
            <div className="list-item">
              Les enfants exposés ont plus de risques de développer des maladies respiratoires
            </div>
            <div className="list-item">
              Les femmes enceintes exposées mettent en danger leur grossesse
            </div>
            <div className="list-item">
              Dans les lieux fermés, la concentration de substances toxiques peut être très élevée
            </div>
          </div>

          <div className="subsection">
            <Typography variant="h3" className="subsection-title">
              L'impact écologique
            </Typography>
            <Typography className="content-text">
              Le tabac a des conséquences désastreuses sur notre environnement :
            </Typography>
            <div className="list-item">
              Déforestation massive pour la culture du tabac
            </div>
            <div className="list-item">
              Les mégots mettent jusqu'à 12 ans à se dégrader et polluent sols et eaux
            </div>
            <div className="list-item">
              Production importante de CO2 lors de la culture et de la transformation
            </div>
          </div>
        </section>

        <section className="section" style={{ animationDelay: '0.6s' }}>
          <Typography variant="h2" className="section-title">
            Pourquoi et Comment Arrêter de Fumer ?
          </Typography>

          <div className="subsection">
            <Typography variant="h3" className="subsection-title">
              Les bénéfices de l'arrêt
            </Typography>
            <div className="highlight-box">
              <Typography variant="h4" className="highlight-title">
                Bénéfices immédiats
              </Typography>
              <div className="list-item">
                Après 20 minutes : la pression artérielle et les pulsations du cœur redeviennent normales
              </div>
              <div className="list-item">
                Après 8 heures : la quantité de monoxyde de carbone dans le sang diminue de moitié
              </div>
              <div className="list-item">
                Après 24 heures : le risque d'infarctus diminue déjà
              </div>
            </div>
            <div className="highlight-box">
              <Typography variant="h4" className="highlight-title">
                Bénéfices à long terme
              </Typography>
              <div className="list-item">
                Amélioration significative de la santé respiratoire
              </div>
              <div className="list-item">
                Économies financières importantes
              </div>
              <div className="list-item">
                Meilleure qualité de vie globale
              </div>
            </div>
          </div>

          <div className="subsection">
            <Typography variant="h3" className="subsection-title">
              Les méthodes pour arrêter
            </Typography>
            <Typography className="content-text">
              Il existe différentes approches pour arrêter de fumer, chacune adaptée à différents profils :
            </Typography>
            <div className="list-item">
              Substituts nicotiniques (patchs, gommes, sprays)
            </div>
            <div className="list-item">
              Thérapies comportementales avec des professionnels
            </div>
            <div className="list-item">
              Applications mobiles de suivi et de motivation
            </div>
            <div className="list-item">
              Groupes de soutien et accompagnement personnalisé
            </div>
          </div>
        </section>

        <section className="section" style={{ animationDelay: '0.8s' }}>
          <Typography variant="h2" className="section-title">
            Ressources et Aide
          </Typography>

          <div className="subsection">
            <Typography variant="h3" className="subsection-title">
              Où trouver de l'aide ?
            </Typography>
            <div className="highlight-box">
              <Typography variant="h4" className="highlight-title">
                Contacts utiles
              </Typography>
              <div className="list-item">
                Tabac Info Service : 39 89 (appel non surtaxé)
              </div>
              <div className="list-item">
                Application NEW LIFE : votre compagnon pour arrêter de fumer
              </div>
              <div className="list-item">
                Votre médecin traitant : premier interlocuteur pour un accompagnement personnalisé
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ animationDelay: '1s' }}>
          <Typography variant="h2" className="section-title">
            Aspects Sociétaux et Économiques
          </Typography>

          <div className="subsection">
            <Typography variant="h3" className="subsection-title">
              Le coût du tabac
            </Typography>
            <Typography className="content-text">
              Fumer représente une dépense importante sur le long terme. Le prix des cigarettes ne cesse d'augmenter, rendant cette habitude encore plus coûteuse pour les fumeurs.
            </Typography>
            <div className="list-item">
              Un fumeur régulier dépense une somme considérable chaque année.
            </div>
            <div className="list-item">
              L'argent économisé en arrêtant de fumer peut être réinvesti dans des projets personnels ou des loisirs.
            </div>
          </div>

          <div className="subsection">
            <Typography variant="h3" className="subsection-title">
              L'influence de l'industrie du tabac
            </Typography>
            <Typography className="content-text">
              Les grandes entreprises du tabac ont longtemps minimisé les dangers du tabagisme. Elles utilisent des stratégies marketing pour cibler de nouveaux consommateurs, notamment les jeunes.
            </Typography>
            <div className="list-item">
              Publicités déguisées sur les réseaux sociaux et dans les films.
            </div>
            <div className="list-item">
              Utilisation d'additifs pour rendre la cigarette plus addictive.
            </div>
            <div className="list-item">
              Lobbying influent pour limiter les lois anti-tabac.
            </div>
          </div>

          <div className="subsection">
            <Typography variant="h3" className="subsection-title">
              Le rôle de la prévention
            </Typography>
            <Typography className="content-text">
              Des campagnes de sensibilisation et des mesures législatives ont été mises en place pour lutter contre le tabagisme.
            </Typography>
            <div className="list-item">
              Interdiction de fumer dans les lieux publics.
            </div>
            <div className="list-item">
              Augmentation des taxes sur le tabac.
            </div>
            <div className="list-item">
              Images choc et avertissements sur les paquets de cigarettes.
            </div>
          </div>
        </section>
      </div>
      <div style={{ height: '0px' }} /> {/* Suppression de l'espace pour le footer */}
    </div>
  );
};

export default InfosTabac;
