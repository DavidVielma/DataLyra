// src/email/templates/datalyra.ts
interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export function dataLyraAdminHtml(data: ContactPayload) {
  return `
  <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#020617; padding:24px; color:#e5e7eb;">
    <div style="max-width:560px; margin:0 auto; background:#020617; border-radius:16px; border:1px solid #1e293b; padding:24px;">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:16px;">
        <div style="width:32px; height:32px; border-radius:999px; background:linear-gradient(135deg,#0ea5e9,#22c55e); display:flex; align-items:center; justify-content:center; color:white; font-weight:700;">
          DL
        </div>
        <div style="font-size:18px; font-weight:700; color:#e5e7eb;">DataLyra</div>
      </div>

      <h1 style="font-size:20px; margin:0 0 12px; color:#f9fafb;">Nuevo contacto desde la web</h1>
      <p style="margin:0 0 20px; color:#9ca3af; font-size:14px;">
        Se ha recibido un nuevo mensaje desde el formulario de contacto de DataLyra.
      </p>

      <div style="background:#020617; border-radius:12px; border:1px solid #1f2937; padding:16px;">
        <p style="margin:0 0 8px; font-size:14px;">
          <strong>Nombre:</strong> ${data.name}
        </p>
        <p style="margin:0 0 8px; font-size:14px;">
          <strong>Email:</strong> ${data.email}
        </p>
        ${
          data.company
            ? `<p style="margin:0 0 8px; font-size:14px;">
                 <strong>Empresa:</strong> ${data.company}
               </p>`
            : ""
        }
        <p style="margin:12px 0 4px; font-size:14px;"><strong>Mensaje:</strong></p>
        <p style="margin:0; white-space:pre-wrap; font-size:14px; color:#e5e7eb;">
          ${data.message}
        </p>
      </div>

      <p style="margin-top:20px; font-size:12px; color:#6b7280;">
        Este correo fue generado automáticamente por el sitio de DataLyra.
      </p>
    </div>
  </div>
  `;
}

export function dataLyraClientHtml(data: ContactPayload) {
  return `
  <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#020617; padding:24px; color:#e5e7eb;">
    <div style="max-width:560px; margin:0 auto; background:#020617; border-radius:16px; border:1px solid #1e293b; padding:24px;">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:16px;">
        <div style="width:32px; height:32px; border-radius:999px; background:linear-gradient(135deg,#0ea5e9,#22c55e); display:flex; align-items:center; justify-content:center; color:white; font-weight:700;">
          DL
        </div>
        <div style="font-size:18px; font-weight:700; color:#e5e7eb;">DataLyra</div>
      </div>

      <h1 style="font-size:20px; margin:0 0 12px; color:#f9fafb;">¡Gracias por escribirnos, ${data.name}!</h1>
      <p style="margin:0 0 12px; color:#9ca3af; font-size:14px;">
        Hemos recibido tu mensaje y uno de nosotros lo revisará pronto.
      </p>

      <div style="background:#020617; border-radius:12px; border:1px solid #1f2937; padding:16px; margin-bottom:16px;">
        <p style="margin:0 0 4px; font-size:13px; color:#9ca3af;">Resumen de tu mensaje:</p>
        <p style="margin:8px 0 0; white-space:pre-wrap; font-size:14px; color:#e5e7eb;">
          ${data.message}
        </p>
      </div>

      <p style="margin:0 0 16px; font-size:13px; color:#9ca3af;">
        Si necesitas agregar más detalles, puedes responder directamente a este correo.
      </p>

      <p style="margin:0; font-size:12px; color:#6b7280;">
        Equipo DataLyra · Análisis de datos & business intelligence
      </p>
    </div>
  </div>
  `;
}
