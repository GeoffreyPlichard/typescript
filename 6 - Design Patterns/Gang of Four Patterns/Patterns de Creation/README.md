# Patterns de Création (Creational Design Patterns)

## Singleton

Le singleton est un pattern de création qui s'assure qu'une classe a seulement une instance car le but est que les données soient uniques et partagées partout.

## Prototype

Ce pattern permet de cloner des objets.
Il est utile quand la création d'une nouvelle instance est plus coûteuse en ressource que d'en copier une existante.
Il permet de copier un objet en créant un nouvel objet avec une référence différente (Deep Cloning).

## Builder

Ce pattern permet de créer des objets complexes grâce à une classe Builder qui est reponsable de la création d'un objet step by step, et une classe Director qui définie quelles parties doit contenir l'objet.
Le but est de séparation la création d'objets complexes de leur représentation.

## Factory

Le Factory Pattern fourni une interface pour créer des objets dans une super-classe, mais permet aux sous-classes de modifier le type d'objets qui seront créés.
Par exemple, une classe CarFactory qui produit plusieurs sortes de voitures grâce à une méthode qui permet de définir son type.
