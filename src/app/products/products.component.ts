import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductService } from './../product.service';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  products$: Observable<IProduct[]> = this.productsService.products$;

  delete = false;
  productToBeDeleted;
  selectedProduct: IProduct;
  productOpen;

  constructor(private productsService: ProductService) { }

  trackById(index, item) {
    return item.id;
  }

  onDelete(product: IProduct) {
    this.delete = true;
    this.productToBeDeleted = product;
  }

  handleCancel() {
    this.delete = false;
  }

  confirmDelete() {
    this.handleCancel();
    this.productsService.removeProduct(this.productToBeDeleted);
  }

  addProduct() {
    this.productOpen = true;
    this.selectedProduct = undefined;
  }

  onEdit(product) {
    this.productOpen = true;
    this.selectedProduct = product;
  }

  handleFinish(event) {
    if (event && event.product) {
      if (this.selectedProduct) {
        this.productsService.editProduct(this.selectedProduct.id, event.product);
      } else {
        this.productsService.addProduct(event.product);
      }
      this.productOpen = false;
    }
  }

}
