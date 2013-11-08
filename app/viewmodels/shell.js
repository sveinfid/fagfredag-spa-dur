define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Weather', moduleId: 'viewmodels/weather', nav: true },
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});