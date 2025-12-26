const mongoose = require("mongoose");
const connectString = "mongodb://localhost:27012/shopDev";
mongoose
  .connect(connectString)
  .then((_) => console.log("connect succes"))
  .catch((err) => console.log("error connect"));
// dev
if (1 == 0) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}
module.exports = mongoose;
