// server/routes.ts
import type { Express, Request, Response } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  console.log("🔧 [routes] registerRoutes() SIMPLE se ha ejecutado");

  // Logger para ver llamadas a /api
  app.use((req: Request, _res: Response, next) => {
    if (req.path.startsWith("/api")) {
      console.log(`👉 ${req.method} ${req.path}`);
    }
    next();
  });

  // Ruta de prueba: GET /api/ping
  app.get("/api/ping", (_req: Request, res: Response) => {
    return res.json({ ok: true, message: "pong from SIMPLE routes" });
  });

  // Ruta que usa tu Contact.tsx
  app.post("/api/send-email", async (req: Request, res: Response) => {
    console.log("✅ /api/send-email fue llamado");
    const { name, email, message, company } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, message: "Missing fields" });
    }

    try {
      // Import dynamically to ensure env vars are loaded if dotenv logic is added later or just to keep it clean
      const { sendContactEmails } = await import("./email");
      await sendContactEmails({ name, email, message, company });
      return res.json({ ok: true });
    } catch (error) {
      console.error("Failed to send email:", error);
      return res.status(500).json({ ok: false, message: "Internal Server Error" });
    }
  });

  return httpServer;
}
