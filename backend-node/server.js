// npm init -y
// npm install express cors body-parser vm2 mongoose nodemon
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { NodeVM } = require("vm2");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 8000;
const MONGO_URI = process.env.MONGO_URI;

const Product = require("./models/Product");
const User = require("./models/User");
const Order = require("./models/Order");

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connesso"))
  .catch((err) => console.error("❌ Errore connessione MongoDB:", err));

const blacklist = /process|fs|child_process|global|module|constructor/gi;

function isSafeCode(code) {
  return typeof code === "string" && !blacklist.test(code);
}

async function runCodeSafely(code) {
  let output = [];

  const vm = new NodeVM({
    console: "redirect",
    sandbox: {
      Product,
      User,
      Order,
    },
    timeout: 5000,
  });

  vm.on("console.log", (...args) => {
    output.push(args.join(" "));
  });

  try {
    await vm.run(
      `
      (async () => {
        try {
          // Log per verificare l'inizio dell'esecuzione
          console.log('Esecuzione del codice');
          ${code}  // Esegui il codice
        } catch (err) {
          // Log dell'errore se qualcosa va storto
          console.log('Error in user code:', err.message);
          console.log(err.stack); // Stampa lo stack per un debug più profondo
        }
      })();
    `,
      "vm.js"
    );

    return output.length > 0 ? output.join("\n") : "No output";
  } catch (err) {
    console.error("Error running the VM:", err.message);
    return "Error: " + err.message;
  }
}

async function runQuerySafely(code) {
  let logs = [];
  let result = null;

  try {
    const sandbox = {
      mongoose,
      User,
      Product,
      Order,
      console: {
        log: (...args) => {
          const formattedLogs = args.map((arg) =>
            typeof arg === "object"
              ? JSON.stringify(arg, null, 2).replace(/\n/g, "")
              : String(arg)
          );
          logs.push(...formattedLogs);
        },
      },
    };

    const asyncFunction = new Function(
      ...Object.keys(sandbox),
      `
        return (async () => {
          try {
            ${code}
          } catch (err) {
            console.log("Errore:", err.message);
          }
        })()
      `
    );

    result = await asyncFunction(...Object.values(sandbox));
  } catch (err) {
    logs.push("❌ Errore di esecuzione: " + err.message);
  }

  return { result, logs };
}

app.use(cors());
app.use(bodyParser.json());

/*
app.get("/seed", async (req, res) => {
  try {
    const newUser = new User({
      name: "Mario",
      surname: "Rossi",
      email: "mario@rossi.it",
      age: 32,
    });
    await newUser.save();
    res.send("User inserito");
  } catch (error) {
    res.status(500).send("Errore: " + error.message);
  }
});
*/
app.post("/execute", async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).send("Error: No code received");
  }

  const result = await runCodeSafely(code);
  res.send(result);
});

app.post("/query", async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Query not provided" });
  }

  if (!code) {
    return res.status(400).send("Error: No code received");
  }

  const result = await runQuerySafely(code);
  console.log(result);
  res.json(result);
});

app.listen(PORT, () =>
  console.log(`✅ Server run on http://localhost:${PORT}`)
);
