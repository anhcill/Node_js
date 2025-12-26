const mongoose = require("mongoose");
const connectString = "mongodb://localhost:27017/database_book";
// const { countConnection } = require("../helpers/checkconnections");
const { checkOverload } = require("../helpers/checkconnections");
// tao class ket noi
class Database {
  // ham khoi tao khi tao object tu class
  constructor() {
    this.connect();
  }
  // connect
  connect() {
    mongoose
      .connect(connectString)
      .then((_) => {
        console.log(`connect success `);
        checkOverload();
      })
      .catch((err) => {
        console.log("error connect");
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
// ham ket noi
const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
