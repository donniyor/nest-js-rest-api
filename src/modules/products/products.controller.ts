import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {}

    @Post()
    create(@Body() productDto: CreateProductDto) {
        return this.productService.createProduct(productDto)
    }

    @Get()
    getAll() {
        return this.productService.getAllProducts()
    }
}
