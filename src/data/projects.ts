export type Project = {
	name: string;
	description: string;
	stack: string[];
	repoUrl: string;
};

export const projects: Project[] = [
	{
		name: 'CMLR — Clínica Online',
		description:
			'Aplicación SaaS para que profesionales de salud gestionen su consultorio: registro y ' +
			'login de profesionales, alta y búsqueda de pacientes, ficha con historia clínica y ' +
			'registro de consultas. Backend en Node/TypeScript con TypeORM y PostgreSQL, ' +
			'autenticación con JWT, y frontend en React con Tailwind. Levantado con Docker Compose ' +
			'para desarrollo local.',
		stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'TypeORM', 'React', 'Tailwind CSS', 'Docker'],
		repoUrl: 'https://github.com/FLBracco/CMLR',
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
];
