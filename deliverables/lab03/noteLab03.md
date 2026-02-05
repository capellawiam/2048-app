Au début, les notions de workflow, pipeline et GitHub Actions étaient totalement nouvelles pour moi. J’ai donc rencontré plusieurs difficultés pour comprendre la structure globale et le fonctionnement de l’intégration continue.

Le workflow est défini dans le fichier .github/workflows/hello.yml, qui décrit l’ensemble des étapes exécutées automatiquement à chaque push sur la branche concernée.

La première pipeline de type Hello World fonctionnait correctement, mais dès que j’ai voulu aller plus loin, j’ai constaté que ce qui fonctionnait en local ne fonctionnait pas forcément sur GitHub Actions. J’ai alors compris que les runners GitHub démarrent dans un environnement vierge et qu’il était nécessaire d’installer explicitement les outils requis, comme Node.js et pnpm, avant d’exécuter le script.

Une autre difficulté concernait la génération et le téléchargement de l’artifact. Au départ, j’avais indiqué un chemin incorrect (.output/), ce qui empêchait GitHub de trouver le package généré. Après avoir vérifié localement où le build était réellement produit, j’ai corrigé le chemin pour pointer vers le bon dossier, ce qui a permis l’upload correct de l’artifact.

Pour partir plus loin, j’ai travaillé sur les déclencheurs de la pipeline, et cette partie était simple. Le déclenchement tous les jours à 8h et sur ma branche principale fonctionnait déjà bien, donc j’ai seulement ajouté la branche lab3 pour tester. Tout s’est bien passé et je n’ai pas eu de problème à ce niveau-là.

Plus tard, j’ai décidé de paralléliser les tâches du workflow. C’est là que j’ai rencontré des difficultés. Au début, je pensais que plusieurs jobs fonctionnaient comme un seul, mais je n’avais pas compris que chaque job utilise une machine différente. À cause de ça, même si un outil était installé dans un job, les autres ne le trouvaient pas, ce qui causait des erreurs du type commande non trouvée.

De manière générale, j’ai trouvé que les erreurs dans les workflows sont difficiles à résoudre. Il n’y a pas d’outils de débogage comme gdb ou valgrind, et les messages d’erreur ne sont pas toujours clairs. Par exemple, il n’est pas évident de comprendre que les installations doivent être refaites dans chaque job, même si tout semble correct.

Après plusieurs essais, j’ai compris le problème. J’ai installé les outils dans chaque job, ce qui a corrigé les erreurs mais rallongé le temps d’exécution. Pour améliorer cela, j’ai ensuite utilisé le cache, ce qui permet d’accélérer les exécutions suivantes.