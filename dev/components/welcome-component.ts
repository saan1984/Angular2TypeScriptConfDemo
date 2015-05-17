import {Component, View} from 'angular2/angular2';
@Component({
    selector: 'welcome'
})
@View({
    template: '<h1>Welcome {{ name }}</h1>'
})
export class WelcomeComponent {
    name: string;
    constructor() {
        this.name = 'Sandeep';
    }
}