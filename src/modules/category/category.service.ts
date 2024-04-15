import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { categoryProvider } from 'src/common/database/models/category.models';

@Injectable()
export class CategoryService {
  constructor(@Inject(categoryProvider.provide) private categoryRepository: typeof categoryProvider.useValue) { }

  async create(dto: CreateCategoryDto) {
    return await this.categoryRepository.create(dto);
  }

  async findAll() {
    return await this.categoryRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
