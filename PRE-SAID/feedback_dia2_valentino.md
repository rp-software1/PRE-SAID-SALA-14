# Feedback Día 2 — Valentino Cuenca 5 FN

1. **¿Los videos de code review ayudaron a entender qué buscar?**
   Sí, enseñaron el nivel de detalle esperado. Revisar línea por línea en lugar de solo "que funcione" cambió la perspectiva de validación.

2. **¿El prompt para Mesas fue claro? ¿La IA generó bien el enum y el endpoint PATCH?**
   Sí, muy claro. Especificar que el enum de estados y el endpoint PATCH para cambiar estado eran requisitos ayudó a que la IA los generara correctamente.

3. **¿El flujo de Git branches fue confuso o fácil?**
   Fácil. feature/dia2-mesas → trabajar → merge a main. Aísla los cambios y permite revertir si algo sale mal. Buena práctica.

4. **¿Cuántos errores encontraron en el code review? ¿Eran esperados?**
   3 hallazgos menores (redundancia en validaciones, falta de tipo explícito, sin validación de transición). Ninguno grave, la IA hizo un buen trabajo considerando la complejidad.

5. **¿El flujo end-to-end funcionó o requirió debugging?**
   Funcionó correctamente. Los endpoints CRUD de Mesas compilaron sin errores y respondieron como se esperaba. El endpoint PATCH de estado funcionó con validaciones correctas.

6. **¿Tiempo total del día?**
   Día 2 completo: ~6 horas incluyendo code review, correcciones, documentación, hallazgos y verificación.

7. **¿Qué debería mejorar este documento?**
   Agregar ejemplos de respuestas HTTP esperadas para cada endpoint del módulo Mesas y detallar los hallazgos del code review.
