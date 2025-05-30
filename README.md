# Projet Kasa - OpenClassrooms

Repo du projet Kasa de la formation Développeur Web d'OpenClassrooms

## Description du projet
Le projet Kasa est un projet dont le but est de développer le site d'une agence de voyage proposant des logements à la location.
Il est développé en **React** avec le framework **Vite**, les pages sont gérées par **React Router** et le style par **SASS**.

Les élément de développement mis à disposition sont une fiche de contraintes techniques ainsi qu'un figma donnant le design attendu du site.

## Utilisation
Le site est déployé sur **Vercel** (beaucoup plus adapté à React Router que Github Pages).

Il est consultable en suivant **<a href="https://kasa-project-pnb4.vercel.app/" target="_blank">CE LIEN</a>**
> Github Pages a posé énormément de problèmes concernant les redirections vers la page 404 du site

## Features
### Le site comprend plusieurs pages :
 - La page d'accueil, contenant toutes les annonces de logements
 - La page "A Propos", expliquant les politiques de l'entreprise etc.
 - La page de logements, donnant des informations détaillées à propos du logement sélectionnée depuis la page d'accueil
 - La page 404, redirigeant l'utilisateur.ice dès qu'un chemin dans l'url est erroné

### Quelques détails notables dans le style du site :
 - Les informations de la page à propos ainsi que deux éléments des pages de description des logements sont contenus dans des accordéons animés qui affichent progressivement le text.
 - Chaque logement contient un caroussel permettant de faire défiler les photos. Il est infini et comprend une animation de slide latéral pour plus de fluidité visuelle lors des intéractions.
 - Sur la page d'accueil, une grille permet l'affichage de vignettes contenant une brève description des logmements. Au survol des vignettes, un léger zoom sur l'image ainsi qu'un assombrissement permettenent à l'utilisateur d'intuitivement savoir que l'élément en question est celui qui est sélectionné.