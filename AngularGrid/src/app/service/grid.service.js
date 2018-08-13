"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GridService = /** @class */ (function () {
    function GridService() {
    }
    GridService.prototype.getAssest = function () {
        return [
            { Barcode: '101', Manufacturer: 'nike', ModelNumber: '1#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '102', Manufacturer: 'nike', ModelNumber: '1#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '103', Manufacturer: 'nike', ModelNumber: '1#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '104', Manufacturer: 'nike', ModelNumber: '1#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '105', Manufacturer: 'nike', ModelNumber: '1#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '106', Manufacturer: 'adidas', ModelNumber: '2#1#%454', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '107', Manufacturer: 'adidas', ModelNumber: '2#1#%454', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '108', Manufacturer: 'adidas', ModelNumber: '2#1#%454', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '109', Manufacturer: 'adidas', ModelNumber: '2#1#%454', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '110', Manufacturer: 'adidas', ModelNumber: '2#1#%454', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '111', Manufacturer: 'Rodester', ModelNumber: '3#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '112', Manufacturer: 'Rodester', ModelNumber: '3#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '113', Manufacturer: 'Rodester', ModelNumber: '3#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '114', Manufacturer: 'Rodester', ModelNumber: '3#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '115', Manufacturer: 'Rodester', ModelNumber: '3#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '116', Manufacturer: 'HRX', ModelNumber: '4#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '117', Manufacturer: 'HRX', ModelNumber: '4#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '118', Manufacturer: 'HRX', ModelNumber: '4#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '119', Manufacturer: 'HRX', ModelNumber: '4#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
            { Barcode: '120', Manufacturer: 'HRX', ModelNumber: '4#1#%453', Building: 'HILL A1', RoomNo: '1', Quantity: 15 },
        ];
    };
    GridService.prototype.getPagination = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        var totalPages = Math.ceil(totalItems / pageSize);
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    GridService = __decorate([
        core_1.Injectable()
    ], GridService);
    return GridService;
}());
exports.GridService = GridService;
//# sourceMappingURL=grid.service.js.map