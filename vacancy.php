<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
    $name = $_POST['name'];
    $about = $_POST['about'];
    $experience = $_POST['experience'];
    $phone = $_POST['phone'];
    $email = $_POST['mail'];
    $facebook = $_POST['facebook'];

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
    $mail->Body = '<div>Name: '.$name.'</div><br><div>About: '.$about.'</div><br><div>Experience: ' .$experience. '</div><br><div>Phone: ' .$phone. '</div><br><div>Email: ' .$email. '</div><br><div>Facebook: ' .$facebook. '</div>';
    $mail->send();
?>

