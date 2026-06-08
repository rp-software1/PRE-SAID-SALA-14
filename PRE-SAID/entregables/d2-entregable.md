# Entregable Día 2 — PRE-SAID

**Alumno:** Valentino Cuenca 5 FN
**Sala:** I-SALA14
**Fecha:** 01/06/2026
**Estado:** Completado

---

## 1. Módulo Mesas — Checklist R1-R8

| # | Qué revisar | Resultado |
|---|-------------|-----------|
| ✅ R1 | ¿La entidad tiene EXACTAMENTE los campos pedidos? | Sí: id, numero, capacidad, estado, createdAt, updatedAt |
| ✅ R2 | ¿El enum de estados existe? ¿Tiene los 3 valores? | Sí: EstadoMesa con disponible, ocupada, reservada |
| ✅ R3 | ¿El campo "numero" tiene restricción de unicidad? | Sí: @Column({ unique: true }) |
| ✅ R4 | ¿El servicio tiene el método cambiarEstado además del CRUD? | Sí: método cambiarEstado implementado |
| ✅ R5 | ¿El controlador expone PATCH /mesas/:id/estado? | Sí: @Patch(':id/estado') |
| ✅ R6 | ¿Los DTOs validan que "estado" solo acepte los valores del enum? | Sí: @IsEnum(EstadoMesa) en crear y cambiar-estado DTOs |
| ✅ R7 | ¿La IA modificó archivos que NO le pedimos? | No, solo app.module.ts (necesario para registrar el módulo) |
| ✅ R8 | ¿Hay algo en el código que ninguno de los dos entiende? | No, sigue el mismo patrón que Platos |

---

## 2. Hallazgos del Code Review

### Lo que la IA hizo BIEN
1. **Entidad completa** — Todos los campos con los tipos correctos.
2. **Enum de estados** — `EstadoMesa` con los 3 valores exactos: disponible, ocupada, reservada.
3. **Unicidad en numero** — `@Column({ unique: true })` aplicado correctamente.
4. **Endpoint PATCH /mesas/:id/estado** — Implementado con DTO específico (`CambiarEstadoDto`) y validación `@IsEnum()`.
5. **Validación de duplicados** — El servicio verifica que no exista mesa con el mismo número al crear y al actualizar.

### Lo que la IA hizo MAL
1. **Redundancia en validaciones** — `@IsNotEmpty()` + `@IsPositive()` + `@Min(1)` en capacidad. Bastaba con `@IsInt()` + `@IsPositive()`.
2. **Falta de tipo explícito en capacidad** — `@Column()` sin tipo explícito funciona en SQLite, pero por claridad debería ser `@Column('int')`.

### Lo que la IA INVENTÓ
Nada. Todo lo creado fue exactamente lo solicitado.

---

## 3. Predicción vs Realidad

| Aspecto | Predicción | Realidad |
|---------|-----------|----------|
| Archivo de enum separado | Se crearía un enum.ts aparte | El enum está dentro de mesa.entity.ts |
| Validación @IsEnum | Se usaría correctamente | Sí, usado en CrearMesaDto y CambiarEstadoDto |
| Modificaciones ajenas | Podría tocar platos/ | Solo modificó app.module.ts (necesario) |

---

## 4. Comparación: Platos (Día 1) vs Mesas (Día 2)

| Aspecto | Platos (Día 1) | Mesas (Día 2) |
|---------|---------------|---------------|
| Code review | No se hizo | Exhaustivo R1-R8 |
| Validación de unicidad | No aplica | Sí, numero único |
| Enum de estados | No aplica | Implementado con @IsEnum |
| Endpoint extra | No | PATCH /mesas/:id/estado |
| Validación de duplicados | No | Sí, crear y actualizar |

---

## 5. Verificación de endpoints

```
GET  /mesas          → [] (sin mesas aún)
POST /mesas          → 201 Created
GET  /mesas          → [{ id: 1, numero: 1, capacidad: 4, estado: "disponible" }]
GET  /platos         → Sigue funcionando ✅
PATCH /mesas/1/estado → { estado: "ocupada" } ✅
```
