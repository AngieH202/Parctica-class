import { describe, it, expect } from 'vitest';
import { registrarPaciente, editarPaciente } from '../src/pacientes.js';

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

describe('RF-02: Editar un paciente', () => {
  it('actualiza los datos de un paciente existente por su id', () => {
    // Arrange
    const pacientes = [
      {
        id: 'p1',
        nombre: 'Juan Pérez',
        fechaNacimiento: '1990-05-12',
        telefono: '555-1234',
        correo: 'juan@correo.com',
        observaciones: 'Alergia a penicilina',
        creadoEn: '2026-08-13T10:00:00Z',
      },
    ];
    const cambios = {
      nombre: 'Juan Pérez García',
      telefono: '555-9999',
      observaciones: 'Sin alergias',
    };

    // Act
    const resultado = editarPaciente(pacientes, 'p1', cambios);

    // Assert
    expect(resultado).toBe(true);
    expect(pacientes[0]).toMatchObject({
      id: 'p1',
      nombre: 'Juan Pérez García',
      telefono: '555-9999',
      observaciones: 'Sin alergias',
      correo: 'juan@correo.com',
    });
  });

  it('devuelve false si el paciente no existe', () => {
    // Arrange
    const pacientes = [{ id: 'p1', nombre: 'Juan' }];

    // Act
    const resultado = editarPaciente(pacientes, 'no-existe', { nombre: 'X' });

    // Assert
    expect(resultado).toBe(false);
    expect(pacientes[0].nombre).toBe('Juan');
  });
});