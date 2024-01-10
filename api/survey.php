<?php
header('Access-Control-Allow-Origin: https://pixelsandcookies.fr');

$path = "/data/survey.json";
$file = file_get_contents($path);
$datas = json_decode($file,true);

$name = $_GET["name"];
$id = $_GET["id"];
if(key_exists($name, $datas) && key_exists($id, $datas[$name]["items"])){
    $datas[$name]["items"][$id]++;
    $datas[$name]["total"]++;
    $datas_to_update = json_encode($datas);
    file_put_contents($path, $datas_to_update);
}

echo json_encode($datas[$name]);

?>