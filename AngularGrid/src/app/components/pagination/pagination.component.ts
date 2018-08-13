import { Component } from '@angular/core';
import { GridService } from '../../service/grid.service';


@Component({
    selector: 'grid-pagination',
    templateUrl: './pagination.component.html',
})

export class PaginationComponent {
    constructor(private _assestService: GridService) { }    
}
