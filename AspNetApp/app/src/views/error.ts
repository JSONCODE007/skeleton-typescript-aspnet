import {RoutableComponentActivate, RouteConfig} from 'aurelia-router';

export class Error implements RoutableComponentActivate {
    public userHasRole: boolean = false;

    public activate(params: any, routeConfig: RouteConfig): void {
        this.userHasRole = routeConfig.settings.roles.length > 0;
    }
}
