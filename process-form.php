<?php
include 'phpqrcode/qrlib.php';
$result = [
  'success' => false,
  // 'QRCode' => $file,
  ];
// $name = $_POST['name'];
$_POST = json_decode(file_get_contents('php://input'), true);
$data = $_POST['ficheiro'];
$nome = $_POST['nome'];
list($type, $data) = explode(';', $data);
list(, $data)      = explode(',', $data);
$data = base64_decode($data);

$file_name = uniqid().".png";

file_put_contents('files/'.$file_name, $data);

//echo "<center><img src=\"files\\".$file_name."\">";


$text = "https://".$_SERVER['HTTP_HOST'] . "/files/".$file_name ;
// $path variable store the location where to 
// store image and $file creates directory name
// of the QR code file by using 'uniqid'
// uniqid creates unique id based on microtime
$path = 'qrcodes/';
$file = $path.uniqid().".png";
  
// $ecc stores error correction capability('L')
$ecc = 'L';
$pixel_Size = 10;
$frame_Size = 10;
  
// Generates QR Code and Stores it in directory given
QRcode::png($text, $file, $ecc, $pixel_Size, $frame_Size);
  
// Displaying the stored QR code from directory
//$data['QRCode'] = $file;
$text = "https://".$_SERVER['HTTP_HOST'] . "/".$file ;
$result['success'] = true;
$result['message']= $text;

header('Content-type: application/json');

//temporizador
//redirecionar para index.php e este fazer tudo de novo

//var_dump($result);
echo json_encode($result);

?>