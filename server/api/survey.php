<?php
header('Access-Control-Allow-Origin: https://pixelsandcookies.fr');

$path = "survey.json";
$file = file_get_contents($path);
$datas = json_decode($file,true);

$name = $_GET["name"];
$id = $_GET["id"] ?? null;

if(key_exists($name, $datas)){
    foreach($datas[$name]["options"] as $index => $option){
        if($option["id"] === $id){
            
            $datas[$name]["options"][$index]["count"] = $option["count"]+1;
            $datas[$name]["total"]++;
            $datas_to_update = json_encode($datas);
            file_put_contents($path, $datas_to_update);
        }
    }
}

echo json_encode($datas[$name]);
