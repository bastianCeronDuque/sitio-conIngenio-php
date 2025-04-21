<?php
header("content-type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Permissions-Policy: interest-cohort=()");

$url = "https://ciisa.coningenio.cl/v1/services/";
$headers = [
    "Authorization: Bearer ciisa"
];
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
if ($http_code !== 200) {
    http_response_code($http_code);
    echo json_encode(["error" => "No autorizado o problema con la API externa"]);
    exit;
}else {
    http_response_code($http_code);
}
echo $response;
function obtenerServicios()
{
    $url = "http://localhost/eva-1/sitio-conIngenio-php/servicios.php";
    $headers = [
        "Authorization: Bearer ciisa"
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $respuesta = curl_exec($ch);
    curl_close($ch);

    return json_decode($respuesta, true);
}
?>