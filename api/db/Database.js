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
      let db = await mongoose.connect(options.CONNECTION_STRING);

      this.mongoConnection = db;
      console.log("MongoDB Connected");
    } catch (error) {
      console.error("MongoDB Connection Error", error);
      process.exit(1); // Uygulamayı sonlandırır
    }
  }
}

module.exports = Database;
