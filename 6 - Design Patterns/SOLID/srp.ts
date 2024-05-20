class User {
  constructor(name: string, email: string) {}
}

// Ce n'est pas de la responsabilité de User de gérer l'authentification
class UserAuthentication {
  constructor(user: User) {}

  authenticate(password: string){
    // Do some stuff...
  } 
}


