import {Component, View} from 'angular2/angular2';
@Component({
    selector: 'bye'
})
@View({
    template: '<h1>Bye {{ name }}</h1>'
})
export class ByeComponent {
    name: string;
    constructor() {
        this.name = 'Sandeep';
    }
}
