// Módulo de lógica de negocio para pacientes.

/**
 * Genera un identificador único simple.
 * @returns {string} Un id único.
 */
function generarId() {
  return crypto.randomUUID();
}

/**
 * Registra un nuevo paciente.
 * @param {Array} pacientes - Lista actual de pacientes.
 * @param {Object} datos - Datos del paciente a registrar.
 * @returns {Object} El paciente creado.
 */
export function registrarPaciente(pacientes, datos) {
  const paciente = {
    id: generarId(),
    nombre: datos.nombre,
    fechaNacimiento: datos.fechaNacimiento,
    telefono: datos.telefono,
    correo: datos.correo,
    observaciones: datos.observaciones,
    creadoEn: new Date().toISOString(),
  };
  pacientes.push(paciente);
  return paciente;
}