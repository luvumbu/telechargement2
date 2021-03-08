<?php 
header("Access-Control-Allow-Origin: *");

$url=$_POST["src"] ; 


$ramdom = rand(5, 15999999999);
 
// Le chemin de sauvegarde
$path = 'images/';
// On coupe le chemin
$exp = explode('/',$url);
// On recup l'adresse du serveur
$serv = $exp[0].'//'.$exp[2]; 
// On recup le nom du fichier
$name = $ramdom.".jpg";
// On genere le contexte (pour contourner les protections anti-leech)
$xcontext = stream_context_create(array("http"=>array("header"=>"Referer: ".$serv."\r\n")));
// On tente de recuperer l'image
$content = file_get_contents($url,false,$xcontext);
if ($content === false) {
	echo "\nImpossible de récuperer le fichier.";
	exit(1);
}
// Sinon, si c'est bon, on sauvegarde le fichier
$test = file_put_contents($path.'/'.$name,$content);
if ($test === false) {
	echo "\nImpossible de sauvegarder le fichier.";
	exit(1);
}
// Tout est OK
echo "\nSauvegarde effectuée avec succés."; 
?>