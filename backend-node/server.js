// npm init -y
// npm install express cors body-parser vm2 mongoose

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { VM } = require("vm2");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;
const MONGO_URI = "mongodb://localhost:27017/test_db";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connesso"))
  .catch((err) => console.error("❌ Errore connessione MongoDB:", err));

const blacklist =
  /require|import|process|fs|child_process|global|module|constructor/gi;

function isSafeCode(code) {
  return typeof code === "string" && !blacklist.test(code);
}

function runCodeSafely(code) {
  if (!isSafeCode(code)) {
    return "Error: code not allowed!";
  }

  try {
    let output = [];

    const vm = new VM({
      timeout: 1000,
      sandbox: {
        console: {
          log: (...args) => {
            output.push(args.join(" "));
          },
        },
      },
    });

    vm.run(code);

    return output.length > 0 ? output.join("\n") : "Nessun output";
  } catch (err) {
    return "Error: " + err.message;
  }
}

app.use(cors());
app.use(bodyParser.json());

app.post("/execute", (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).send("Error: No code received");
  }

  const result = runCodeSafely(code);
  res.send(result);
});

// Modello MongoDB per i test
const TestModel = mongoose.model(
  "Test",
  new mongoose.Schema({ name: String, age: Number })
);

// Endpoint per testare query NoSQL
app.post("/query", async (req, res) => {
  const { query } = req.body;

  try {
    if (!query) {
      return res.status(400).json({ error: "Nessuna query ricevuta" });
    }

    // Solo SELECT (find), nessuna scrittura permessa
    const safeQuery = query.replace(/insert|update|delete|remove/gi, "");

    const result = await eval(`TestModel.${safeQuery}`); // Esegue la query
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () =>
  console.log(`✅ Server run on http://localhost:${PORT}`)
);
