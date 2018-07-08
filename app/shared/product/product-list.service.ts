import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { getCommonHeaders } from "../../utils/helpers";

import { Config } from "../config";
import { Product } from "~/shared/product/product";

@Injectable()
export class ProductListService {
    baseUrl = Config.apiUrl + "products";

    constructor(private http: HttpClient) { }

    async load(): Promise<Product[]> {
        return await this.http.get<Product[]>(
            `${this.baseUrl}/getallproducts`
        ).toPromise();
    }

    async addProduct(name: string): Promise<Product> {
        let product = {
            desc: name,
            price: 20,
            qty: 6,
            img: "https://images.unsplash.com/photo-1462636892587"
        }
        return await this.http.post<Product>(
            `${this.baseUrl}/addProduct`,
            product,
            { headers: getCommonHeaders() }
        ).toPromise();
    }

    async deleteProduct(item: Product): Promise<Product> {
        return await this.http.delete<Product>(
            `${this.baseUrl}/product/${item.prodId}`,
            { headers: getCommonHeaders() },
        ).toPromise();
    }
}