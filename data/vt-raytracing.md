# Le Ray tracing et le Rendu en Temps Réel

## Le Ray tracing, dans le contexte de l’infographie, est une technique de rendu graphique permettant de calculer dynamiquement le chemin de la lumière afin d’obtenir un éclairage réaliste dans une scène 3D.

### Avant de plonger dans les détails, voici quelques définitions :

**Ray tracing :** par définition, le Ray tracing (ou "Lancer de rayon") consiste à tirer un trait depuis un objet vers la scène 3D dans l'optique d'intéragir avec tout autre objet touchant ou intersectant ce trait. Généralement, on tire le trait *depuis* la caméra (le centre de l’écran) *vers* la scène en 3D pour ensuite exécuter diverses actions ou opérations avec les données récupérées en fonction des besoins de l'utilisateur. Cette méthode existe également en 2D mais nous n'aborderons pas le sujet ici.
Typiquement, on peut se servir du rayon pour calculer la distance relative entre la caméra et l'objet touché ou encore récupérer des informations sur ce dernier. Il s'agit là de simples exemples communs en programmation, mais il existe une infinité d'utilité au ray tracing.

Graphiquement, on se sert de ces rayons pour simuler le chemin inverse d'un photon jusqu’à sa source de lumière à partir de la position de l’impact du ray. Si le rayon traverse un objet entre l’impact et la source de lumière, il sera considéré comme un "shadow ray" ou "rayon ombre", et à l’inverse s’il atteint directement sa source lumineuse, le rayon sera un "view ray" ou "rayon vue". Cette techniquement permet de plus fidèlement calculer le rendu des zones d'ombre et des zones réfléchissantes.

**Path tracing :** le path tracing est une variante du ray tracing consistant à résoudre une équation de rendu pour déterminer la couleur des pixels de l’écran. Plusieurs rayons sont tirés aléatoirement depuis la caméra jusqu’à atteindre une surface et rebondir n fois jusqu’à ce que le rayon "tombe à court d’énergie", touche une surface noire ou une source lumineuse (n est un nombre entier arbitrairement défini, tel que n=8).
Contrairement au ray tracing qui dicte la couleur du pixel à l’écran selon la surface d’impact du ray, le path tracing construit l’image au fur et à mesure des impacts des rayons, résultant en une image avec un fort grain en début de calcul qui devient de plus en plus net au fil du temps. 

---

Tirer des centaines voire milliers de rayons chaque frame est un procédé coûteux en puissance de calcul. Le temps n’est pas un problème pour des logiciels de création 3D comme Maya ou Blender car il s’agit là de scènes fixes dont la position des objets a été prédéterminée à l’avance pour chaque frame. La technique est alors impossible à implémenter dans les jeux vidéos qui sont de nature dynamiques, où la fluidité du jeu doit primer sur la qualité des graphismes.
Cependant, il existe une solution simple à ce problème : on peut limiter le nombre de rays tirés à chaque frame et approximer le résultat en fonction des données récoltées, couplé à diverses optimisations pour adapter au mieux le problème.
La précision et la qualité de l’éclairage s’en retrouve diminuée mais cette option offre généralement un bon compromis entre réalisme et confort. Il faut tout de même une bonne carte graphique pour traiter l’énorme quantité de calculs à effectuer.
