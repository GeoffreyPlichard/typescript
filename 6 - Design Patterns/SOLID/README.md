# SOLID Design Principles

Les principes de conception SOLID ont été créé par Robert C. Martin (Uncle Bob). Il est aussi l'auteur des livres Clean Code et Clean Architecture.

SOLID vient de l'association de plusieurs principes:

- SRP: Single Responsability Principle

- OCP: Open-Closed Principle

- LSP: Liskov Subsitution Principle

- ISP: Interface Segregation Principle

- DIP: Dependency Inversion Principle

Ces principes trouvent leur origine dans les Design Patterns du Gang of Four.

## SRP: Single Responsability

Une classe doit avoir une seule responsabilité, un seul job.
Par exemple une classe User ne devrait pas avoir une méthode userAuthentication(). Il faudrait créer une nouvelle classe UserAuthentication.

## OCP: Open Close

Une classe doit être ouverte aux extensions mais fermée aux modifications.
A partir du moment ou une classe a été reviewed et testé, elle ne devrait plus bouger. Il faudrait utiliser l'héritage pour "extend" le comportement original.

## Liskov Substitution

Si une classe S hérite des propriétés d'une classe T, on devrait pouvoir utiliser la classe S au lieu de la classe T sans altérer les propriétés du programme.

## Interface Segragation

Eviter d'ajouter des fonctionnalités à une interface existante. A la place, créer une nouvelle interface.
Toujours se demander si cette fonctionnalité appartient vraiment à cette interface.
Celà permet d'être plus flexible dans la création de classes.
