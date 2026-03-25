Notes for lab 5, the workflow is in directory .github/workflows/ci.yml. The workflow is triggered on push to main and lab05 branches, and it ignores changes in the docs directory.

Au début de ce TP, l’utilisation de Vercel et du déploiement automatique était quelque chose de nouveau pour moi. Je ne connaissais pas cette plateforme avant. Au fur et à mesure, j’ai appris à utiliser Vercel, et j’ai été content de découvrir cette plateforme car elle permet de déployer facilement une application.

Un des principaux problèmes que j’ai rencontrés concernait l’option --prebuilt. Je l’utilisais dans la commande de déploiement, mais cela provoquait une erreur car Vercel attendait un dossier .vercel/output qui n’existait pas dans mon projet. J’ai compris que mon projet Nuxt générait un dossier .output différent. Pour résoudre ce problème, j’ai simplement supprimé l’option --prebuilt, ce qui a permis à Vercel de reconstruire automatiquement le projet.

J’ai aussi eu des difficultés avec les tokens Vercel. Au début, je ne savais pas où trouver VERCEL_TOKEN, VERCEL_ORG_ID et VERCEL_PROJECT_ID. Après avoir cherché, j’ai trouvé le token dans les paramètres de Vercel et les autres informations dans le fichier .vercel/project.json. Je les ai ensuite ajoutés dans les secrets GitHub, ce qui a permis au pipeline de fonctionner correctement.

J’ai également eu du mal à comprendre le fonctionnement des Pull Requests et du déploiement preview. Pour tester cela, j’ai créé une branche preview-test à partir de lab5, puis j’ai modifié un élément visible dans l’application. Après avoir poussé la branche, j’ai ouvert une Pull Request vers lab5. J’ai alors compris que la Pull Request déclenche automatiquement un déploiement preview sur Vercel, ce qui permet de vérifier les modifications avant de les mettre en production.

Enfin, j’ai eu un problème pour connecter Vercel à mon repository GitHub. La connexion ne fonctionnait pas au début car l’accès n’était pas autorisé. J’ai résolu ce problème en installant l’application Vercel sur GitHub et en donnant les permissions nécessaires.

Après avoir corrigé ces différents problèmes, j’ai réussi à mettre en place un pipeline fonctionnel avec un déploiement en preview et en production.



