import { Module } from '@nestjs/common';
import { PublicModule } from './public/public.module';
import { RouterModule } from 'nest-router';
import { routes } from './app.routes';

@Module({
  imports: [
		PublicModule,
    RouterModule.forRoutes(routes),
  ],
})
export class AppModule {}
