const mongoose = require("mongoose");

let instance = null;
class Database {
  constructor() {
    if (!instance) {
      this.mongoConnection = null;
      instance = this;
    }

    return instance;
  }

  async connect(options) {
    try {
      console.log("MongoDB Connecting...");
      let db = await mongoose.connect(options.CONNECTION_STRING); // MongoDB bağlantısı

      this.mongoConnection = db;
      console.log("MongoDB Connected");
      console.log("Localhost URL -> http://localhost:3000"); // Uygulama adresi
      console.log("MongoDB URL -> " + options.CONNECTION_STRING); // MongoDB bağlantı adresi
    } catch (error) {
      console.error("MongoDB Connection Error", error);
      process.exit(1); // Uygulamayı sonlandırır
    }
  }
}

module.exports = Database;
