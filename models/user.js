const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  passwordHash: String,
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
});

userSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
    delete returnedObj.passwordHash;
  },
});

module.exports = mongoose.model("User", userSchema);
