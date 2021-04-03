var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  admin: Boolean,
  company_name: String,
  domains: [Object],
  token: String,
});
mongoose.model("User", UserSchema);

module.exports = mongoose.model("User");
