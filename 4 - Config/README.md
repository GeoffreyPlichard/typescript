Au lieu d'utiliser un package comme "parce" pour compiler le .ts and faire tourner un serveur, on peut générer un fichier tsconfig qui va contenir les options de compilation

`tsc --init`

Pour builder automatiquement notre .ts, on peut définir le rootDir et ourDir, ensuite run:

`tsc`

Ou watch les changements

`tsc -w`

Ensuite, pour afficher le contenu du fichier .js dans la console:

`node build/index.js`

Pour gérer toutes les commandes le mieux est de créer un fichier package.json:

`npm init -y`

Et ensuite installer certains packages pour automatiser le processus

`npm install nodemon concurrently`

Nodemon va permettre de relancer Node chaque fois qu'un changement est fait.
Concurrently va permettre de faire tourner plusieurs script à la fois.

On peut ensuite créer une commande qui va lancer ces packages dans notre package.json

```
  "start:build": "tsc -w",
  "start:run": "nodemon build/index.js",
  "start": "concurrently npm:start:*"
```
