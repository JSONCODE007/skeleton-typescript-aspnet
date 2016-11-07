import {
  NavigationInstruction,
  Next,
  PipelineStep,
  RedirectToRoute
} from 'aurelia-router';

export class AuthorizeStep implements PipelineStep {
  public run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    let isNavigatingToError = navigationInstruction.fragment.indexOf('error') !== -1;
    let userHasUiRoles = navigationInstruction.getAllInstructions().some(i => i.config.settings.roles.length > 0);

    if (isNavigatingToError || userHasUiRoles) {
      return next();
    } else {
      return next.cancel(new RedirectToRoute('error'));
    }
  }
}
