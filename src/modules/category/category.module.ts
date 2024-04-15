import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categoryProvider } from 'src/common/database/models/category.models';

@Module({
  imports: [CategoryModule],
  controllers: [CategoryController],
  providers: [CategoryService, categoryProvider],
})
export class CategoryModule {}
