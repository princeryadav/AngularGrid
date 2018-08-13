import { Component, OnInit } from '@angular/core';
import { GridService } from '../../service/grid.service';
import { IAssest } from '../../interface/assest';

@Component({
    selector: 'grid-view',
    templateUrl: './grid.component.html'
})

export class GridComponent implements OnInit {

    assests: IAssest[];
    pager: any = {};
    pagedItems: any[];
    constructor(private _assestService: GridService) { }

    ngOnInit() {
        this.assests = this._assestService.getAssest();
        this.setPage(1);
    }
    setPage(page: number) {
        this.pager = this._assestService.getPagination(this.assests.length, page);
        this.pagedItems = this.assests.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}