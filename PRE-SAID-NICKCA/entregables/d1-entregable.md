# Entregable Día 1 — PRE-SAID
**Alumno:** Nick Camana 5 FN  
**Sala:** I-SALA14  
**Estado:** Completado

## 1. Gemini CLI funcionando
Gemini CLI v0.44.1 instalado y autenticado con cuenta @gmail. Se creó y borró archivo `prueba.txt` correctamente.

## 2. Predicción vs Realidad
- **Predicción:** Crearía: plato.entity.ts, plato.controller.ts, plato.service.ts, plato.module.ts, create-plato.dto.ts, update-plato.dto.ts
- **Realidad:** Creó exactamente esos archivos + actualizó app.module.ts y package.json

## 3. Checklist V1-V7
| Criterio | Resultado |
|---|---|
| V1: Entidad con id, nombre, precio, disponible, createdAt, updatedAt | Pendiente de verificar |
| V2: Sin campos inventados | Pendiente de verificar |
| V3: DTOs con validaciones reales | Pendiente de verificar |
| V4: 5 endpoints REST | ✅ |
| V5: Módulo registrado en AppModule | ✅ |
| V6: No se modificaron archivos extra | ✅ |
| V7: Sin llaves secretas ni URLs hardcodeadas | ✅ |

## 4. Comparación CLI vs IDE
| Aspecto | CLI (Gemini) | IDE (Cursor) |
|---|---|---|
| Control | Mayor control sobre el filesystem | Visual, más amigable |
| Velocidad | Rápido para comandos secuenciales | Rápido para edición visual |
| Transparencia | Se ve cada paso en terminal | El agente trabaja internamente |
| Automatización | Ideal para tareas repetitivas | Ideal para exploración |

## 5. GET /platos responde
El servidor NestJS corre en `http://localhost:3001`. Endpoint `GET /platos` responde correctamente.
