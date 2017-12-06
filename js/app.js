define(['knockout', 'router', 'bootstrap'], function(ko, router) {

    var ViewModel = function() {
        var self = this;
        self.toggled = ko.observable(false);
        self.pages = ko.observableArray();
        router.Router.initialized.then(function(resolve, rejected) {
            self.pages(router.Router.head.routes);
        });
    }

    return ViewModel;
});
