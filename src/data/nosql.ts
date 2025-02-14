import { v4 as uuidv4 } from "uuid";

interface Exercise {
  id: string;
  title: string;
  description: string;
  code: string;
  executable: boolean;
}

export const exercises: Exercise[] = [
  {
    id: uuidv4(),
    title: "Ottenere tutti gli utenti",
    executable: true,
    description: "Recupera tutti gli utenti dalla collezione MongoDB.",
    code: `const users = await User.find();
    console.log(users);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Filtrare utenti per età superiore a 35",
    description: "Seleziona gli utenti con un'età superiore a 35 anni.",
    code: `
const users = await User.find({ age: { $gt: 35 } });
console.log(users);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Cercare un utente per nome",
    description: "Trova utenti per nome.",
    code: `
const user = await User.find({ name: "Mario" });
console.log(user);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Selezionare solo alcuni campi",
    description: "Recupera solo i campi nome ed età degli utenti.",
    code: `
const users = await User.find().select('name age');
console.log(users);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Ordinare utenti per età",
    description: "Recupera gli utenti ordinandoli per età in ordine crescente.",
    code: `const users = await User.find().sort({ age: 1 });
console.log(users);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Conteggio utenti",
    description: "Conta il numero totale di utenti nel database.",
    code: `const count = await User.countDocuments();
console.log('Numero totale di utenti:', count);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Filtrare utenti per città",
    description: "Recupera gli utenti che risiedono in una specifica città.",
    code: `
const users = await User.find({ city: "Roma" });
console.log(users);`,
  },

  {
    id: uuidv4(),
    executable: true,
    title: "Trova utenti che hanno più di un certo numero di amici",
    description: "Trova gli utenti che hanno più di 5 amici.",
    code: `
const users = await User.find({ friends: { $size: { $gt: 5 } } });
console.log(users);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Trova utenti con almeno un interesse in comune",
    description: "Trova utenti che condividono almeno un interesse.",
    code: `
const users = await User.find({ interests: { $in: ["calcio"] } });
console.log(users);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Paginazione dei risultati",
    description: "Recupera gli utenti con paginazione.",
    code: `
const page = 1;  // pagina desiderata
const limit = 10; // numero di risultati per pagina
const users = await User.find()
  .skip((page - 1) * limit)
  .limit(limit);
console.log(users);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Trova utenti con un campo di tipo array",
    description: "Trova utenti che hanno un certo valore nel campo 'hobbies'.",
    code: `
const users = await User.find({ hobbies: "fotografia" });
console.log(users);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Operazioni con array",
    description: "Aggiungi un nuovo hobby a un utente.",
    code: `
await User.updateOne(
  { name: "Anna" },
  { $push: { hobbies: "lettura" } }
);
console.log("Hobby aggiunto");`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Trova utenti con età tra due valori",
    description: "Trova utenti che hanno un'età tra 18 e 30 anni.",
    code: `
const users = await User.find({ age: { $gte: 18, $lte: 30 } });
console.log(users);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Filtrare utenti con nome che inizia con una lettera specifica",
    description: "Trova utenti il cui nome inizia con la lettera 'A'.",
    code: `
const users = await User.find({ name: { $regex: '^A' } });
console.log(users);`,
  },
  {
    id: uuidv4(),
    executable: true,
    title: "Trova utenti usando un intervallo di date",
    description: "Trova utenti che si sono registrati tra due date.",
    code: `
const users = await User.find({
  registrationDate: { $gte: new Date('2023-01-01'), $lte: new Date('2023-12-31') }
});
console.log(users);`,
  },

  {
    id: uuidv4(),
    executable: false,
    title: "Aggiungere un nuovo utente",
    description: "Aggiungi un nuovo utente alla collezione MongoDB.",
    code: `
const newUser = new User({
  name: "Luigi",
  age: 30,
  city: "Milano"
});

await newUser.save();
console.log("Utente aggiunto:", newUser);`,
  },

  {
    id: uuidv4(),
    executable: false,
    title: "Aggiornare l'età di un utente",
    description: "Aggiorna l'età di un utente esistente.",
    code: `
await User.updateOne({ name: "Mario" }, { $set: { age: 40 } });
console.log("Età aggiornata");`,
  },

  {
    id: uuidv4(),
    executable: false,
    title: "Rimuovere un utente",
    description: "Rimuovi un utente dalla collezione MongoDB.",
    code: `
await User.deleteOne({ name: "Luigi" });
console.log("Utente rimosso");`,
  },

  {
    id: uuidv4(),
    executable: false,
    title: "Operazioni con array",
    description: "Aggiungi un nuovo hobby a un utente.",
    code: `
await User.updateOne(
  { name: "Anna" },
  { $push: { hobbies: "lettura" } }
);
console.log("Hobby aggiunto");`,
  },

  {
    id: uuidv4(),
    executable: false,
    title: "Aggiornare più utenti alla volta",
    description:
      "Aggiorna più utenti alla volta, ad esempio per cambiare la città.",
    code: `
await User.updateMany({ city: "Roma" }, { $set: { city: "Napoli" } });
console.log("Città aggiornata per più utenti");`,
  },

  {
    id: uuidv4(),
    executable: false,
    title: "Rimuovere più utenti",
    description: "Rimuovi utenti in base a una condizione.",
    code: `
await User.deleteMany({ age: { $lt: 18 } });
console.log("Utenti minorenni rimossi");`,
  },
];
