namespace IFP.Components{
  const name='share';
  const template='/client/ngApp/components/share/share.html';
  export class Share {

  }
  angular.module('ifp').component(name,{
    templateUrl: template,
    controller: IFP.Components.Share,
    controllerAs: 'vm'
  })
}
