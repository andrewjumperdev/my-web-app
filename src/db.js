export const projects = [
    {
      id: 1,
      img: "",
      title: "Site e-commerce Kanap",
      description: `L’application web est composée de 4 pages : Une page d’accueil montrant (de manière dynamique) tous les articles disponibles à
      la vente. Une page “produit” qui affiche (de manière dynamique) les détails du produit sur
      lequel l'utilisateur a cliqué depuis la page d’accueil. Depuis cette page, l’utilisateur
      peut sélectionner une quantité, une couleur, et ajouter le produit à son panier.
      Une page “panier”. Celle-ci contient plusieurs parties; Un résumé des produits dans le panier, le prix total et la possibilité de
      modifier la quantité d’un produit sélectionné ou bien de supprimer celui-ci.Un formulaire permettant de passer une commande. Les données du
      formulaire doivent être correctes et bien formatées avant d'être renvoyées au
      back-end. Par exemple, pas de chiffre dans un champ prénom.
      Une page “confirmation”;Un message de confirmation de commande, remerciant l'utilisateur pour sa
      commande, et indiquant l'identifiant de commande envoyé par l’API.`,
      thumbnail: "./Kanap.png",
      urlProject: "",
      mainTools: ['javascript', 'html', 'css'],
      technicalDetails: [
        {
          title: 'GET /',
          description: `
          Verbe: GET
            Paramètre prévu: Aucun
            Corps de la demande: Aucun
            Réponse: Retourne un tableau contenant tous les éléments de l'API.
          `
        },
        {
          title: 'GET /{product-ID}',
          description: `
          Verbe: GET
          Paramètre prévu: {product-ID} (identifiant du produit à récupérer)
          Corps de la demande: Aucun
          Réponse: Renvoie l'élément correspondant à {product-ID}, c'est-à-dire l'élément ayant l'identifiant spécifié.
          `
        },
        {
          title: 'POST /order',
          description: `
          Verbe: POST
          Paramètre prévu: Aucun
          Corps de la demande: Requête JSON contenant un objet de contact et un tableau de produits.
          Réponse: Retourne un objet contact, un tableau de produits et un orderId (identifiant de la commande).
          `
        },
        {
          title: 'Validation des données pour POST /order',
          description: `
          L'objet de contact envoyé au serveur doit contenir les champs suivants: firstName, lastName, address, city et email.
          Le tableau de produits envoyé au serveur doit être un array de strings product-ID.
          Avant l'envoi des données au serveur, les types de ces champs et leur présence doivent être validés pour s'assurer de la conformité des données.
          `
        },
      ],
    },
    {
      id: 2,
      title: "Piiquante API",
      description: `Piiquante est une application web dédiée à la création de sauces épicées avec des recettes secrètes. Son objectif est de générer plus de buzz en permettant aux utilisateurs d'ajouter leurs sauces préférées et de liker ou disliker les sauces ajoutées par d'autres. L'application propose des fonctionnalités telles que l'authentification des utilisateurs, la visualisation des sauces existantes, l'ajout de nouvelles sauces avec des images, la mise à jour des sauces existantes, ainsi que la possibilité de liker et disliker les sauces. Les mots de passe des utilisateurs sont sécurisés grâce à un hachage, et l'accès aux routes de sauce requiert une authentification appropriée. Les adresses électroniques sont uniques pour assurer l'unicité des utilisateurs, et les erreurs de base de données sont gérées grâce à un plugin Mongoose. Le projet est sous licence MIT, encourage les contributions et respecte les normes de sécurité actuelles.`,
      thumbnail: "./piiquante.png",
      urlProject: "",
      mainTools: ['javascript', 'expressjs', 'mongodb', 'jwt'],
      technicalDetails: [
        {
          title: `Endpoints de l'API:`,        
          description: [
            
              `POST /api/auth/signup: Enregistre un nouvel utilisateur en hachant son mot de passe et l'ajoutant à la base de données.`,
              `POST /api/auth/login: Vérifie les informations d'identification de l'utilisateur et renvoie l'ID de l'utilisateur et un token web JSON signé.`,
              `GET /api/sauces: Renvoie un tableau contenant toutes les sauces de la base de données.`,
              `GET /api/sauces/:id: Renvoie la sauce avec l'ID fourni.`,
              `POST /api/sauces: Capture et enregistre l'image, analyse la sauce et enregistre les informations dans la base de données.`,
              `PUT /api/sauces/:id: Met à jour la sauce avec l'ID fourni, en modifiant l'image si fournie.`,
              `DELETE /api/sauces/:id: Supprime la sauce avec l'ID fourni.`,
              `POST /api/sauces/:id/like: Définit le statut "Like" pour l'utilisateur fourni et met à jour le nombre total de "Like" et "Dislike" pour chaque sauce.`
          ]
        },
        {
          title: `Exigences de sécurité`,
          description: [
            `Hachage du mot de passe de l'utilisateur lors de l'enregistrement.`,
              
        ],
        }
      ]
    },
    {
      id: 3,
      title: "Kasa",
      description: `Create React App: Le projet doit être créé en utilisant Create React App, un outil qui facilite la configuration initiale d'une application React.
      React Router: Pour gérer la navigation entre différentes pages, React Router doit être utilisé. Les paramètres des routes doivent être gérés dans l'URL pour récupérer les informations spécifiques à chaque logement.
      Styling: L'utilisation de Sass pour le style est facultative. Par défaut, CSS doit être utilisé pour le design.
      Pas de librairie React externe: L'utilisation de librairies externes à React n'est pas autorisée.
      Contraintes Techniques pour React :
      Pour garantir un code de qualité, les éléments suivants de React doivent être pris en compte :
      
      Découpage en composants modulaires et réutilisables: Le code doit être structuré en composants indépendants et réutilisables, facilitant ainsi la maintenance et la compréhension du code.
      Un composant par fichier: Chaque composant doit être défini dans un fichier séparé, favorisant l'organisation du code et la lisibilité.
      Structure logique des fichiers: La structure du projet doit être bien organisée, avec une séparation claire des dossiers pour les composants, les styles, etc.
      Utilisation des props entre les composants: Les composants doivent communiquer entre eux en utilisant les props, permettant de transmettre des données de manière descendante dans l'arbre des composants.
      Utilisation du state dans les composants quand c'est nécessaire: Le state de React doit être utilisé lorsque des données sont sujettes à des changements et doivent être gérées localement au sein d'un composant.
      Gestion des événements: Les interactions utilisateur doivent être gérées via la gestion des événements de React.
      Listes: Les listes doivent être exploitées en utilisant les fonctionnalités de React, notamment en utilisant la méthode map pour itérer sur les éléments de la liste.
      Il est recommandé, mais pas obligatoire, d'utiliser des composants fonctionnels plutôt que des composants de classe pour bénéficier des avantages des hooks de React.
      
      Contraintes Techniques pour React Router :
      
      Page par route: Chaque route doit être associée à une page spécifique.
      Page 404: Une page 404 doit être renvoyée si une route n'existe pas ou si une valeur présente dans l'URL ne correspond pas aux données disponibles.
      Logique du routeur en un seul fichier: La logique de gestion des routes doit être regroupée dans un seul fichier pour une meilleure organisation.
      Général :
      
      Absence d'erreurs ou de warnings: Le code final ne doit pas produire d'erreurs ou de warnings dans la console du navigateur, garantissant ainsi une application robuste et stable.`,
      thumbnail: "./Kasa.png",
    },
    {
      id: 4,
      title: "Web Scrapper",
      description: `Ce projet consiste en un script Python pour effectuer le web scraping d'un site web donné. L'objectif est de récupérer tous les liens présents sur une page spécifique du site, de les valider et de générer un rapport des liens invalides. Pour cela, nous utilisons les bibliothèques BeautifulSoup, requests, pandas, numpy et yagmail.
  
      Étape 1 : Initialisation
      
      Le script commence par définir l'URL cible à partir de laquelle nous voulons extraire les liens. Dans cet exemple, l'URL est "https://testing.com/fr/plan-du-site".
      Étape 2 : Web Scraper
      
      Nous utilisons BeautifulSoup pour analyser le contenu HTML de la page cible et extraire tous les liens (<a>) qu'elle contient. Ces liens sont stockés dans une liste appelée links.
      Étape 3 : Validation des liens
      
      Nous validons ensuite chaque lien récupéré en effectuant des requêtes HTTP vers chacun d'eux. Les liens valides sont stockés dans une liste appelée correct_links, tandis que les liens invalides sont enregistrés dans une autre liste appelée error_links. Les liens invalides peuvent être ceux qui génèrent des erreurs lorsqu'on tente d'y accéder (par exemple, 404 Not Found), ou des redirections non valides (par exemple, 301 ou 302).
      Étape 4 : Génération du rapport
      
      Les liens invalides sont enregistrés dans un fichier CSV appelé error-links.csv à l'aide de la bibliothèque numpy.
      Étape 5 : Envoi d'un rapport par e-mail
      
      Le script utilise yagmail pour envoyer un rapport par e-mail. Pour cela, une adresse e-mail et un mot de passe valides sont requis pour accéder au service SMTP. Le rapport envoyé par e-mail contient la liste des liens invalides récupérés à partir du fichier CSV.
      Ce web scraper est utile pour effectuer une vérification de la validité des liens sur une page web spécifique. Il peut être adapté et étendu pour d'autres cas d'utilisation similaires. Toutefois, veillez à respecter les conditions d'utilisation du site web que vous scrapez et évitez de surcharger le serveur avec des requêtes excessives.`,
      thumbnail: "./python-ws.png",
    },
  ];