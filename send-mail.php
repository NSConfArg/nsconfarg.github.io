<?php

//vars
$subject = 'Email Confirmacion Nuevo Asistente';
$to = 'mariano@zerously.com';

$from = 'nscfonfarg.com Website';

//data
$msg .= "EMAIL: "  .$_POST['email']    ."<br>\n";

//Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: <".$from. ">\r\n" ;
$headers .= "To: <" . $to . ">";


//send for each mail
var_dump(mail($to, $subject, $msg, $headers));

?>
