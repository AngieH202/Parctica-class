// Módulo de lógica de negocio para pacientes.

/**
 * Genera un identificador único simple.
 * @returns {string} Un id único.
 */
function generarId() {
  return crypto.randomUUID();
}

/**
 * Construye un objeto paciente a partir de los datos de entrada.
 * @param {Object} datos - Datos del paciente.
 * @returns {Object} Paciente con id y creadoEn generados.
 */
function crearPaciente(datos) {
  return {
    id: generarId(),
    nombre: datos.nombre,
    fechaNacimiento: datos.fechaNacimiento,
    telefono: datos.telefono,
    correo: datos.correo,
    observaciones: datos.observaciones,
    creadoEn: new Date().toISOString(),
  };
}

/**
 * Registra un nuevo paciente.
 * @param {Array} pacientes - Lista actual de pacientes.
 * @param {Object} datos - Datos del paciente a registrar.
 * @returns {Object} El paciente creado.
 */
export function registrarPaciente(pacientes, datos) {
  const paciente = crearPaciente(datos);
  pacientes.push(paciente);
  return paciente;
}

/**
 * Edita los datos de un paciente existente por su id.
 * @param {Array} pacientes - Lista de pacientes.
 * @param {string} id - Id del paciente a editar.
 * @param {Object} cambios - Campos a actualizar.
 * @returns {boolean} true si se editó, false si no se encontró.
 */
export function editarPaciente(pacientes, id, cambios) {
  const paciente = pacientes.find((p) => p.id === id);
  if (!paciente) {
    return false;
  }
  Object.assign(paciente, cambios);
  return true;
}