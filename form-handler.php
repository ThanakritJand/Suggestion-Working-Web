<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message= $_POST['message'];

$email_form = 'info@yourwebsite.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                    "User Message: $message.\n";
$to = 'thanakrit.jand@gmail.com';

$headers = "From $email_form \r\n";
$headers = "reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("location: contact.html");
?>