<?php
if(isset($_POST) && count($_POST) > 0){
    $data='';
    $data='<table style="width:100%;" border="1">';
    
    foreach($_POST as $key=>$value){
        if($value != "" ){
            $_key=ucwords(str_replace('_',' ',$key));
            $data.="<tr><td>$_key</td><td>$value</td></tr>";
        }
    }
    $data.='</table>';
      $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From:info@canvasillustrations.com \r\n";
    $subject='Canvas Illustrations new Inquiry';
    $mailSent=mail("info@canvasillustrations.com",$subject,$data,$headers);
    
    if($mailSent){
     header("Location: https://canvasillustrations.com/thankyou");
    } 
}else{
    header("Location:https://canvasillustrations.com/thankyou");
    
}

?>


