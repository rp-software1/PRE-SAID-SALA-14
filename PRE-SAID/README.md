# PRE-SAID-SALA-14 - Restaurante Backend

Backend de gestión de platos para un restaurante, construido con **NestJS**, **TypeORM** y **SQLite (better-sqlite3)**.

## Tecnologías

- **NestJS 11** - Framework backend progresivo de Node.js
- **TypeORM** - ORM para TypeScript/JavaScript
- **better-sqlite3** - Base de datos SQLite síncrona
- **class-validator / class-transformer** - Validación de DTOs
- **Jest** - Testing

## Endpoints

| Método | Ruta           | Descripción            |
|--------|----------------|------------------------|
| GET    | `/platos`      | Obtener todos los platos |
| GET    | `/platos/:id`  | Obtener un plato por ID |
| POST   | `/platos`      | Crear un nuevo plato   |
| PATCH  | `/platos/:id`  | Actualizar un plato    |
| DELETE | `/platos/:id`  | Eliminar un plato      |

## Instalación

```bash
cd PRE-SAID
npm install
```

## Ejecución

```bash
# desarrollo
npm run start:dev

# producción
npm run start:prod
```

## Tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e
```
