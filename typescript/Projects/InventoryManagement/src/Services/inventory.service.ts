import { CustomerRepo } from "../Repositories/customer.repo";
import { OrderRepo } from "../Repositories/orderRepository.repo";
import { ProductRepo } from "../Repositories/productRepo.repo";
import { Result } from "../types/result.type";
import { Product } from "../types/product.type";

export class InventoryService {
  constructor(
    private customerRepo: CustomerRepo,
    private orderRepo: OrderRepo,
    private productRepo: ProductRepo,
  ) {}

  restockProduct(productId: string, quantity: number): Result<Product> {
    let product = this.productRepo.getItem(productId);
    if (!product) {
      return {
        success: false,
        error: "Product not Found",
      };
    }
    if (quantity <= 0) {
      return {
        success: false,
        error: "Quantity must be greater than zero",
      };
    }

    this.productRepo.update(productId, {
      stockQnty: product.stockQnty + quantity,
    });

    return {
      success: true,
      data: product
    };
  }
}
