export class Empleado {
  id?: number;
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  telefono: string = '';
  fechaContratacion?: Date;
  estado: 'activo' | 'inactivo' = 'activo';
}