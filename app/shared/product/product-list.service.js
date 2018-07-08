"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var helpers_1 = require("../../utils/helpers");
var config_1 = require("../config");
var ProductListService = /** @class */ (function () {
    function ProductListService(http) {
        this.http = http;
        this.baseUrl = config_1.Config.apiUrl + "products";
    }
    ProductListService.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.baseUrl + "/getallproducts").toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductListService.prototype.addProduct = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        product = {
                            desc: name,
                            price: 20,
                            qty: 6,
                            img: "https://images.unsplash.com/photo-1462636892587"
                        };
                        return [4 /*yield*/, this.http.post(this.baseUrl + "/addProduct", product, { headers: helpers_1.getCommonHeaders() }).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductListService.prototype.deleteProduct = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.delete(this.baseUrl + "/product/" + item.prodId, { headers: helpers_1.getCommonHeaders() }).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductListService);
    return ProductListService;
}());
exports.ProductListService = ProductListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFDbEQsK0NBQXVEO0FBRXZELG9DQUFtQztBQUluQztJQUdJLDRCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztJQUVHLENBQUM7SUFFbkMsaUNBQUksR0FBVjs7Ozs0QkFDVyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLE9BQU8sb0JBQWlCLENBQ25DLENBQUMsU0FBUyxFQUFFLEVBQUE7NEJBRmIsc0JBQU8sU0FFTSxFQUFDOzs7O0tBQ2pCO0lBRUssdUNBQVUsR0FBaEIsVUFBaUIsSUFBWTs7Ozs7O3dCQUNyQixPQUFPLEdBQUc7NEJBQ1YsSUFBSSxFQUFFLElBQUk7NEJBQ1YsS0FBSyxFQUFFLEVBQUU7NEJBQ1QsR0FBRyxFQUFFLENBQUM7NEJBQ04sR0FBRyxFQUFFLGlEQUFpRDt5QkFDekQsQ0FBQTt3QkFDTSxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsSUFBSSxDQUFDLE9BQU8sZ0JBQWEsRUFDNUIsT0FBTyxFQUNQLEVBQUUsT0FBTyxFQUFFLDBCQUFnQixFQUFFLEVBQUUsQ0FDbEMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs0QkFKYixzQkFBTyxTQUlNLEVBQUM7Ozs7S0FDakI7SUFFSywwQ0FBYSxHQUFuQixVQUFvQixJQUFhOzs7OzRCQUN0QixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDdEIsSUFBSSxDQUFDLE9BQU8saUJBQVksSUFBSSxDQUFDLE1BQVEsRUFDeEMsRUFBRSxPQUFPLEVBQUUsMEJBQWdCLEVBQUUsRUFBRSxDQUNsQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzRCQUhiLHNCQUFPLFNBR00sRUFBQzs7OztLQUNqQjtJQTlCUSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTt5Q0FJaUIsaUJBQVU7T0FIM0Isa0JBQWtCLENBK0I5QjtJQUFELHlCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBnZXRDb21tb25IZWFkZXJzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hlbHBlcnNcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJ+L3NoYXJlZC9wcm9kdWN0L3Byb2R1Y3RcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0U2VydmljZSB7XG4gICAgYmFzZVVybCA9IENvbmZpZy5hcGlVcmwgKyBcInByb2R1Y3RzXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgYXN5bmMgbG9hZCgpOiBQcm9taXNlPFByb2R1Y3RbXT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmdldDxQcm9kdWN0W10+KFxuICAgICAgICAgICAgYCR7dGhpcy5iYXNlVXJsfS9nZXRhbGxwcm9kdWN0c2BcbiAgICAgICAgKS50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBhc3luYyBhZGRQcm9kdWN0KG5hbWU6IHN0cmluZyk6IFByb21pc2U8UHJvZHVjdD4ge1xuICAgICAgICBsZXQgcHJvZHVjdCA9IHtcbiAgICAgICAgICAgIGRlc2M6IG5hbWUsXG4gICAgICAgICAgICBwcmljZTogMjAsXG4gICAgICAgICAgICBxdHk6IDYsXG4gICAgICAgICAgICBpbWc6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NjI2MzY4OTI1ODdcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHAucG9zdDxQcm9kdWN0PihcbiAgICAgICAgICAgIGAke3RoaXMuYmFzZVVybH0vYWRkUHJvZHVjdGAsXG4gICAgICAgICAgICBwcm9kdWN0LFxuICAgICAgICAgICAgeyBoZWFkZXJzOiBnZXRDb21tb25IZWFkZXJzKCkgfVxuICAgICAgICApLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlbGV0ZVByb2R1Y3QoaXRlbTogUHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmRlbGV0ZTxQcm9kdWN0PihcbiAgICAgICAgICAgIGAke3RoaXMuYmFzZVVybH0vcHJvZHVjdC8ke2l0ZW0ucHJvZElkfWAsXG4gICAgICAgICAgICB7IGhlYWRlcnM6IGdldENvbW1vbkhlYWRlcnMoKSB9LFxuICAgICAgICApLnRvUHJvbWlzZSgpO1xuICAgIH1cbn0iXX0=