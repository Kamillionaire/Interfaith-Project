import * as angular from 'angular';

export class UserServiceC {
    private LoginResource;
    private LogoutResource;
    private RegisterResource;
    public UserResource;
    private isLoggedIn;
    public ProfileResource;

    constructor(private $resource: ng.resource.IResourceService) {

        this.LogoutResource = $resource('/api/logout/local');
        this.LoginResource = $resource('/api/login/local');
        this.RegisterResource = $resource('/api/Register');
        this.UserResource = $resource('/api/users/:username', {username: '@username'} );
    }
    public login(user) {
        return this.LoginResource.save(user).$promise;
    }

    public logout() {
        return this.LogoutResource.get().$promise;
    }

    public register(user) {
        return this.RegisterResource.save(user).$promise;
    }

    public getUser(id) {
        return this.UserResource.get(id).$promise;
    }

    public getCurrentUser() {
        return this.$resource('/api/currentuser').get().$promise;

    }

    public deleteUser(username) {
      return this.UserResource.delete({username}).$promise;
    }
    public listUsers() {
      return this.UserResource.query().$promise;
    }
}
UserServiceC.$inject = ['$resource'];

export const UserService = angular.module('ifp.services.user', [])
    .service('UserService', UserServiceC)
    .name;
