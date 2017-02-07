namespace IFP.Components{
  const name='alerts';
  const template='/client/ngApp/components/alerts/alerts.html';
  export class Alerts {
    public messages = [];
    constructor(

    ) {


    }
    close (i){
      this.messages.splice(i,1);
    }
  }

  angular.module('ifp').component(name, {
      templateUrl: template,
      controller: IFP.Components.Alerts,
      controllerAs: 'vm',
      bindings: {
        messages:'<'
      }

  })
}
