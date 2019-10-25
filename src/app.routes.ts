import { Routes } from 'nest-router';
import { publicRoutes } from './public/public.routes';

export const routes: Routes = [
	{ path: 'public', children: publicRoutes },
];
