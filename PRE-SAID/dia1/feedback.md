# Feedback Día 1 — Valentino Cuenca 5 FN

## 1. ¿Gemini CLI fue fácil de instalar? ¿Problemas?
Sí, con `npm install -g @google/gemini-cli`. El problema fue que PowerShell no encontraba el comando porque la carpeta `npm` no estaba en el PATH. Se solucionó agregándola al PATH de la sesión.

## 2. ¿Cursor fue fácil de configurar?
Sí, descarga e instalación simples. El modo Agent no se activó automáticamente, hubo que cambiarlo manualmente.

## 3. ¿El prompt para Platos fue claro? ¿Qué cambiarían?
El prompt fue claro y estructurado (QUÉ HACER + LINEAMIENTOS + QUÉ NO HACER). Funcionó bien.

## 4. ¿Las predicciones ayudaron a evaluar el output?
Sí, ayudaron a tener una expectativa clara antes de ver el resultado de la IA.

## 5. ¿Qué fue lo más difícil? ¿Tiempo total?
Lo más difícil fue la autenticación de Gemini CLI (problema con el PATH de npm y que se abrió en system32 en lugar del repo). Tiempo total aproximado: 1-2 horas.

## 6. ¿Qué debería explicar mejor este documento?
Agregar nota sobre agregar npm global al PATH en Windows, y advertir que Gemini CLI se abre en el directorio actual (asegurarse de estar en el repo).
