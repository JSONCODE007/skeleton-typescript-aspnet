import {AuthorizeStep} from './authorize-step';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  protected router: Router;

  protected configureRouter(config: RouterConfiguration, router: Router) {
    let userUiRoles = this.getUserUiRoles();
    config.title = '';
    config.addAuthorizeStep(AuthorizeStep);
    config.map([
      {
        moduleId: 'views/welcome',
        name: 'welcome',
        nav: true,
        route: ['', 'welcome'],
        settings: { roles: userUiRoles },
        title: 'Welcome'
      },
      {
        moduleId: 'views/error',
        name: 'error',
        nav: false,
        route: 'error',
        settings: { roles: userUiRoles },
        title: 'Error'
      }
    ]);

    this.router = router;
  }
  private getUserUiRoles(): string[] {
    let cookies = document.cookie.split(' ');
    let rolesCookie = cookies.filter((cookie) => cookie.indexOf('.UIROLES') !== -1)[0];
    if (!rolesCookie) {
      return [];
    } else {
      let cookieValue = rolesCookie.substring(rolesCookie.indexOf('=') + 1);
      return cookieValue.split('|').filter(val => val.length > 0);
    }
  }
}
