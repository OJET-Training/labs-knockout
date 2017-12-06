define(['knockout'], function(ko) {

    var ViewModel = function() {
        var self = this;
        self.name = ko.observable();
    }

    return ViewModel;
});
