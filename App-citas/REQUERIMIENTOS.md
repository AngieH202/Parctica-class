# Requerimientos — App de Citas Médicas (HTML Standalone)

## 1. Visión General

Aplicación web **standalone** (un solo archivo `index.html` con HTML, CSS y JavaScript embebidos) para gestionar citas médicas. No requiere servidor ni base de datos externa: los datos se persisten en el navegador mediante `localStorage`.

**Objetivo:** permitir a un consultorio/administrador registrar pacientes, agendar, consultar, modificar y cancelar citas médicas de forma sencilla y sin instalación.

---

## 2. Alcance

### 2.1 Incluido (MVP)
- Gestión de pacientes (alta, edición, eliminación, búsqueda).
- Gestión de citas (agendar, consultar, modificar, cancelar).
- Persistencia local con `localStorage`.
- Interfaz responsive y en español.
- Validación de datos en el formulario.

### 2.2 Excluido (fuera de alcance inicial)
- Autenticación / roles de usuario.
- Sincronización en la nube o multiusuario.
- Envío de recordatorios por correo/SMS.
- Integración con APIs externas o pasarelas de pago.
- Backend o base de datos remota.

---

## 3. Requerimientos Funcionales

### 3.1 Gestión de Pacientes
| ID | Requerimiento |
|----|---------------|
| RF-01 | Registrar un paciente con: nombre completo, fecha de nacimiento, teléfono, correo, y observaciones. |
| RF-02 | Editar los datos de un paciente existente. |
| RF-03 | Eliminar un paciente (con confirmación). |
| RF-04 | Buscar pacientes por nombre, teléfono o correo. |
| RF-05 | Listar todos los pacientes registrados. |
| RF-06 | Evitar duplicados por correo (validación). |

### 3.2 Gestión de Citas
| ID | Requerimiento |
|----|---------------|
| RF-07 | Agendar una cita seleccionando: paciente, fecha, hora, médico/especialidad y motivo. |
| RF-08 | Consultar citas por fecha (día, semana o mes). |
| RF-09 | Modificar una cita existente (fecha, hora, motivo, estado). |
| RF-10 | Cancelar una cita (cambiar estado a "Cancelada"). |
| RF-11 | Marcar una cita como "Completada" o "Pendiente". |
| RF-12 | Validar que no existan citas duplicadas (mismo paciente, fecha y hora). |
| RF-13 | Mostrar alerta si se intenta agendar en una fecha/hora pasada. |

### 3.3 Estados de Cita
- **Pendiente** (por defecto al agendar).
- **Completada**.
- **Cancelada**.

### 3.4 Persistencia
| ID | Requerimiento |
|----|---------------|
| RF-14 | Guardar pacientes y citas en `localStorage`. |
| RF-15 | Cargar los datos guardados al abrir la aplicación. |
| RF-16 | Opción de exportar/importar datos en JSON (respaldo). |
| RF-17 | Opción de limpiar/restablecer todos los datos. |

---

## 4. Requerimientos No Funcionales

| ID | Requerimiento |
|----|---------------|
| RNF-01 | **Standalone:** todo en un único archivo `index.html`. |
| RNF-02 | **Responsive:** debe verse bien en móvil, tablet y escritorio. |
| RNF-03 | **Usabilidad:** interfaz en español, clara e intuitiva. |
| RNF-04 | **Rendimiento:** carga rápida, sin dependencias externas (CDN opcional). |
| RNF-05 | **Accesibilidad:** etiquetas en formularios, contraste adecuado, navegación por teclado. |
| RNF-06 | **Compatibilidad:** funciona en navegadores modernos (Chrome, Edge, Firefox, Safari). |
| RNF-07 | **Mantenibilidad:** código comentado y organizado en secciones (HTML, CSS, JS). |

---

## 5. Estructura de Datos

### 5.1 Paciente
```json
{
  "id": "uuid",
  "nombre": "Juan Pérez",
  "fechaNacimiento": "1990-05-12",
  "telefono": "555-1234",
  "correo": "juan@correo.com",
  "observaciones": "Alergia a penicilina",
  "creadoEn": "2026-08-13T10:00:00Z"
}
```

### 5.2 Cita
```json
{
  "id": "uuid",
  "pacienteId": "uuid",
  "fecha": "2026-08-20",
  "hora": "09:30",
  "medico": "Dra. García",
  "especialidad": "Cardiología",
  "motivo": "Chequeo anual",
  "estado": "Pendiente",
  "creadoEn": "2026-08-13T10:00:00Z"
}
```

---

## 6. Interfaz de Usuario (Pantallas / Vistas)

1. **Dashboard / Resumen:** contadores de citas por estado y citas del día.
2. **Pacientes:** tabla con búsqueda, alta, edición y eliminación.
3. **Citas:** calendario o lista con filtros por fecha/estado, alta, edición y cancelación.
4. **Modal de formulario:** para alta/edición de pacientes y citas.
5. **Modal de confirmación:** para eliminar/cancelar.

---

## 7. Validaciones

- Campos obligatorios: nombre (paciente), fecha y hora (cita).
- Formato de correo válido.
- Teléfono con formato numérico.
- Fecha de nacimiento no futura.
- Fecha/hora de cita no pasada.
- Sin citas duplicadas (paciente + fecha + hora).
- Confirmación antes de eliminar o cancelar.

---

## 8. Criterios de Aceptación

- [ ] Se puede registrar, editar, eliminar y buscar pacientes.
- [ ] Se puede agendar, modificar, cancelar y completar citas.
- [ ] Los datos persisten al recargar la página.
- [ ] Las validaciones bloquean datos inválidos.
- [ ] La interfaz es responsive y en español.
- [ ] Todo funciona abriendo `index.html` directamente en el navegador.

---

## 9. Entregables

- `App-citas/index.html` — aplicación completa (HTML + CSS + JS).
- `App-citas/REQUERIMIENTOS.md` — este documento.
- `App-citas/README.md` — instrucciones de uso (opcional).