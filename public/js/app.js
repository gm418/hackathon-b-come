angular.module('app', ['ngRoute'])
        .factory('sessionFactory', sessionFactory)
        .service('userService', userService)
        .service('saisonService', saisonService)
        .controller('navbarController', navbarController)
        .controller('loginController', loginController)
        .controller('listController', listController)
        .controller('editUserController', updateUserController)
        .controller('createUserController', createUserController)
        .controller('saisonController', saisonController)
        .config(routes)
        .run(loginStatus)
        ;
