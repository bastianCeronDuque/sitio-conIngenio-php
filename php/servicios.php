<?php
header("content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
$url = "https://ciisa.coningenio.cl/v1/services/";
$headers = [
    "Authorization: Bearer ciisa"
];
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);
echo $response;
function obtenerServicios()
{
    $url = "https://ciisa.coningenio.cl/v1/services/";
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