export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// LOGO replaced by text


export function dataLyraAdminHtml(data: ContactPayload) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Nuevo Contacto - DataLyra</title>
</head>
<body style="margin:0; padding:0; background-color: #f3f4f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-top: 20px; margin-bottom: 20px;">
    
    <!-- Header -->
    <div style="background-color: #0f172a; padding: 24px 32px; color: #ffffff;">
      <div style="margin-bottom: 20px;">
        <span style="font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">DATALYRA</span>
      </div>
      <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #f8fafc;">Nuevo Lead Web</h2>
    </div>

    <!-- Content -->
    <div style="padding: 32px;">
      <p style="margin-top: 0; color: #334155; line-height: 1.5;">
        Hola Admin,
      </p>
      <p style="color: #334155; line-height: 1.5; margin-bottom: 24px;">
        Has recibido una nueva consulta a través del sitio web. Aquí están los detalles:
      </p>

      <!-- Resumen Box -->
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 20px; margin-bottom: 24px;">
        <h3 style="margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Resumen del Contacto</h3>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 4px 0; color: #64748b; font-size: 14px; width: 140px;"><strong>Nombre:</strong></td>
            <td style="padding: 4px 0; color: #0f172a; font-size: 14px;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; color: #64748b; font-size: 14px;"><strong>Email:</strong></td>
            <td style="padding: 4px 0; color: #0f172a; font-size: 14px;">${data.email}</td>
          </tr>
          ${data.company
      ? `<tr>
                  <td style="padding: 4px 0; color: #64748b; font-size: 14px;"><strong>Empresa:</strong></td>
                  <td style="padding: 4px 0; color: #0f172a; font-size: 14px;">${data.company}</td>
                 </tr>`
      : ""
    }
        </table>
      </div>

      <!-- Detalle Mensaje -->
      <h3 style="margin: 0 0 12px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Detalle del Mensaje</h3>
      <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>

    </div>
    
    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
      <p style="margin: 0; font-size: 12px; color: #94a3b8;">
        Este mensaje fue enviado automáticamente por el sistema de DataLyra.
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

export function dataLyraClientHtml(data: ContactPayload) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Confirmación de Consulta - DataLyra</title>
</head>
<body style="margin:0; padding:0; background-color: #f3f4f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-top: 20px; margin-bottom: 20px;">
    
    <!-- Header -->
    <div style="background-color: #0f172a; padding: 32px; border-bottom: 4px solid #0ea5e9;">
      <div style="margin-bottom: 24px;">
         <span style="font-size: 26px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">DATALYRA</span>
      </div>
      <div style="font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
        Confirmación de Consulta
      </div>
      <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff;">Hemos recibido tu consulta</h1>
    </div>

    <!-- Content -->
    <div style="padding: 32px;">
      <p style="margin-top: 0; font-size: 16px; color: #334155; line-height: 1.6;">
        Hola <strong>${data.name}</strong>,
      </p>
      <p style="color: #475569; line-height: 1.6; margin-bottom: 24px;">
        Gracias por ponerte en contacto con <strong>DataLyra</strong>. Hemos recibido tu mensaje y uno de nuestros ingenieros de datos revisará tu requerimiento.
        <br/><br/>
        Nuestro tiempo de respuesta habitual es de hasta <strong>24 horas hábiles</strong>.
      </p>

      <!-- Resumen Box -->
      <div style="background-color: #f1f5f9; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
        <h3 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Resumen de tu consulta</h3>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; color: #64748b; font-size: 14px; width: 140px;">Nombre:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: 500; font-size: 14px;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b; font-size: 14px;">Email de contacto:</td>
            <td style="padding: 6px 0; color: #0284c7; font-weight: 500; font-size: 14px; text-decoration: none;">${data.email}</td>
          </tr>
          ${data.company
      ? `<tr>
                  <td style="padding: 6px 0; color: #64748b; font-size: 14px;">Empresa:</td>
                  <td style="padding: 6px 0; color: #0f172a; font-weight: 500; font-size: 14px;">${data.company}</td>
                 </tr>`
      : ""
    }
        </table>
      </div>

      <!-- Detalle Mensaje -->
      <h3 style="margin: 0 0 12px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Detalle del Mensaje</h3>
      <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap; background-color: #fff;">${data.message}</div>
      
      <p style="margin-top: 24px; font-size: 13px; color: #94a3b8; font-style: italic;">
        Si esta consulta fue enviada por error, puedes ignorar este mensaje.
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #ffffff; padding: 0 32px 32px 32px;">
      <p style="margin: 0; font-size: 14px; color: #334155;">
        Saludos,<br/>
        <strong>Equipo DataLyra</strong>
      </p>
    </div>
  </div>
</body>
</html>
  `;
}
