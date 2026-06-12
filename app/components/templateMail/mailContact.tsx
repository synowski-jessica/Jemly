const generateContactEmailHtml = (data: {
  name: string;
  email: string;
  project:string;
  message: string;
}): string => {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Jemly Studio</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FCF5EE;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="padding: 20px;>
          <tr>
            <td align="center" style="padding: 20px;">
              <a href="https://www.jemly-studio.fr/">
                <img src="https://res.cloudinary.com/ders8u3l9/image/upload/v1780607847/logoNew2_o15czl.svg" width="200" alt="Jemly Logo" style="display:block;padding-bottom:20px;"/>
              </a>
            </td>
          </tr>
        
          <tr>
            <td align="center">
                <table width="600" cellpadding="20" cellspacing="0" style="padding: 20px; border-radius:5px; background-color: #850e35; color:#FFFFFF;">
                    <tr>
                        <td width="80" style="vertical-align: middle; padding-right: 10px;">
                            <img src="https://res.cloudinary.com/ders8u3l9/image/upload/v1781247312/mailContact_jlalul.svg" alt="image" width="80"/>
                        </td>

                        <td style="vertical-align: middle;padding:0;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="font-weight: bold;">Bonne nouvelle ! <td>
                                </tr>
                                <tr>
                                    <td>Une personne souhaite vous contacter</td>
                                </tr>
                            </table>
                        </td>   
                    </tr>
                    <tr>
                        <td align="center" colspan="2" style="padding-top: 20px;">
                            <table width="552" cellpadding="10" cellspacing="0" style="padding:20px; border-radius:15px; background-color: #FFFFFF;" >
                                <tr>
                                    <td colspan="3" style="color:#18120E;">Voici les informations pour recontacter la personne:</td>
                                </tr>
                                 <tr>
                                    <td style="line-height: 0; font-size: 0;">
                                        <div style="height: 5px;">&nbsp;</div>
                                    </td>
                                </tr>  
                                <tr>
                                    <td width="10%" style="color:#850e35;font-weight: bold;">Nom:</td>
                                    <td width="70%" style="border: 1px solid #850e35; background-color: #FCF5EE; border-radius: 5px; color:#18120E">${data.name}</td>
                                    <td width="20%">&nbsp</td>
                                </tr>
                                <tr>
                                    <td style="line-height: 0; font-size: 0;">
                                        <div style="height: 10px;">&nbsp;</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="10%" style="color:#850e35;font-weight: bold;">Email:</td>
                                    <td width="70%" style="border: 1px solid #850e35; background-color: #FCF5EE;; border-radius: 5px; color:#18120E;">${data.email}</td>
                                    <td width="20%">&nbsp</td>
                                </tr>
                                <tr>
                                    <td style="line-height: 0; font-size: 0;">
                                        <div style="height: 5px;">&nbsp;</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="10%" style="color:#850e35;font-weight: bold;">Projet souhaité:</td>
                                    <td width="70%" style="border: 1px solid #850e35; background-color: #FCF5EE;; border-radius: 5px;color:#18120E;">${data.project}</td>
                                    <td width="20%">&nbsp</td>
                                </tr>
                                <tr>
                                    <td style="line-height: 0; font-size: 0;">
                                        <div style="height: 5px;">&nbsp;</div>
                                    </td>
                                </tr>                              
                                <tr>
                                    <td colspan="3" style="color:#850e35;font-weight: bold;">Contenu du message:</td>
                                </tr>
                                <tr>
                                    <td colspan="3" style="border: 1px solid #850e35; background-color: #FCF5EE; border-radius: 5px; padding: 12px; line-height:1.5;color:#18120E;">${data.message}</td>
                                </tr>
                                <tr>
                                    <td style="line-height: 0; font-size: 0;">
                                        <div style="height: 10px;">&nbsp;</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3" style="color:#18120E;">A recontacter dès que possible</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
           </tr>
           
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

export default generateContactEmailHtml;
