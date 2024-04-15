import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { productProvider } from 'src/common/database/models/products.model';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, productProvider]
})
export class ProductsModule {}
