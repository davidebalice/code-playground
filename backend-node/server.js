// npm init -y
// npm install express cors body-parser vm2
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { VM } = require("vm2");

const app = express();
const PORT = 8000;

const blacklist =
  /require|import|process|fs|child_process|global|module|constructor/gi;

function isSafeCode(code) {
  return typeof code === "string" && !blacklist.test(code);
}

function runCodeSafely(code) {
  if (!isSafeCode(code)) {
    return "Errore: codice non permesso!";
  }

  try {
    const vm = new VM({
      timeout: 1000,
      sandbox: {},
    });

    return vm.run(code);
  } catch (err) {
    return "Error execute: " + err.message;
  }
}

app.use(cors());
app.use(bodyParser.json());

app.post("/execute", (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Nessun codice ricevuto" });
  }

  const result = runCodeSafely(code);
  res.json({ output: result });
});

app.listen(PORT, () =>
  console.log(`✅ Server run on http://localhost:${PORT}`)
);

/*
import express from "express";
import cors from "cors";
import { exec } from "child_process";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/run", (req, res) => {
  const { code } = req.body;

  // Creiamo uno script temporaneo ed eseguiamolo
  exec(`node -e "${code.replace(/"/g, '\\"')}"`, (error, stdout, stderr) => {
    if (error) {
      res.json({ output: stderr || "Errore durante l'esecuzione." });
    } else {
      res.json({ output: stdout });
    }
  });
});

app.listen(5000, () => console.log("Server avviato su http://localhost:5000"));

*/
