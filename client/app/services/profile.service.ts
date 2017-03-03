import * as angular from 'angular';

export class ProfileServiceC {
    public ProfileResource
    constructor(
      private $resource: ng.resource.IResourceService){
        this.ProfileResource = $resource('/api/profile/:username',{username:'@username'});

}
    public getProfile(username) {
      return this.ProfileResource.get({username}).$promise;
  }
};
ProfileServiceC.$inject = ['$resource'];

export const ProfileService = angular.module('ifp.services.profile', [])
    .service('ProfileService', ProfileServiceC)
    .name;
