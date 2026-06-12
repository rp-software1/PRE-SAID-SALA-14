# Día 5 — Entregable PRE-SAID
**Alumno:** Valentino Cuenca 5 FN  
**Sala:** I-SALAX  
**Fecha:** 12/06/2026

---

## 1. URLs de Producción

| Servicio | URL |
|----------|-----|
| Backend (Render) | https://pre-said-sala-14.onrender.com |
| Frontend (Vercel) | https://pre-said-sala-14.vercel.app |
| Swagger | https://pre-said-sala-14.onrender.com/api |

## 2. Checklist D1–D6

| # | Item | Resultado |
|---|------|-----------|
| D1 | Backend responde | ✅ `GET /platos` devuelve array |
| D2 | Swagger funciona | ✅ UI visible en `/api` |
| D3 | Frontend carga | ✅ 200 desde Vercel |
| D4 | Frontend muestra platos del backend | ✅ Lomo Saltado + Ceviche visibles |
| D5 | Crear pedido desde frontend | ✅ Flujo completo probado vía API |
| D6 | URL compartible desde otro dispositivo | ✅ Accesible sin estar en red local |

## 3. Predicción 8 — Migración SQLite → PostgreSQL

**Antes de ver el resultado:**  
*"Al cambiar de SQLite a PostgreSQL, la IA va a modificar solo la configuración de TypeORM en `app.module.ts`. No debería tocar entidades, DTOs ni servicios porque TypeORM abstrae la base de datos."*

**Realidad:**  
La IA cambió `app.module.ts` para usar `DATABASE_URL` con PostgreSQL como opción principal y SQLite como fallback. No tocó entidades, DTOs ni servicios en ese cambio. **Predicción correcta.**

**Problema no predicho:**  
PostgreSQL devuelve columnas `decimal` como strings, lo que rompe `toFixed()` en el frontend. Tuvimos que agregar `transformer: { from: parseFloat }` en Plato, Pedido y Ticket.

## 4. Predicción 9 — Frontend en producción

**Antes de ver el resultado:**  
*"El frontend en producción va a mostrar datos vacíos porque la base de datos de producción es nueva. No hay migración de datos de localhost a producción."*

**Realidad:**  
Correcto — la DB de producción estaba vacía. Creamos datos manualmente con `curl` POST a la URL de Render. **Predicción correcta.**

## 5. Errores encontrados en producción

| Error | Causa | Solución |
|-------|-------|----------|
| `precio.toFixed is not a function` | PostgreSQL devuelve decimal como string | Transformer `parseFloat` en entidades |
| `null value in column "mesa_id"` | FK duplicada por `@Column` + `@ManyToOne` | `@JoinColumn` y eliminar `@Column` redundante |
| Root Directory no existe | Configuramos `presaid-restaurante-backend` | Cambiar a `PRE-SAID/restaurante-backend` |
| Repo privado no aparece en Render | Permisos de GitHub | `git push` + configurar acceso manual |

## 6. Screenshots
(Agregar capturas de frontend funcionando y Swagger en producción)
