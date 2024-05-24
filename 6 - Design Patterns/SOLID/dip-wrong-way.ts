// DIP wrong way

class MySqlDatabase {
  save(data: string): void {}
}

class HighLevelModule {
  constructor(private database: MySqlDatabase) {}

  execute(data: string) {
    // Ici, le high level module, dépend du low level module MySqlDatabase
    // Si on voulait passer de MySql à MongoDB, il faudrait modifier le high level module
    this.database.save(data);
  }
}