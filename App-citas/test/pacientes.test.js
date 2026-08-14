import { describe, it, expect } from 'vitest';
import { registrarPaciente } from '../src/pacientes.js';

describe('RF-01: Registrar un paciente', () => {
  it('agrega un paciente nuevo a la lista y devuelve el paciente creado', () => {
    // Arrange
    const pacientes = [];
    const datos = {
      nombre: 'Juan Pérez',
      fechaNacimiento: '1990-05-12',
      telefono: '555-1234',
      correo: 'juan@correo.com',
      observaciones: 'Alergia a penicilina',
    };

    // Act
    const resultado = registrarPaciente(pacientes, datos);

    // Assert
    expect(pacientes).toHaveLength(1);
    expect(pacientes[0]).toMatchObject({
      nombre: 'Juan Pérez',
      fechaNacimiento: '1990-05-12',
      telefono: '555-1234',
      correo: 'juan@correo.com',
      observaciones: 'Alergia a penicilina',
    });
    expect(pacientes[0].id).toBeDefined();
    expect(pacientes[0].creadoEn).toBeDefined();
    expect(resultado).toBe(pacientes[0]);
  });
});