
<?php	

$email= $_POST["email"];
$sujet= $_POST["Sujet"];
$message= $_POST["Message"];
	
if(empty ($email) || empty ($sujet) || empty ($message)) {
echo "Vous devrez entrer un courriel et un sujet ainsi qu'un message";	
exit;	}

$email_from= 'saad_baz@yahoo.com';	
$emailsubject= "Nouveau message";	
$email_body= "Vous avez recu un nouveau message $email. \n".	
"Sujet : $sujet \n".	
"Message: \n $message".	


$to = "saad_baz@yahoo.com";
$sender = "From:$email_from \r\n";	


mail ($to, $emailsubject,$email_body, $sender) ;	

?>
