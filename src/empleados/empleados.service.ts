import { Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  private empleados: Empleado[] = [];
  private nextId = 1;

  create(createEmpleadoDto: CreateEmpleadoDto): Empleado {
    const nuevoEmpleado: Empleado = {
      id: this.nextId++,
      ...createEmpleadoDto,
      estado: createEmpleadoDto.estado ?? "activo",
    };
    this.empleados.push(nuevoEmpleado);
    return nuevoEmpleado;
  }

  findAll(): Empleado[] {
    return this.empleados;
  }

  findOne(id: number): Empleado | null {
    const empleado = this.empleados.find(emp => emp.id === id);
    return empleado ?? null;
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto): Empleado | null {
    const index = this.empleados.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.empleados[index] = { ...this.empleados[index], ...updateEmpleadoDto };
      return this.empleados[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.empleados.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.empleados.splice(index, 1);
      return true;
    }
    return false;
  }
}