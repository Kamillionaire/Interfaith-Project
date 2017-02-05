namespace IFP.Components{
  const name='main';
  const template='/client/ngApp/components/home/home.html';
  export class Home {

  }
  angular.module('ifp').component(name,{
    templateUrl: template,
    controller: IFP.Components.Home,
    controllerAs: 'vm'
  })
}
