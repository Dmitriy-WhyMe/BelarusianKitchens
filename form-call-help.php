<?php

$to = "mebel@eva-crimea.ru";
$siteName = "Белорусские кухни";
$from = "info@eva-crimea.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Форма из блока: Поможем с внутренним наполением вашей кухни \nИмя: $name \nТелефон: $phone";

$pagetitle = "Форма сайта \"$siteName\"";

$headers = "";
$headers .= "From: $froms <$from> \r\n";
$headers .= "Reply-To:" . $from . "\r\n" ."X-Mailer: PHP/" . phpversion();
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=uft-8' . "\r\n";

mail($to,$pagetitle,$message,$headers);


//mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: <$name>");

?>