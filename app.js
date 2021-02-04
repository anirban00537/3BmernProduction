import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import content from "./routes/content.js";
import intro from "./routes/intro.js";
import stage from "./routes/stage.js";
import details from "./routes/details.js";
import service from "./routes/service.js";
import portfolio from "./routes/portfolio.js";
import team from "./routes/team.js";
import about from "./routes/about.js";
import contact from "./routes/contact.js";
import customercontact from "./routes/customerContact.js";
import auth from "./routes/auth.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());
app.use(express.static("images"));

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
const CONNECTION_URL =
  "mongodb+srv://anirban00537:anirban00537@cluster0.teg4f.mongodb.net/3bmern?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(PORT, () => {
  console.log("Server running successfully on localhost:" + PORT);
});

if (process.env.NODE_ENV === "production") {
  // production mode
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/build/index.html"));
  });
} else {
  // development mode
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
  });
}
mongoose.set("useFindAndModify", false);
