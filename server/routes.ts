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
  app.post("/api/send-email", (req: Request, res: Response) => {
    console.log("✅ /api/send-email fue llamado (SIMPLE)");
    console.log("Body recibido:", req.body);
    return res.json({ ok: true });
  });

  return httpServer;
}
