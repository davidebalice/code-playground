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
    http_response_code(204);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Metodo non consentito"]);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!isset($data['code'])) {
    echo json_encode(["success" => false, "error" => "Nessun codice fornito"]);
    exit();
}

$code = $data['code'];

if (preg_match('/(exec|shell_exec|system|passthru|proc_open|popen|curl_exec|curl_multi_exec|file_get_contents|fopen|fwrite|unlink|delete|DROP|ALTER|CREATE|INSERT|UPDATE|DELETE)/i', $code)) {
    echo json_encode(["success" => false, "error" => "Codice non consentito"]);
    exit();
}

ob_start();
eval($code);
$output = ob_get_clean();

echo $output;

//echo json_encode(["success" => true, "output" => $output]);
?>
