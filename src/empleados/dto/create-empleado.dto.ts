import { IsNotEmpty, IsString, IsPhoneNumber, IsDate } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  apellido!: string;

  @IsString()
  @IsNotEmpty()
  cargo!: string;

  @IsPhoneNumber('CO')
  @IsNotEmpty()
  telefono!: string;

  @IsDate()
  fechaContratacion?: Date;

  @IsString()
  estado?: 'activo' | 'inactivo';
}