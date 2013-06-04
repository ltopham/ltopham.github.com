<?
header('Content-Type: text/html; charset=utf-8');
if ($_POST['do'] == 'send'){
	$data = $_POST;
	
	if ($data['surname'] == '' || $data['surname'] == 'Your Name'){
		$body = '<span style="color:#fff">Your Name field is required</span>';
		?>
		showError('if1');
		<?
	} else {
        if ($data['email'] == '' || $data['email'] == 'Email'){
            $body = '<span style="color:#fff">Email field is required</span>';
            ?>
            showError('if1');
            <?
        } 
         else {
			if (!preg_match('/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/i', $data['email'])){
				$body = '<span style="color:#fff">Email is not a valid</span>';
				?>
				showError('if1');
				<?
			} else {
                $to = 'youremail@companyname.com';
				$toName = 'Test';
				$subject = 'Contact form';
				$message = '
				<html>
				<head>
				  <title>Contact form</title>
				</head>
				<body>
					<h1>Contact form</h1>
					<table cellpadding="5" cellspacing="0">
                        <tr>
                            <th align="right">Your Name:</th>
                            <td>'.iconv('utf-8', 'windows-1251', $data['surname']).'</td>
                        </tr>
                        <tr>
                            <th align="right">Email:</th>
                            <td>'.iconv('utf-8', 'windows-1251', $data['email']).'</td>
                        </tr>
						<tr>
							<th align="right">Subject:</th>
							<td>'.iconv('utf-8', 'windows-1251', $data['website']).'</td>
						</tr>
						<tr>
							<th colspan="2">Message:</th>
						</tr>
						<tr>
							<td colspan="2">'.iconv('utf-8', 'windows-1251', $data['message']).'</td>
						</tr>
					</table>
				</body>
				</html>
				';

				// To send HTML mail, the Content-type header must be set
				$headers  = 'MIME-Version: 1.0' . "\r\n";
				$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

				// Additional headers
				//$headers .= 'To: '.$toName.' <'.$to.'>' . "\r\n";
				$headers .= 'From: '.$data['name'].' <'.$data['email'].'>' . "\r\n";
				//$headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
				//$headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";

				// Mail it
				if (mail($to, $subject, $message, $headers)){
					$body = '<span style="color:#fff">Contact form submitted!</span>';
					?>
					<!--$("#f1").fadeOut(800);-->
					showDone('ifl');
					<?
				} else {
					$body = '<span style="color:#2CAFE4">Contact form error</span>';
					?>
					showError('if1');
					<?
				}
			}
		}
    }
    }
?>
$("#events").html('<?=$body?>').fadeIn(800);
