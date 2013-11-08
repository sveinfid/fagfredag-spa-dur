define(['services/yr', 'knockout'], function(yrService, ko) {
    var viewModel = {
        forecast: ko.observable(),
    };
    viewModel.activate = function() {
        return yrService.get('sted/Norge/Oslo/Oslo/Oslo/varsel.json')
            .done(function(data) {
                viewModel.forecast(data);
                viewModel.location = ko.computed(function () {
                    return 'Været for ' + viewModel.forecast().place + ', ' + viewModel.forecast().country;
                });
            });
    };
    return viewModel;
});
