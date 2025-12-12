### 1. Creación de una Fábrica Centralizada

Se agregó el archivo:
src/factories/MovementFactory.js
Este archivo contiene:
- Un registro dinámico de tipos de movimientos.
- La función registerMovement(type, constructor) para registrar nuevos tipos.
- La función createMovement(data) que devuelve una instancia correcta dependiendo del tipo.
La interfaz de usuario ahora depende únicamente de esta fábrica para construir movimientos.

### 2. Eliminación del switch en la UI
MovementList.jsx ya no instancia clases concretas ni contiene lógica condicional para determinar tipos.
Ahora usa solamente:
createMovement(data);
Esto elimina completamente el acoplamiento entre UI y dominio y mejora la cohesión.

### 3. Nuevo tipo de movimiento
Se agregó el archivo:
src/models/Fee.js
Este nuevo tipo:
- Extiende Movement
- Implementa sus propios métodos (netAmount, getColor, getIcon, getTypeName)
- Fue registrado en la fábrica sin necesidad de modificar la UI
Esto demuestra extensibilidad real según el patrón Factory.

## ✔️ Archivos agregados y modificados

### Agregados
- src/factories/MovementFactory.js
- src/models/Fee.js

### Modificados
- src/components/MovementList.jsx  
  → Se eliminó el switch y las importaciones de clases concretas  
  → Ahora utiliza únicamente la fábrica
