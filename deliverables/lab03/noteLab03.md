Au début, les notions de workflow, pipeline et GitHub Actions étaient totalement nouvelles pour moi. J’ai donc rencontré plusieurs difficultés pour comprendre la structure globale et le fonctionnement de l’intégration continue.

La première pipeline de type Hello World fonctionnait correctement, mais dès que j’ai voulu aller plus loin, j’ai constaté que ce qui fonctionnait en local ne fonctionnait pas forcément sur GitHub Actions. J’ai alors compris que les runners GitHub démarrent dans un environnement vierge et qu’il était nécessaire d’installer explicitement les outils requis, comme Node.js et pnpm, avant d’exécuter le script.

Une autre difficulté concernait la génération et le téléchargement de l’artifact. Au départ, j’avais indiqué un chemin incorrect (.output/), ce qui empêchait GitHub de trouver le package généré. Après avoir vérifié localement où le build était réellement produit, j’ai corrigé le chemin pour pointer vers le bon dossier, ce qui a permis l’upload correct de l’artifact.

