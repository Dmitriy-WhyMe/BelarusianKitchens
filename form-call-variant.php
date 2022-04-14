<?php

$to = "mebel@eva-crimea.ru";
$siteName = "Белорусские кухни";
$from = "info@eva-crimea.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Форма из блока: Получите 3 варианта цены и 3D макет Белорусские Кухни \nИмя: $name \nТелефон: $phone";

$pagetitle = "Форма сайта \"$siteName\"";


$headers = "";
$headers .= "From: $from <$from> \r\n";
$headers .= "Reply-To:" . $from . "\r\n" ."X-Mailer: PHP/" . phpversion();
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=uft-8' . "\r\n";

mail($to,$pagetitle,$message,$headers);

?>