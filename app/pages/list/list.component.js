"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_list_service_1 = require("../../shared/product/product-list.service");
var SocialShare = require("nativescript-social-share");
var ListComponent = /** @class */ (function () {
    function ListComponent(productListService) {
        this.productListService = productListService;
        this.isLoading = true;
        this.listLoaded = false;
        this.product = "";
    }
    ListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isLoading = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.productListService.load()];
                    case 2:
                        _a.productList = _b.sent();
                        this.isLoading = false;
                        this.listLoaded = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        alert(error_1.error);
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 4:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ListComponent.prototype.addProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var textField, _a, _b, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.isLoading = true;
                        if (this.product.trim() === "") {
                            alert("Enter product item");
                            this.isLoading = false;
                            return [2 /*return*/];
                        }
                        textField = this.productTextField.nativeElement;
                        textField.dismissSoftInput();
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = (_a = this.productList).unshift;
                        return [4 /*yield*/, this.productListService.addProduct(this.product)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        this.isLoading = false;
                        this.product = "";
                        textField.focus();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _c.sent();
                        alert(error_2.error);
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ListComponent.prototype.share = function () {
        var listString = this.productList.map(function (product) { return product.desc; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    };
    ListComponent.prototype.deleteProduct = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var response_1, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.productListService.deleteProduct(item)];
                    case 2:
                        response_1 = _a.sent();
                        this.productList = this.productList.filter(function (product) { return product.prodId !== response_1.prodId; });
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        alert(error_3.error);
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.ViewChild("productTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], ListComponent.prototype, "productTextField", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "pages/list/list.html",
            styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
            providers: [product_list_service_1.ProductListService]
        }),
        __metadata("design:paramtypes", [product_list_service_1.ProductListService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxrRkFBK0U7QUFFL0UsdURBQXlEO0FBU3pEO0lBUUksdUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTjFELGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixZQUFPLEdBQVcsRUFBRSxDQUFDO0lBS3JCLENBQUM7SUFFSyxnQ0FBUSxHQUFkOzs7Ozs7d0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7d0JBRWxCLEtBQUEsSUFBSSxDQUFBO3dCQUFlLHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQXZELEdBQUssV0FBVyxHQUFHLFNBQW9DLENBQUM7d0JBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7Ozt3QkFFdkIsS0FBSyxDQUFDLE9BQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Ozt3QkFDMUIsQ0FBQzs7Ozs7S0FDTDtJQUVLLGtDQUFVLEdBQWhCOzs7Ozs7d0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDN0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7NEJBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzRCQUN2QixNQUFNLGdCQUFDO3dCQUNYLENBQUM7d0JBR0csU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7d0JBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOzs7O3dCQUd6QixLQUFBLENBQUEsS0FBQSxJQUFJLENBQUMsV0FBVyxDQUFBLENBQUMsT0FBTyxDQUFBO3dCQUFDLHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBL0UsY0FBeUIsU0FBc0QsRUFBQyxDQUFDO3dCQUNqRixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7d0JBQ2xCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozt3QkFFbEIsS0FBSyxDQUFDLE9BQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7OztLQUU5QjtJQUVELDZCQUFLLEdBQUw7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxDQUFDO2FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixJQUFJLEVBQUUsQ0FBQztRQUNaLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVLLHFDQUFhLEdBQW5CLFVBQW9CLElBQWE7Ozs7Ozt3QkFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7d0JBRUQscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTVELGFBQVcsU0FBaUQ7d0JBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxLQUFLLFVBQVEsQ0FBQyxNQUFNLEVBQWxDLENBQWtDLENBQUMsQ0FBQzt3QkFDMUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7d0JBRXZCLEtBQUssQ0FBQyxPQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7Ozs7S0FFOUI7SUExRDhCO1FBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7a0NBQW1CLGlCQUFVOzJEQUFDO0lBTm5ELGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7WUFDaEUsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7U0FDbEMsQ0FBQzt5Q0FTMEMseUNBQWtCO09BUmpELGFBQWEsQ0FpRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvZHVjdC9wcm9kdWN0XCI7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb2R1Y3QvcHJvZHVjdC1saXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtQcm9kdWN0TGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb2R1Y3RMaXN0OiBBcnJheTxQcm9kdWN0PjtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGxpc3RMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb2R1Y3Q6IHN0cmluZyA9IFwiXCI7XG4gICAgQFZpZXdDaGlsZChcInByb2R1Y3RUZXh0RmllbGRcIikgcHJvZHVjdFRleHRGaWVsZDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdExpc3RTZXJ2aWNlOiBQcm9kdWN0TGlzdFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIGFzeW5jIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMaXN0ID0gYXdhaXQgdGhpcy5wcm9kdWN0TGlzdFNlcnZpY2UubG9hZCgpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvci5lcnJvcik7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGFkZFByb2R1Y3QoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRW50ZXIgcHJvZHVjdCBpdGVtXCIpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRGlzbWlzcyBrZXlib2FyZCB5ZXNcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5wcm9kdWN0VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExpc3QudW5zaGlmdChhd2FpdCB0aGlzLnByb2R1Y3RMaXN0U2VydmljZS5hZGRQcm9kdWN0KHRoaXMucHJvZHVjdCkpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IFwiXCI7XG4gICAgICAgICAgICB0ZXh0RmllbGQuZm9jdXMoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yLmVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaGFyZSgpIHtcbiAgICAgICAgbGV0IGxpc3RTdHJpbmcgPSB0aGlzLnByb2R1Y3RMaXN0Lm1hcChwcm9kdWN0ID0+IHByb2R1Y3QuZGVzYylcbiAgICAgICAgICAgIC5qb2luKFwiLCBcIilcbiAgICAgICAgICAgIC50cmltKCk7XG4gICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dChsaXN0U3RyaW5nKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWxldGVQcm9kdWN0KGl0ZW06IFByb2R1Y3QpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByb2R1Y3RMaXN0U2VydmljZS5kZWxldGVQcm9kdWN0KGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlzdCA9IHRoaXMucHJvZHVjdExpc3QuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5wcm9kSWQgIT09IHJlc3BvbnNlLnByb2RJZCk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IuZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==