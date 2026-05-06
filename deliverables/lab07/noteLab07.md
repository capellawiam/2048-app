Note de lab07

Au début du lab07, je ne savais pas vraiment à quoi servait Pulumi, car c’était la première fois que je l’utilisais. J’ai donc commencé par essayer de comprendre son rôle. J’ai compris que Pulumi permet de décrire et de déployer une infrastructure cloud directement avec du code.

Ensuite, j’ai rencontré un problème de connexion à Pulumi. En effet, j’étais connectée avec mon compte personnel, alors qu’il fallait avoir accès à l’organisation teachingiac. Pour résoudre ce problème, j’ai dû attendre l’invitation du professeur. J’ai aussi vérifié si l’invitation se trouvait dans mes mails, dans mes spams ou directement sur Pulumi.

Cependant, comme l’accès à l’organisation ne fonctionnait pas immédiatement, nous avons utilisé le profil du professeur afin de pouvoir continuer le lab. Cela nous a permis d’avancer malgré le problème de compte et de commencer à travailler sur la configuration Pulumi.


Ensuite, nous avons rencontré un problème avec le déploiement vers Azure Static Web Apps. Le workflow GitHub Actions se lançait bien, mais une erreur inconnue apparaissait pendant le déploiement. Il a donc fallu vérifier la configuration du fichier azure-static-web-app.yml, les secrets GitHub, ainsi que les chemins utilisés pour l’application et le dossier de sortie.

Malgré ces différents problèmes, nous avons finalement réussi à écrire la stack Pulumi. Cette stack décrit l’infrastructure nécessaire pour le projet. Grâce à ce lab, j’ai mieux compris le rôle de Pulumi, la gestion d’une stack, l’utilisation de Git, ainsi que le lien entre GitHub Actions et Azure.