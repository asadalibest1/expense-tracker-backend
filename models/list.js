const mongoose = require("mongoose");

module.exports = mongoose.model("list", {text: String, amount: Number});
