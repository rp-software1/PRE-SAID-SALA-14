# CHANGES.md - Restaurante API

## Día 4 — Backend Completo + Frontend Next.js

### Módulos Backend (5/5)

- **Platos** - CRUD de platos con nombre, precio, disponible
- **Mesas** - CRUD de mesas con número, capacidad, estado (cambiarEstado)
- **Pedidos** - CRUD con relaciones ManyToOne (Mesa) y ManyToMany (Platos)
  - Validación de IDs existentes con errores 400
  - Cálculo automático de total
- **Comandas** - Vista de cocina vinculada a Pedido (ManyToOne)
  - Estados: recibida, en_preparacion, lista
- **Tickets** - Boleta/factura vinculada a Mesa (ManyToOne)
  - Calcula total sumando pedidos de la mesa
  - Estados: abierto, pagado
  - Métodos de pago: efectivo, tarjeta

### Frontend Next.js (4 páginas)

- **Dashboard** (`/`) - Tarjetas resumen con totales
- **Platos** (`/platos`) - Tabla + formulario de creación
- **Mesas** (`/mesas`) - Cards con cambio de estado inline
- **Pedidos** (`/pedidos`) - Lista con relaciones + formulario de creación

### Configuración

- CORS habilitado para frontend en localhost:3001
- Swagger en http://localhost:3000/api
- ValidationPipe global con whitelist
