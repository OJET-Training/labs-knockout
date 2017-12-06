define(['knockout'], function(ko) {

    var ViewModel = function() {
        var self = this;
        self.toggled = ko.observable(false);
        self.currentPage = ko.observable('home');
    }

    return ViewModel;
});
