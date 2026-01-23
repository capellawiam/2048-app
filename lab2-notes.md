Dans ce TP, j’ai appris à mettre en place une intégration continue pour une application web avec Nuxt. Au début, toutes les étapes étaient faites manuellement, comme installer les dépendances, vérifier le code, lancer les tests et construire l’application. À la fin du TP, tout est automatisé dans un pipeline.

J’ai découvert plusieurs outils importants. pnpm est utilisé pour installer les dépendances. vue-tsc permet de vérifier les types TypeScript. ESLint sert à analyser le code et détecter des erreurs. Vitest est utilisé pour écrire et exécuter des tests unitaires. Vite est l’outil de build, mais dans un projet Nuxt, il est utilisé en interne par le framework.

Une des principales difficultés rencontrées concernait le type-checking. Dans VS Code, les erreurs de type étaient bien affichées en rouge, mais dans le terminal, je n’arrivais pas à les faire apparaître. J’ai essayé plusieurs commandes avant de trouver la bonne. J’ai d’abord utilisé la commande "pnpm vue-tsc --noEmit", mais aucune erreur ne s’affichait. Ensuite, j’ai essayé d’autres variantes sans succès, ce qui m’a fait perdre beaucoup de temps. Finalement, j’ai compris que dans un projet Nuxt, il fallait préciser explicitement la configuration TypeScript. La commande qui a fonctionné est "pnpm vue-tsc --noEmit --project .nuxt/tsconfig.json". Cette étape m’a permis de comprendre l’importance de la configuration et la différence entre l’IDE et l’exécution en ligne de commande.

J’ai aussi eu un problème avec la commande vite build. Cette commande ne fonctionne pas directement avec Nuxt, car Nuxt utilise Vite en interne. Il a donc fallu utiliser la commande spécifique de Nuxt pour construire l’application. De plus, Vite nécessite une version récente de Node, j’ai donc dû installer Node version 20 pour que le build fonctionne correctement.

Le stockage a été une contrainte importante pendant le TP. L’installation des dépendances prend beaucoup de place sur le disque, surtout avec node_modules, .nuxt et .output. 

Un test unitaire a été ajouté avec Vitest afin de vérifier que le système de tests fonctionne. Le test est passé au vert, puis au rouge, avant d’être corrigé pour repasser au vert. Cela m’a permis de comprendre l’intérêt des tests automatiques.

Le déploiement a été préparé grâce à la commande de build de Nuxt, qui génère le package de production. Le résultat peut être testé localement avec une commande de preview pour vérifier que l’application fonctionne correctement après compilation.

Enfin, le pipeline permet maintenant d’exécuter automatiquement toutes les étapes. Grâce aux messages affichés dans le script et à l’arrêt automatique en cas d’erreur, il est plus facile de suivre l’exécution. Ce TP m'a permis de comprendre concrètement l'importance de l'intégration continue et son impact sur la qualité du code dans un projet réel.
