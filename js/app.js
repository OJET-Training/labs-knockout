define(['knockout'], function(ko) {

    var ViewModel = function() {
        var self = this;
        self.name = ko.observable();

        self.countries = ko.observableArray([
            { id: '0', name: 'Germany' },
            { id: '1', name: 'Austria' },
        ]);
    }

    return ViewModel;
});
