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
var core_1 = require("@angular/core");
var grid_service_1 = require("../../service/grid.service");
var GridComponent = /** @class */ (function () {
    function GridComponent(_assestService) {
        this._assestService = _assestService;
        this.pager = {};
    }
    GridComponent.prototype.ngOnInit = function () {
        this.assests = this._assestService.getAssest();
        this.setPage(1);
    };
    GridComponent.prototype.setPage = function (page) {
        this.pager = this._assestService.getPagination(this.assests.length, page);
        this.pagedItems = this.assests.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    GridComponent = __decorate([
        core_1.Component({
            selector: 'grid-view',
            templateUrl: './grid.component.html'
        }),
        __metadata("design:paramtypes", [grid_service_1.GridService])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map