"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_list_service_1 = require("../../shared/product/product-list.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
var ListComponent = /** @class */ (function () {
    function ListComponent(productListService) {
        this.productListService = productListService;
        this.isLoading = true;
        this.listLoaded = false;
        this.product = "";
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        Promise.resolve(this.productListService.load()).then(function (productObj) {
            _this.productList$ = Observable_1.Observable.of(productObj);
            _this.isLoading = false;
            _this.listLoaded = true;
        }).catch(function (error) {
            alert(error.error);
            _this.isLoading = false;
        });
    };
    ListComponent.prototype.addProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var textField, response_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        if (this.product.trim() === "") {
                            alert("Enter product item");
                            this.isLoading = false;
                            return [2 /*return*/];
                        }
                        textField = this.productTextField.nativeElement;
                        textField.dismissSoftInput();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.productListService.addProduct(this.product)];
                    case 2:
                        response_1 = _a.sent();
                        this.productList$.map(function (product) {
                            product.unshift(response_1);
                        });
                        this.isLoading = false;
                        this.product = "";
                        textField.focus();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        alert(error_1.error);
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ListComponent.prototype.share = function () {
        // let listString = this.productList$.map(product => product.desc)
        //     .join(", ")
        //     .trim();
        // SocialShare.shareText(listString);
    };
    ListComponent.prototype.deleteProduct = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var response_2, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.productListService.deleteProduct(item)];
                    case 2:
                        response_2 = _a.sent();
                        this.productList$ = this.productList$.map(function (x) { return x.filter(function (product) { return product.prodId !== response_2.prodId; }); });
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        alert(error_2.error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxrRkFBK0U7QUFHL0UsOENBQTZEO0FBQzdELGtDQUFnQztBQUNoQyxpQ0FBK0I7QUFDL0Isb0NBQWtDO0FBUWxDO0lBUUksdUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTjFELGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixZQUFPLEdBQVcsRUFBRSxDQUFDO0lBS3JCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFVBQXFCO1lBQ3ZFLEtBQUksQ0FBQyxZQUFZLEdBQUcsdUJBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNYLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUssa0NBQVUsR0FBaEI7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzt3QkFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs0QkFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7NEJBQ3ZCLE1BQU0sZ0JBQUM7d0JBQ1gsQ0FBQzt3QkFHRyxTQUFTLEdBQWMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQzt3QkFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Ozs7d0JBR1IscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUFqRSxhQUFXLFNBQXNEO3dCQUN2RSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQWtCOzRCQUNyQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVEsQ0FBQyxDQUFDO3dCQUM5QixDQUFDLENBQUMsQ0FBQTt3QkFDRixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7d0JBQ2xCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozt3QkFFbEIsS0FBSyxDQUFDLE9BQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7OztLQUU5QjtJQUVELDZCQUFLLEdBQUw7UUFDSSxrRUFBa0U7UUFDbEUsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixxQ0FBcUM7SUFDekMsQ0FBQztJQUVLLHFDQUFhLEdBQW5CLFVBQW9CLElBQWE7Ozs7Ozt3QkFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7d0JBRUQscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTVELGFBQVcsU0FBaUQ7d0JBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sS0FBSyxVQUFRLENBQUMsTUFBTSxFQUFsQyxDQUFrQyxDQUFDLEVBQXZELENBQXVELENBQUMsQ0FBQzt3QkFDMUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7d0JBRXZCLEtBQUssQ0FBQyxPQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7Ozs7S0FFOUI7SUE3RDhCO1FBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7a0NBQW1CLGlCQUFVOzJEQUFDO0lBTm5ELGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7WUFDaEUsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7U0FDbEMsQ0FBQzt5Q0FTMEMseUNBQWtCO09BUmpELGFBQWEsQ0FvRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvZHVjdC9wcm9kdWN0XCI7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb2R1Y3QvcHJvZHVjdC1saXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbUHJvZHVjdExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm9kdWN0TGlzdCQ6IFJ4T2JzZXJ2YWJsZTxQcm9kdWN0W10+O1xuICAgIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gICAgbGlzdExvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJvZHVjdDogc3RyaW5nID0gXCJcIjtcbiAgICBAVmlld0NoaWxkKFwicHJvZHVjdFRleHRGaWVsZFwiKSBwcm9kdWN0VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0TGlzdFNlcnZpY2U6IFByb2R1Y3RMaXN0U2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHRoaXMucHJvZHVjdExpc3RTZXJ2aWNlLmxvYWQoKSkudGhlbigocHJvZHVjdE9iajogUHJvZHVjdFtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMaXN0JCA9IFJ4T2JzZXJ2YWJsZS5vZihwcm9kdWN0T2JqKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yLmVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGFkZFByb2R1Y3QoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRW50ZXIgcHJvZHVjdCBpdGVtXCIpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRGlzbWlzcyBrZXlib2FyZCB5ZXNcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5wcm9kdWN0VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5wcm9kdWN0TGlzdFNlcnZpY2UuYWRkUHJvZHVjdCh0aGlzLnByb2R1Y3QpO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlzdCQubWFwKChwcm9kdWN0OiBQcm9kdWN0W10pID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnVuc2hpZnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBcIlwiO1xuICAgICAgICAgICAgdGV4dEZpZWxkLmZvY3VzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvci5lcnJvcik7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hhcmUoKSB7XG4gICAgICAgIC8vIGxldCBsaXN0U3RyaW5nID0gdGhpcy5wcm9kdWN0TGlzdCQubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5kZXNjKVxuICAgICAgICAvLyAgICAgLmpvaW4oXCIsIFwiKVxuICAgICAgICAvLyAgICAgLnRyaW0oKTtcbiAgICAgICAgLy8gU29jaWFsU2hhcmUuc2hhcmVUZXh0KGxpc3RTdHJpbmcpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlbGV0ZVByb2R1Y3QoaXRlbTogUHJvZHVjdCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucHJvZHVjdExpc3RTZXJ2aWNlLmRlbGV0ZVByb2R1Y3QoaXRlbSk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMaXN0JCA9IHRoaXMucHJvZHVjdExpc3QkLm1hcCgoeCkgPT4geC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LnByb2RJZCAhPT0gcmVzcG9uc2UucHJvZElkKSk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IuZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==