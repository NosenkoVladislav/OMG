<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
    $nameOrMail = $_POST['nameOrMail'];
    $msg = $_POST['message'];

    //Server settings
    $mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                                   // Enable SMTP authentication
    $mail->Username = 'eclipsik69@gmail.com';                     // SMTP username
    $mail->Password = '8950Nokia6300';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('eclipsik69@gmail.com', $name);
    $mail->addAddress('vladnosenko96@gmail.com', 'UMC TEAM');     // Add a recipient
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New request!';
    $mail->Body = '<div>Name or mail: '.$nameOrMail.'</div><br><div>Email: '.$msg.'</div>';
    $mail->send();
?>
