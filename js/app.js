define(['knockout'], function(ko) {

    var ViewModel = function() {
        var self = this;
        self.name = ko.observable();

        self.countries = ko.observableArray([
            { id: '0', name: 'Germany' },
            { id: '1', name: 'Austria' },
        ]);

        self.selectedCountryId = ko.observable();
        self.selectedCountryName = ko.observable();
        self.selectCountry = function(country) {
            console.log(country);
            self.selectedCountryId(country.id);
            self.selectedCountryName(country.name);
        };

        self.addCountry = function() {
            self.countries.push({
                id: self.selectedCountryId(),
                name: self.selectedCountryName()
            });
            self.selectedCountryId('');
            self.selectedCountryName('');
        };
    }

    return ViewModel;
});
