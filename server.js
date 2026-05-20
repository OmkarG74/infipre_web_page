require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contactDB";

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Connection Error:", err));

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model("Contact", ContactSchema);

app.post("/contact", async (req, res) => {

    try {

        await Contact.create(req.body);

        res.send("Message Saved");

    } catch (err) {

        console.log(err);

        res.status(500).send("Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});