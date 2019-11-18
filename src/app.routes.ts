import { Routes } from 'nest-router'
import { publicRoutes } from './public/public.router'

export const routes: Routes = [{ path: 'public', children: publicRoutes }]
