interface Exercise {
  id: string;
  title: string;
  description: string;
  code: string;
}

export const exercises: Exercise[] = [
  {
    id: "1",
    title: "Visualizza Ordini e Utenti",
    description: "Mostra gli ordini insieme ai dettagli degli utenti.",
    code: `SELECT u.user_id, u.username, o.order_id, o.order_date
  FROM users u
  JOIN orders o ON u.user_id = o.user_id;`,
  },
  {
    id: "2",
    title: "Dettagli Ordini Completi",
    description:
      "Mostra l'ordine, l'utente e i dettagli dei prodotti ordinati.",
    code: `SELECT o.order_id, o.order_date, u.username, p.product_name, p.price, oi.quantity
  FROM orders o
  JOIN users u ON o.user_id = u.user_id
  JOIN order_items oi ON o.order_id = oi.order_id
  JOIN products p ON oi.product_id = p.product_id;`,
  },
  {
    id: "3",
    title: "Prodotti e Categorie",
    description: "Visualizza i prodotti con le relative categorie.",
    code: `SELECT p.product_id, p.product_name, p.price, c.category_name
  FROM products p
  JOIN categories c ON p.category_id = c.category_id;`,
  },
  {
    id: "4",
    title: "Valore Totale Ordine",
    description: "Calcola il totale per ogni ordine.",
    code: `SELECT o.order_id, SUM(p.price * oi.quantity) AS total_order_value
  FROM orders o
  JOIN order_items oi ON o.order_id = oi.order_id
  JOIN products p ON oi.product_id = p.product_id
  GROUP BY o.order_id;`,
  },
  {
    id: "5",
    title: "Dettagli Ordini Completi con Categoria",
    description:
      "Panoramica completa dell'ordine unendo utenti, prodotti e categorie.",
    code: `SELECT u.username, o.order_id, o.order_date, p.product_name, c.category_name, oi.quantity, p.price, (p.price * oi.quantity) AS subtotal
  FROM users u
  JOIN orders o ON u.user_id = o.user_id
  JOIN order_items oi ON o.order_id = oi.order_id
  JOIN products p ON oi.product_id = p.product_id
  JOIN categories c ON p.category_id = c.category_id;`,
  },
  {
    id: "6",
    title: "Top-selling Products",
    description: "Elenca i 5 prodotti con le vendite maggiori.",
    code: `SELECT
    p.product_id,
    p.product_name,
    SUM(oi.quantity) AS total_quantity_sold,
    SUM(oi.quantity * p.price) AS total_sales
  FROM products p
  JOIN order_items oi ON p.product_id = oi.product_id
  GROUP BY p.product_id, p.product_name
  ORDER BY total_sales DESC
  LIMIT 5;`,
  },
  {
    id: "7",
    title: "Ranking Utenti per Spesa Totale",
    description:
      "Assegna un ranking agli utenti in base al totale speso negli ordini.",
    code: `SELECT
      u.user_id,
      u.username,
      SUM(p.price * oi.quantity) AS total_spent,
      RANK() OVER (ORDER BY SUM(p.price * oi.quantity) DESC) AS user_rank
  FROM users u
  JOIN orders o ON u.user_id = o.user_id
  JOIN order_items oi ON o.order_id = oi.order_id
  JOIN products p ON oi.product_id = p.product_id
  GROUP BY u.user_id, u.username;`,
  },
  {
    id: "8",
    title: "Performance per Categoria",
    description:
      "Mostra il numero di prodotti, unità vendute, prezzo medio e fatturato per categoria.",
    code: `SELECT
    c.category_id,
    c.category_name,
    COUNT(DISTINCT p.product_id) AS num_products,
    SUM(oi.quantity) AS total_units_sold,
    AVG(p.price) AS avg_price,
    SUM(oi.quantity * p.price) AS total_revenue
  FROM categories c
  JOIN products p ON c.category_id = p.category_id
  JOIN order_items oi ON p.product_id = oi.product_id
  GROUP BY c.category_id, c.category_name;`,
  },
  {
    id: "9",
    title: "Prodotti Non Venduti",
    description: "Elenca i prodotti che non sono mai stati venduti.",
    code: `SELECT
    p.product_id,
    p.product_name
  FROM products p
  WHERE NOT EXISTS (
      SELECT 1
      FROM order_items oi
      WHERE oi.product_id = p.product_id
  );`,
  },
];
