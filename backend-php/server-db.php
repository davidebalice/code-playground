<?php
/*
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log.txt');
*/

/*
$allowedOrigin = "https://code-playground.davidebalice.dev";

// Ottieni l'header 'Origin' dalla richiesta
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

// Imposta l'intestazione CORS solo se l'origine è autorizzata
if ($origin === $allowedOrigin) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Max-Age: 86400");
} else {
    // Se l'origine non è autorizzata, blocca la richiesta
    header("HTTP/1.1 403 Forbidden");
    echo json_encode(["success" => false, "error" => "Origine non autorizzata"]);
    exit();
}
*/

//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Max-Age: 86400");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); // No Content per le richieste OPTIONS
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Metodo non consentito
    echo json_encode(["success" => false, "error" => "Metodo non consentito"]);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!isset($data['query'])) {
    echo json_encode(["success" => false, "error" => "Nessuna query SQL fornita"]);
    exit();
}

$query = $data['query'];

/*
if (preg_match('/(DROP|DELETE|UPDATE|ALTER|TRUNCATE|INSERT|EXEC|CREATE)/i', $query)) {
    echo json_encode(["success" => false, "error" => "Query non consentita"]);
    exit();
}
*/

if (preg_match('/(DROP|DELETE|ALTER|TRUNCATE|EXEC|CREATE)/i', $query)) {
    echo json_encode(["success" => false, "error" => "Query non consentita"]);
    exit();
}

try {
    // Connessione al database (modifica con i tuoi parametri)
    
    
    
    
    $config = require 'config.php';

    // Connessione al database
    $pdo = new PDO(
        "mysql:host={$config['host']};dbname={$config['dbname']}",
        $config['username'],
        $config['password']
    );
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Esegui la query
    $stmt = $pdo->query($query);
    
    // Recupera i risultati
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode(["success" => true, "results" => $results]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "error" => "Errore nella connessione al database: " . $e->getMessage()]);
}
