interface Exercise {
  id: string;
  title: string;
  description: string;
  code: string;
}

export const exercises: Exercise[] = [
  {
    id: "1",
    title: "Ottenere tutti gli utenti",
    description: "Recupera tutti gli utenti dalla collezione MongoDB.",
    code: `const users = await User.find();\n  console.log(users);`,
  },

  {
    id: "2",
    title: "Filtrare utenti per età superiore a 25",
    description: "Seleziona gli utenti con un'età superiore a 25 anni.",
    code: `const users = await User.find({ age: { $gt: 25 } });
      console.log(users);`,
  },
  {
    id: "3",
    title: "Cercare un utente per nome",
    description: "Trova un utente specifico cercandolo per nome.",
    code: `async function getUserByName(name) {\n  const user = await User.findOne({ name });\n  console.log(user);\n}\n\ngetUserByName('Alice');`,
  },
  {
    id: "4",
    title: "Selezionare solo alcuni campi",
    description: "Recupera solo i campi nome ed età degli utenti.",
    code: `async function getUsersWithSelectedFields() {\n  const users = await User.find().select('name age');\n  console.log(users);\n}\n\ngetUsersWithSelectedFields();`,
  },
  {
    id: "5",
    title: "Ordinare utenti per età",
    description: "Recupera gli utenti ordinandoli per età in ordine crescente.",
    code: `async function getUsersSortedByAge() {\n  const users = await User.find().sort({ age: 1 });\n  console.log(users);\n}\n\ngetUsersSortedByAge();`,
  },
  {
    id: "6",
    title: "Conteggio utenti",
    description: "Conta il numero totale di utenti nel database.",
    code: `async function countUsers() {\n  const count = await User.countDocuments();\n  console.log('Numero totale di utenti:', count);\n}\n\ncountUsers();`,
  },
];
