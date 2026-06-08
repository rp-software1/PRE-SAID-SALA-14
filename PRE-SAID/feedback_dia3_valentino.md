# Feedback Día 3 — Valentino Cuenca 5 FN

1. **¿Las relaciones @ManyToOne y @ManyToMany fueron claras de entender?**
   Sí, la estructura quedó clara: Pedido → Mesa (@ManyToOne) y Pedido → Platos (@ManyToMany con tabla intermedia).

2. **¿La IA modificó correctamente las entidades de Platos y Mesas?**
   Sí, agregó el lado inverso de la relación (@OneToMany en Mesa y @ManyToMany inversa en Plato), lo cual fue necesario para las queries.

3. **¿La validación de IDs fue implementada correctamente?**
   Sí, el servicio valida que mesaId y platoIds existan ANTES de crear el pedido. Errores de IDs inexistentes devuelven 400 (BadRequest) y no 500.

4. **¿La tabla intermedia se generó automáticamente con @JoinTable?**
   Sí, usó @JoinTable con nombre 'pedido_platos' explícito, joinColumn e inverseJoinColumn correctos. TypeORM creó la tabla automáticamente.

5. **¿El cálculo del total y las relaciones cargadas funcionaron bien?**
   Sí, el total se calcula sumando precios de platos. GET /pedidos retorna pedidos CON mesa y platos cargados (relations: { mesa: true, platos: true }).

6. **¿Fue necesario aplicar la "regla de los 3 intentos"?**
   No, la IA generó el módulo Pedidos correctamente en el primer intento con validaciones y errores 400 bien configurados.

7. **¿Tiempo total del día?**
   Día 3 completo: ~4 horas (especificación de relaciones + creación del módulo Pedidos + validaciones + testing de endpoints).

8. **¿Qué debería mejorar este documento?**
   Detallar más las diferencias entre @ManyToOne y @ManyToMany, y agregar ejemplos de payloads esperados para crear pedidos.
