# PRE-SAID-SALA-14 — Restaurante Backend

Backend de gestión de platos para un restaurante, construido con **NestJS**, **TypeORM** y **SQLite (better-sqlite3)**.

**Alumno:** Valentino Cuenca 5 FN  
**Sala:** I-SALA14  
**Curso:** PRE-SAID — Desarrollo Moderno con IA y CLI

---

## Estructura del proyecto

```
PRE-SAID-SALA-14/
├── .gitignore                  # Archivos ignorados: node_modules/, dist/, db.sqlite, *.log
├── db.sqlite                   # Base de datos SQLite (ignorada por git)
├── PRE-SAID/                   # Proyecto NestJS
│   ├── src/
│   │   ├── main.ts             # Entry point con ValidationPipe global
│   │   ├── app.module.ts       # Módulo raíz (TypeORM + PlatosModule)
│   │   ├── app.controller.ts   # Controlador raíz (GET /)
│   │   ├── app.service.ts      # Servicio raíz
│   │   └── platos/             # Módulo Platos (CRUD completo)
│   │       ├── entities/plato.entity.ts
│   │       ├── dto/crear-plato.dto.ts
│   │       ├── dto/actualizar-plato.dto.ts
│   │       ├── platos.service.ts
│   │       ├── platos.controller.ts
│   │       └── platos.module.ts
│   ├── test/                   # Tests e2e
│   ├── checklists/             # Checklists de cada día
│   ├── entregables/            # Entregables de cada día
│   ├── dist/                   # Build (ignorado por git)
│   ├── package.json
│   ├── tsconfig.json
│   ├── nest-cli.json
│   └── eslint.config.mjs
```

---

## Día 1 — Setup + Módulo Platos CRUD

### Bloque A — Setup Gemini CLI

```bash
# Instalar Gemini CLI
npm install -g @google/gemini-cli

# Autenticar con cuenta de Google
gemini auth login

# Verificar funcionamiento
gemini --version
```

### Bloque B — Setup Cursor + Módulo Platos

1. Crear proyecto NestJS:
   ```bash
   nest new PRE-SAID
   ```
2. Instalar dependencias:
   ```bash
   npm install @nestjs/typeorm typeorm better-sqlite3
   npm install class-validator class-transformer @nestjs/mapped-types
   ```
3. Generar módulo Platos con 5 endpoints:
   - `POST /platos` — Crear plato
   - `GET /platos` — Listar todos
   - `GET /platos/:id` — Obtener uno
   - `PATCH /platos/:id` — Actualizar
   - `DELETE /platos/:id` — Eliminar

### Bloque C — Comparación CLI vs IDE

| Aspecto | CLI (Gemini) | IDE (Cursor) |
|---------|-------------|--------------|
| Control | Ves cada comando | Todo aparece de golpe |
| Velocidad | Más lento, paso a paso | Más rápido, genera varios archivos |
| Transparencia | Total | A veces abruma |
| Automatización | Ideal (scripts, headless) | Manual |

---

## Tecnologías

| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| NestJS | ~11.0.1 | Framework backend |
| TypeORM | ~1.0.0 | ORM para la base de datos |
| better-sqlite3 | ~12.10.0 | Base de datos SQLite |
| class-validator | ~0.15.1 | Validación de DTOs |
| class-transformer | ~0.5.1 | Transformación de objetos |
| Jest | ~30.0.0 | Testing unitario y e2e |
| TypeScript | ~5.7.3 | Lenguaje |
| Prettier | ~3.4.2 | Formateo de código |
| ESLint | ~9.18.0 | Linting |

---

## Endpoints de la API

| Método | Ruta | Descripción | Body |
|--------|------|-------------|------|
| `GET` | `/` | Health check | — |
| `POST` | `/platos` | Crear plato | `{ nombre, precio, disponible? }` |
| `GET` | `/platos` | Listar todos | — |
| `GET` | `/platos/:id` | Obtener por ID | — |
| `PATCH` | `/platos/:id` | Actualizar | `{ nombre?, precio?, disponible? }` |
| `DELETE` | `/platos/:id` | Eliminar | — |

### Ejemplo de creación

```bash
curl -X POST http://localhost:3000/platos \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Milanesa napolitana", "precio": 8500, "disponible": true}'
```

### Entidad Plato

| Campo | Tipo | Validaciones |
|-------|------|-------------|
| `id` | `number` (PK autoincremental) | — |
| `nombre` | `string` (varchar 100) | @IsString, @MinLength(2), @MaxLength(100) |
| `precio` | `number` (decimal 10,2) | @IsNumber, @IsPositive |
| `disponible` | `boolean` | @IsBoolean, @IsOptional (default: true) |
| `createdAt` | `Date` | Autogenerado |
| `updatedAt` | `Date` | Autogenerado |

---

## Instalación y ejecución

```bash
# Ir al proyecto
cd PRE-SAID

# Instalar dependencias
npm install

# Desarrollo (con watch)
npm run start:dev

# Producción
npm run start:prod

# Build
npm run build
```

## Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Con cobertura
npm run test:cov
```

## Linting y formato

```bash
# Lint
npm run lint

# Formato
npm run format
```

---

## Git workflow

### Commits del proyecto

```
cc41c451 chore: agregar .gitignore, remover node_modules/dist/db.sqlite del tracking
aa64e278 PRESAID-D1-B: módulo Platos CRUD completo
c895ab80 PRESAID-D1-FINAL: Platos CRUD + CLI setup + comparación
347e1d0b PRESAID-D1-A: setup CLI + proyecto NestJS
5cb110bc PRESAID-D1-START: setup inicial
959c1132 Update README.md
74a2edac Initial commit
```

### Reglas del repo

- `node_modules/`, `dist/`, `db.sqlite` y `*.log` están en `.gitignore`
- Hacer commit por cada bloque completado
- Usar mensajes descriptivos con prefijo (`PRESAID-D1-`, `chore:`, `feat:`, etc.)

---

## Troubleshooting

| Problema | Solución |
|----------|----------|
| `port 3000 already in use` | Cambiar el puerto en `main.ts` o matar el proceso |
| `db.sqlite` corrupta | Borrar `db.sqlite` y reiniciar (se recrea sola) |
| `Cannot find module` | Correr `npm install` |
| Errores de validación | Revisar que el body cumpla con los DTOs |

---

## Notas para próximos días

- [ ] Agregar autenticación / login
- [ ] Agregar relaciones entre entidades
- [ ] Migrar a PostgreSQL
- [ ] Agregar tests unitarios del servicio Platos
- [ ] Documentar con Swagger
