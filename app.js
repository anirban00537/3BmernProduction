const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const content = require("./routes/content.js");
const intro = require("./routes/intro.js");
const stage = require("./routes/stage.js");
const details = require("./routes/details.js");
const service = require("./routes/service.js");
const portfolio = require("./routes/portfolio.js");
const team = require("./routes/team.js");
const about = require("./routes/about.js");
const contact = require("./routes/contact.js");
const customercontact = require("./routes/customerContact.js");
const auth = require("./routes/auth.js");
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());
app.use(express.static("images"));

const CONNECTION_URL =
  "mongodb+srv://brainboxbd:brainboxbd@cluster0.7k23y.mongodb.net/3bmern?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
    app.use("/tagline", content);
    app.use("/intro", intro);
    app.use("/stage", stage);
    app.use("/details", details);
    app.use("/service", service);
    app.use("/portfolio", portfolio);
    app.use("/team", team);
    app.use("/about", about);
    app.use("/contact", contact);
    app.use("/customercontact", customercontact);
    app.use("/", auth);
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(PORT, () => {
  console.log("Server running successfully on localhost:" + PORT);
});

// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});
mongoose.set("useFindAndModify", false);

//heroku b1r2a3i4n=
