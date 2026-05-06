Note de lab07
"index.ts " se trouve dans le dossier "infra" et c’est le fichier principal de la stack Pulumi.

Au début du lab07, je ne savais pas vraiment à quoi servait Pulumi, car c'était la première fois que je l'utilisais. J'ai donc commencé par essayer de comprendre son rôle. J'ai compris que Pulumi permet de décrire et de déployer une infrastructure cloud directement avec du code.

Ensuite, j’ai rencontré un problème de connexion à Pulumi. En effet, j’étais connectée avec mon compte personnel, alors qu’il fallait avoir accès à l’organisation teachingiac. Pour résoudre ce problème, j’ai dû attendre l’invitation du professeur. J’ai aussi vérifié si l’invitation se trouvait dans mes mails, dans mes spams ou directement sur Pulumi.

j'ai utilisé le profil du professeur afin de pouvoir continuer le lab. Cela m'a permis d'avancer malgré le problème de compte et de commencer à travailler sur la configuration Pulumi.

Ensuite, j'ai rencontré un problème avec le déploiement vers Azure Static Web Apps. Le workflow GitHub Actions se lançait bien, mais une erreur inconnue apparaissait pendant le déploiement.

Le problème initial était que `app_location` et `output_location` étaient inversés dans la configuration de l'action Azure/static-web-apps-deploy@v1. Après correction, le problème persiste avec une exception inconnue de l'action Azure. 

Plusieurs causes potentielles identifiées:
- L'action @v1 est obsolète et peut ne plus être compatible
- Le dossier `.output/public` ne se crée peut-être pas correctement
- Il manque probablement un fichier `staticwebapp.config.json` requis par Azure
- La structure du output généré par Nuxt ne correspond pas aux attentes de l'action

Il a donc fallu vérifier la configuration du fichier ci.yml, les secrets GitHub, ainsi que les chemins utilisés pour l'application et le dossier de sortie.

Malgré ces différents problèmes, j'ai finalement réussi à écrire la stack Pulumi. Cette stack décrit l'infrastructure nécessaire pour le projet. Grâce à ce lab, j'ai mieux compris le rôle de Pulumi, la gestion d'une stack, l'utilisation de Git, ainsi que le lien entre GitHub Actions et Azure.avons utilisé le profil du professeur afin de pouvoir continuer le lab. Cela nous a permis d’avancer malgré le problème de compte et de commencer à travailler sur la configuration Pulumi.
