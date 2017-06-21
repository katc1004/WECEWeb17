<html>

<body>

    Submitted. Thank you for joining our mailing list!

    <?php
        $file = fopen("mailinglist.txt","a");
        fwrite($file,$_POST["fullname"]);
        fwrite($file," ");
        fwrite($file,$_POST["netid"]);
        fwrite($file,"\n");
        fclose($file);
        $message = $_POST["fullname"] . " " . $_POST["netid"];
        mail('chern3@illinois.edu', 'New Mailing List Entry', $message);
	
    ?>
</body>

</html>
