// Módulo de lógica de negocio para pacientes.

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