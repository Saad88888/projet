
<?php	

$email= $_POST["email"];
$sujet= $_POST["Sujet"];
$message= $_POST["Message"];
	
if(empty ($email) || empty ($sujet) || empty ($message)) {
echo "Vous devrez entrer un courriel et un sujet ainsi qu'un message";	}
else {
echo " Merci Votre message a été envoyé avec success";
}


$email_from= '';	
$emailsubject= "Nouveau message";	
$email_body= "Vous avez recu un nouveau message de $email. \n".	
"Sujet : $sujet \n".	
"Message: \n $message".	


$to = "\n saad_baz@yahoo.com";
$sender = "From:$email_from \r\n";	


mail ($to, $emailsubject,$email_body, $sender) ;	

?>
