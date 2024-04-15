import {Inject, Injectable} from '@nestjs/common';
import {Product, productProvider} from '../../common/database/models/products.model';
import {CreateProductDto} from './dto/create-product.dto';

@Injectable()
export class ProductsService {

    constructor(@Inject(productProvider.provide) private productRepository: typeof productProvider.useValue){}

    async createProduct(dto: CreateProductDto): Promise<Product> {
        return await this.productRepository.create(dto)
    }

    async getAllProducts() {
        return await this.productRepository.findAll()
    }
}