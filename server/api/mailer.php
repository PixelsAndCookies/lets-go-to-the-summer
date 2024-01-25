<?php

header('Access-Control-Allow-Origin: https://pixelsandcookies.fr');
header('Access-Control-Allow-Headers: Content-Type');
$mail_contact = "pixelscookies@gmail.com";
$subject = "Contact via Pixels & Cookies";
$datas = json_decode(file_get_contents("php://input"), true);

if(!empty($datas)){
    if(!empty($datas['name']) && !empty($datas['firstName']) && !empty($datas['message'])){
        $subject = "Message de $datas[name] $datas[firstName] - ". $subject;
        $message = stripslashes($datas["message"]);
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
        $headers .= 'From: contact@pixelsandcookies.fr' . "\r\n";
        $content =        
        '<!DOCTYPE html><html>
        <body>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                <tbody >
                    <tr width="100%">
                        <td align="center" style="max-width:353px; padding-bottom:20px;">
                            <div style="max-width:353px">
                                <img src="https://pixelsandcookies.fr/pictures/logo.png" width="353">
                            </div>
                        </td>
                    </tr>
                    <tr style="padding-top:20px;">
                        <td>
                            <p style="font-size:24px;text-align:left;color:#333;font-family:Arial,\'Helvetica Neue\',Helvetica,sans-serif;">Vous avez reçu un message de '.$datas["name"] .' '.$datas["firstName"].' via Pixels & Cookies :</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="padding:10px">
                                <p style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:20px;background-color:#fff9f5;border: 1px dotted #ffe4c2; color:#000;font-size:18px;">
                                <strong>'.$message.'</strong></p>
                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>';

        $response = mail($mail_contact, $subject, $content, $headers);

        unset($datas);
        return $response;
    }else{
        return false;
    }
}
?>
