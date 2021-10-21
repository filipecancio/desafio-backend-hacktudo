"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("./Category");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "announced_in", type: "timestamptz" }),
    __metadata("design:type", Date)
], Product.prototype, "announcedIn", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "photo_uri" }),
    __metadata("design:type", String)
], Product.prototype, "photoUri", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "address_district" }),
    __metadata("design:type", String)
], Product.prototype, "addressDistrict", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Category_1.Category),
    (0, typeorm_1.JoinTable)({ name: "product_categories" }),
    __metadata("design:type", Array)
], Product.prototype, "categories", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)("products")
], Product);
exports.Product = Product;