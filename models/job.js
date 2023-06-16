const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => console.log("connected to database"));

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    compensation: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

jobSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Job", jobSchema);
