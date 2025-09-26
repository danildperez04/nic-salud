# Ruta de proyecto Nic-salud

## Diseno

### Base de datos

- [x] Definir las entidades principales en la base de datos
- [x] Definir las relaciones entre las tablas
- [x] Decidir tecnologias a utilizar

### Interfaces de usuario

- [ ]
- [ ]

## Desarrollo

### Backend

- [x] Inicializar el backend con Express
- [x] Agregar las variables de entorno en el archivo .env
- [x] Configurar TypeOrm
- [x] Users: controladores, rutas y validaciones (update/remove, DTOs, username)
- [x] Auth: login/register + JWT, configuración en `config.ts`
- [x] Patients: CRUD con soft-delete, DTOs y validación
- [ ] Entities: revisión y finalizar relaciones (in-progress)
- [ ] Build: instalar dependencias y compilar (in-progress)
- [ ] Tests: integración unitarias/funcionales (not-started)
- [ ] Migrations / sincronización de esquema (not-started)
- [ ] Seeds / datos de ejemplo (not-started)

### Frontend

- [x] Componentes UI implementados (LoginForm, RegisterForm, Navbar, etc.)
- [ ] Integración con backend (in-progress)

### Siguientes pasos recomendados

1. Ejecutar `npm install` y `npm run build` en `backend` para validar compilación.
2. Revisar y terminar relaciones de entidades (cardinalidades, cascades, onDelete).
3. Implementar middleware `auth` para proteger rutas y aplicarlo en endpoints sensibles.
4. Integrar frontend con endpoints de auth (login/register) y patients.
