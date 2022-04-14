<?php

$to = "mebel@eva-crimea.ru";
$siteName = "Белорусские кухни";
$from = "info@eva-crimea.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$date = trim($_POST["date"]);
$message = "Форма из блока: Пригласите дизайнера \nИмя: $name \nТелефон: $phone \nДата и время: $date";

$pagetitle = "Форма сайта \"$siteName\"";

$headers = "";
$headers .= "From: $from <$from> \r\n";
$headers .= "Reply-To:" . $from . "\r\n" ."X-Mailer: PHP/" . phpversion();
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=uft-8' . "\r\n";

mail($to,$pagetitle,$message,$headers);

?>
