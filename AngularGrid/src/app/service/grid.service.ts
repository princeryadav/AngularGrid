import { Injectable } from '@angular/core';
import { IAssest } from '../interface/assest';

@Injectable()

export class GridService {

    getAssest(): IAssest[] {

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
        ]
    }

    getPagination(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        let totalPages = Math.ceil(totalItems / pageSize);

        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {

            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);


        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

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
    }
}
