<?php

$to = "mebel@eva-crimea.ru";
$siteName = "Белорусские кухни";
$from = "info@eva-crimea.ru";

$phone = trim($_POST["phone"]);
$file = trim($_POST["attachment-file"]);
$message = "Форма из блока: Поможем с внутренним наполением вашей кухни \nНомер: $phone \nФайл: $file";

$headers = "";
$headers .= "From: $from <$from> \r\n";
$headers .= "Reply-To:" . $from . "\r\n" ."X-Mailer: PHP/" . phpversion();
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=uft-8' . "\r\n";

$pagetitle = "Форма сайта \"$siteName\"";
mail($to,$pagetitle,$message,$headers);

?>
