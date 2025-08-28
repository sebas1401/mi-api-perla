# API Empleados - Internet Perla

API REST desarrollada con NestJS para gestionar empleados de Internet Perla.

## Características
- CRUD completo para empleados
- Validaciones con class-validator
- Arquitectura por capas
- Sin base de datos real

## Endpoints
- POST /empleados - Crear empleado
- GET /empleados - Ver todos
- GET /empleados/:id - Ver uno
- PATCH /empleados/:id - Actualizar
- DELETE /empleados/:id - Eliminar

## Tecnologías
- NestJS
- TypeScript
- class-validator
- class-transformer

## Instalación
```bash
npm install
npm run start:dev
