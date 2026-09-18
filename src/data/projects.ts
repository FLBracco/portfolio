export type Project = {
	name: string;
	description: string;
	stack: string[];
	repoUrl?: string;
	demoUrl?: string;
};

export const projects: Project[] = [
	{
		name: 'Destino Turístico',
		description:
			'Backend de una plataforma de turismo (alojamientos, experiencias y reservas) ' +
			'desarrollada para una empresa — proyecto privado, sin repositorio público. Diseñé y ' +
			'construí la API en Node/TypeScript con Express y TypeORM sobre PostgreSQL: ~20 ' +
			'módulos de dominio y más de 49 entidades, sistema de roles y permisos (RBAC) ' +
			'granular, autenticación vía Supabase (JWT ES256/JWKS) con step-up por PIN para ' +
			'operaciones sensibles, máquinas de estado para proveedores y reservas con ' +
			'prevención de solapamiento de fechas, validación con Zod y tests unitarios y ' +
			'end-to-end.',
		stack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'TypeORM', 'Supabase', 'Zod'],
	},
	{
		name: 'ClinicAR',
		description:
			'Aplicación SaaS para que profesionales de salud gestionen su consultorio: registro y ' +
			'login de profesionales, alta y búsqueda de pacientes, ficha con historia clínica y ' +
			'registro de consultas. Backend en Node/TypeScript con TypeORM y PostgreSQL, ' +
			'autenticación con JWT, y frontend en React con Tailwind. Levantado con Docker Compose ' +
			'para desarrollo local.',
		stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'TypeORM', 'React', 'Tailwind CSS', 'Docker'],
		repoUrl: 'https://github.com/FLBracco/CMLR',
		demoUrl: 'https://cmlr-api.onrender.com/',
	},
	{
		name: 'MiniStock API',
		description:
			'API REST para la gestión de stock de un minimarket: CRUD de productos y categorías, ' +
			'registro de movimientos de inventario asociados al usuario que los realiza, y ' +
			'autenticación/autorización con JWT. Validación de datos con class-validator y ' +
			'persistencia con TypeORM sobre PostgreSQL.',
		stack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'TypeORM', 'JWT'],
		repoUrl: 'https://github.com/FLBracco/ministock',
	},
	{
		name: 'Taskify',
		description:
			'API REST para gestión de tareas personales: registro, login y logout de ' +
			'usuarios, CRUD de tareas y categorías con relación many-to-many, y ' +
			'autenticación con JWT. Validación de datos con Zod, contraseñas ' +
			'hasheadas con bcrypt. Backend en Node/TypeScript con Express, sobre ' +
			'PostgreSQL sin ORM (SQL directo).',
		stack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Zod'],
		repoUrl: 'https://github.com/FLBracco/taskify',
	},
];
