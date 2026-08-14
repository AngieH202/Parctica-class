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
 * Busca un paciente por su id.
 * @param {Array} pacientes - Lista de pacientes.
 * @param {string} id - Id del paciente.
 * @returns {Object|undefined} El paciente encontrado o undefined.
 */
function buscarPorId(pacientes, id) {
  return pacientes.find((p) => p.id === id);
}

/**
 * Edita los datos de un paciente existente por su id.
 * @param {Array} pacientes - Lista de pacientes.
 * @param {string} id - Id del paciente a editar.
 * @param {Object} cambios - Campos a actualizar.
 * @returns {boolean} true si se editó, false si no se encontró.
 */
export function editarPaciente(pacientes, id, cambios) {
  const paciente = buscarPorId(pacientes, id);
  if (!paciente) {
    return false;
  }
  Object.assign(paciente, cambios);
  return true;
}

/**
 * Elimina un paciente existente por su id.
 * @param {Array} pacientes - Lista de pacientes.
 * @param {string} id - Id del paciente a eliminar.
 * @returns {boolean} true si se eliminó, false si no se encontró.
 */
export function eliminarPaciente(pacientes, id) {
  if (!buscarPorId(pacientes, id)) {
    return false;
  }
  const indice = pacientes.findIndex((p) => p.id === id);
  pacientes.splice(indice, 1);
  return true;
}