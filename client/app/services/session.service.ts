import * as angular from 'angular';

export class SessionServiceC {
    public user;
    constructor(
        private $sessionStorage
    ) {
        this.user = this.getUser();
    }

    private create(user) {
        this.$sessionStorage['user'] = user;
    }

    private isAuthenticated() {
        let user = this.getUser();
        return !!user['username'];
    }

    private isAuthorized(roles) {
        let user = this.getUser();
        if (!user['roles']) {
            return false;
        }

        if (!angular.isArray(roles)) {
            roles = [roles];
        }

        return roles.some((v, k) => {
            for (let i in user['roles']) {
                if (user['roles'][i] === v) {
                    return true;
                }
            }
        });
    }

  private getUser() {
        return this.$sessionStorage['user'] || {};
    }

  public destroy() {
        this.$sessionStorage.$reset();
        this.$sessionStorage['user'] = {};
    }
};
SessionServiceC.$inject = ['$resource'];

export const SessionService = angular.module('ifp.services.session', [])
    .service('SessionService', SessionServiceC)
    .name;
