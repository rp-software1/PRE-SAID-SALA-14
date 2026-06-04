# Restaurante Backend — PRE-SAID

Backend de restaurante construido con NestJS + TypeORM + SQLite durante el bootcamp **PRE-SAID — Desarrollo Moderno con IA y CLI**.

## Stack

- **Framework:** NestJS 11
- **ORM:** TypeORM con better-sqlite3
- **Validación:** class-validator + class-transformer
- **Base de datos:** SQLite (sincronización automática)

## Módulos

| Módulo | Endpoints | Estado |
|--------|-----------|--------|
| **Platos** | CRUD completo | ✅ Día 1 |
| **Mesas** | CRUD + cambiar estado (PATCH /mesas/:id/estado) | ✅ Día 2 |

## Requisitos

- Node.js >= 18
- npm >= 9

## Instalación

```bash
npm install
```

## Ejecutar

```bash
npm run start:dev
```

Servidor en `http://localhost:3000`.

## Endpoints disponibles

### Platos
```
POST   /platos           — Crear plato
GET    /platos           — Listar todos
GET    /platos/:id       — Obtener uno
PATCH  /platos/:id       — Actualizar
DELETE /platos/:id       — Eliminar
```

### Mesas
```
POST   /mesas            — Crear mesa
GET    /mesas            — Listar todas
GET    /mesas/:id        — Obtener una
PATCH  /mesas/:id        — Actualizar
DELETE /mesas/:id        — Eliminar
PATCH  /mesas/:id/estado — Cambiar estado (disponible/ocupada/reservada)
```

## Estructura

```
src/
├── platos/          # Módulo Platos (Día 1)
│   ├── dto/
│   ├── entities/
│   ├── platos.controller.ts
│   ├── platos.module.ts
│   └── platos.service.ts
├── mesas/           # Módulo Mesas (Día 2)
│   ├── dto/
│   ├── entities/
│   ├── mesas.controller.ts
│   ├── mesas.module.ts
│   └── mesas.service.ts
├── app.module.ts
└── main.ts
```

## Autor

Nick Camana — Sala I-SALA14 — PRE-SAID Bootcamp
