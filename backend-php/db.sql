
CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`) VALUES
(3, 'Electronics'),
(4, 'Books'),
(5, 'Clothing'),
(6, 'Home'),
(7, 'Sports');

-- --------------------------------------------------------

--
-- Struttura della tabella `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `order_date`) VALUES
(1, 1, '2025-02-01 19:27:30'),
(2, 2, '2025-02-01 19:27:30'),
(3, 1, '2025-02-01 19:27:30'),
(4, 3, '2025-02-01 19:27:30'),
(5, 4, '2025-02-01 19:27:30');

-- --------------------------------------------------------

--
-- Struttura della tabella `order_items`
--

CREATE TABLE `order_items` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `order_items`
--

INSERT INTO `order_items` (`order_item_id`, `order_id`, `product_id`, `quantity`) VALUES
(1, 1, 1, 1),
(2, 1, 6, 2),
(3, 2, 2, 1),
(4, 2, 9, 1),
(5, 3, 4, 1),
(6, 3, 5, 1),
(7, 4, 10, 2),
(8, 4, 7, 1),
(9, 5, 8, 1),
(10, 5, 3, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `description`, `price`, `category_id`) VALUES
(1, 'Smartphone', 'Smartphone con display 6.1 pollici, fotocamera 12MP', '699.99', 1),
(2, 'Laptop', 'Laptop leggero e performante per lavoro e gioco', '1199.00', 1),
(3, 'E-Reader', 'Lettore di ebook con schermo e-ink', '129.99', 1),
(4, 'Romanzo \"Il mistero\"', 'Un avvincente romanzo giallo', '19.99', 2),
(5, 'Manuale di programmazione', 'Guida completa per imparare a programmare in JavaScript', '29.99', 2),
(6, 'T-shirt', 'Maglietta in cotone, taglia M', '14.99', 3),
(7, 'Jeans', 'Jeans dal taglio classico', '39.99', 3),
(8, 'Lampada da tavolo', 'Lampada LED moderna per ambienti interni', '49.99', 4),
(9, 'Set di pentole', 'Pentole antiaderenti per cucina', '89.99', 4),
(10, 'Scarpe da corsa', 'Scarpe leggere per attività sportive', '59.99', 5);

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password_hash`, `created_at`) VALUES
(1, 'mariorossi', 'mario@rossi.it', '3458ug1h458yb45v8y45v9754b7v', '2025-02-01 19:27:30'),
(2, 'luigiverdi', 'luigi@verdi.com', 'b5ytr209k4gb809k45t2gk89054g', '2025-02-01 19:27:30'),
(3, 'giuseppeneri', 'giuseppe@neri.it', '924nv82u45vn5480vb408yb45v8', '2025-02-01 19:27:30'),
(4, 'marcobianchi', 'marco@bianchi.com', '19345unjvf48uvfn4280vub240v8yb', '2025-02-01 19:27:30'),
(5, 'mariabrambilla', 'maria@brambilla.com', '1cn013u9cnb13408ricb380cib30c8', '2025-02-01 19:27:30');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indici per le tabelle `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indici per le tabelle `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_item_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indici per le tabelle `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT per la tabella `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `order_items`
--
ALTER TABLE `order_items`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;


