# Expliquer

Les Design Patterns : sont des solutions réutilisable pour résoudre des problèmes que l'on rencontre tous les jours dans la programmation. Ces patterns sont des comme des templates que l'on peut appliquer dans la vie de tous les jours. 
Les patrons de conception sont une boîte à outils de solutions fiables et éprouvées utilisées en réponse à des problèmes classiques de la conception de logiciels.

Les Patterns d'architecure : Des modèles (architectures-types) d'architecturalisation d'un logiciel, d'une app. expl : Architecture client/serveur,  Architecture en couches, Architecture orientée services, Architecture Modèle-Vue-Contrôleur, Architecture Modèle-Vue-Présentation etc

**Pourquoi utiliser un design pattern?**

- Pour **accélérer le processus de développement** en fournissant des paradigmes de développement éprouvés.
- Pour **anticiper** des problématiques qui peuvent ne devenir visibles que plus tard dans la mise en œuvre.
- Pour améliorer la **lisibilité** du code en fournissant une standardisation.
- Pourquoi utiliser des patterns d’architecture

    En informatique, un patron d'architecture est une solution générale et réutilisable à un problème d'architecture récurrent. Les patrons d'architecture sont semblables aux patrons de conception mais ont une portée plus large. Ils servent de modèle de référence et de source d'inspiration lors de la conception de l'architecture d'un système ou d'un logiciel informatique, pour décomposer celui-ci en éléments plus simples.

    On utilise des patterns d'architecture pour décider de l'architecture de notre application en fonction de ce que vont veut faire, permet de travailler à plusieurs

    Le but ultime de l’architecture logicielle c’est de faciliter le développement, l’évolution, le déploiement et la maintenance d’un système.

- Dans quel cas utiliser MVC

    L'utilisateur peut passer par la vue et/ou le controller

- Dans quel cas utiliser MVP

    C'est koi : Dans le patron MVP, le contrôleur est remplacé par une présentation. La présentation est créée par la vue et lui est associée par une interface. Les actions utilisateur déclenchent des événements sur la vue, et ces événements sont propagés à la présentation en utilisant l'interface.  Pas de connexion entre la vue et le modèle. Utilisateur obligé d'interagir avec la vue
    
- Dans quel cas utiliser MVVM
    passeplat mais l'interet viewmodel peut interagir avec plusieurs view, 1 seul view-model pour plursieurs vues.

- **Model** (Modèle en français) : le modèle contient les données. Généralement, ces données proviennent d’une base de données ou d’un service externe comme un API.
- **View** (Vue en français) : la vue correspond à ce qui est affiché (la page web dans notre cas). La vue contient les différents composants graphiques (boutons, liens, listes) ainsi que le texte.
- **ViewModel** (Vue-Modèle en français) : ce composant fait le lien entre le modèle et la vue. Il s’occupe de gérer les liaisons de données et les éventuelles conversions. C’est ici qu’intervient le binding.

Le modèle MVVM prend en charge la liaison de données(data binding) bidirectionnelle entre View et ViewModel. Cela permet la propagation automatique des modifications, à l’intérieur de l’état de ViewModel vers la vue. Généralement, le ViewModel utilise le pattern observer pour informer les modifications du ViewModel au modèle.
 
- Modeles de creation

    Concernent la manière d'instanciser et de configurer des objets et des classes. Ils optimisent la réutilisation et la fléxibilité. 

- Modeles de structuration

    Ils se concentrent sur l’organisation des relations entre tous les composants d’un système. Les design patterns structurels optimisent la simplicité et l’efficacité de la communication dans un système.

- Modele de comportement

    Ils se concentrent sur la répartition des responsabilités entre les composants d’un système. Les design patterns comportementaux optimisent la responsabilité des acteurs dans un système. (Le partage des responsabilités type modèle mvc)
