import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Product } from "../../shared/product/product";
import { ProductListService } from "../../shared/product/product-list.service";
import { TextField } from 'ui/text-field';
import * as SocialShare from "nativescript-social-share";
import { Observable as RxObservable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

@Component({
    selector: "list",
    templateUrl: "pages/list/list.html",
    styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
    providers: [ProductListService]
})
export class ListComponent implements OnInit {
    productList$: RxObservable<Product[]>;
    isLoading: boolean = true;
    listLoaded: boolean = false;

    product: string = "";
    @ViewChild("productTextField") productTextField: ElementRef;

    constructor(private productListService: ProductListService) {

    }

    ngOnInit() {
        this.isLoading = true;
        Promise.resolve(this.productListService.load()).then((productObj: Product[]) => {
            this.productList$ = RxObservable.of(productObj);
            this.isLoading = false;
            this.listLoaded = true;
        }).catch((error) => {
            alert(error.error);
            this.isLoading = false;
        });
    }

    async addProduct() {
        this.isLoading = true;
        if (this.product.trim() === "") {
            alert("Enter product item");
            this.isLoading = false;
            return;
        }

        //Dismiss keyboard yes
        let textField = <TextField>this.productTextField.nativeElement;
        textField.dismissSoftInput();

        try {
            const response = await this.productListService.addProduct(this.product);
            this.productList$.map((product: Product[]) => {
                product.unshift(response);
            })
            this.isLoading = false;
            this.product = "";
            textField.focus();
        } catch (error) {
            alert(error.error);
            this.isLoading = false;
        }
    }

    share() {
        // let listString = this.productList$.map(product => product.desc)
        //     .join(", ")
        //     .trim();
        // SocialShare.shareText(listString);
    }

    async deleteProduct(item: Product) {
        this.isLoading = true;
        try {
            const response = await this.productListService.deleteProduct(item);
            this.productList$ = this.productList$.map((x) => x.filter(product => product.prodId !== response.prodId));
            this.isLoading = false;
        } catch (error) {
            alert(error.error);
            this.isLoading = false;
        }
    }
}
