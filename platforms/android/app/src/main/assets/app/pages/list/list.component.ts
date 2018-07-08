import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Product } from "../../shared/product/product";
import { ProductListService } from "../../shared/product/product-list.service";
import { TextField } from 'ui/text-field';
import * as SocialShare from "nativescript-social-share";


@Component({
    selector: "list",
    templateUrl: "pages/list/list.html",
    styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
    providers: [ProductListService]
})
export class ListComponent implements OnInit {
    productList: Array<Product>;
    isLoading: boolean = true;
    listLoaded: boolean = false;

    product: string = "";
    @ViewChild("productTextField") productTextField: ElementRef;

    constructor(private productListService: ProductListService) {

    }

    async ngOnInit() {
        this.isLoading = true;
        try {
            this.productList = await this.productListService.load();
            this.isLoading = false;
            this.listLoaded = true;
        } catch (error) {
            alert(error.error);
            this.isLoading = false;
        };
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
            this.productList.unshift(await this.productListService.addProduct(this.product));
            this.isLoading = false;
            this.product = "";
            textField.focus();
        } catch (error) {
            alert(error.error);
            this.isLoading = false;
        }
    }

    share() {
        let listString = this.productList.map(product => product.desc)
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    }

    async deleteProduct(item: Product) {
        this.isLoading = true;
        try {
            const response = await this.productListService.deleteProduct(item);
            this.productList = this.productList.filter(product => product.prodId !== response.prodId);
            this.isLoading = false;
        } catch (error) {
            alert(error.error);
            this.isLoading = false;
        }
    }
}
