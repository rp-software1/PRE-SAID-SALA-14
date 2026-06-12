# Feedback Día 5 — Valentino

1. **¿La migración de SQLite a PostgreSQL fue fácil? ¿La IA la hizo bien?**
   La IA hizo la migración correctamente, solo cambió la configuración de TypeORM. El concepto de `DATABASE_URL` con fallback a SQLite es limpio.

2. **¿Render fue fácil de configurar? ¿Errores?**
   Tuve que configurar el Root Directory como `PRE-SAID/restaurante-backend`. Error inicial por la ruta incorrecta. También el repo privado no aparecía en Render — lo solucionamos con acceso manual.

3. **¿Vercel fue fácil de configurar? ¿Errores?**
   Fácil, se conectó directo desde GitHub. Solo configurar root directory y variable de entorno.

4. **¿CORS fue un problema? ¿Cómo lo resolvieron?**
   No fue problema porque el backend ya tenía `app.enableCors()` desde el Día 4.

5. **¿Variables de entorno: la IA las manejó bien o puso credenciales en el código?**
   La IA manejó bien las variables de entorno. Creó `.env.example` sin credenciales reales.

6. **¿Tiempo total?**
   ~2 horas incluyendo fixes de producción (decimal transformer + FK duplicadas).

7. **¿Qué debería mejorar este documento?**
   Mencionar los problemas comunes de PostgreSQL vs SQLite (decimal como string, FK duplicadas).
