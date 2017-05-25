export function configure(aurelia) {
    return new Promise((resolve) => {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .globalResources(
                'pragma-tabsheet/pragma-tabsheet',
                'pragma-views/components/menu/menu',
                'pragma-views/components/input-composite/input-composite',
                'pragma-views/components/master-detail/master-detail',
                'pragma-views/components/assistant/assistant',
                'pragma-views/components/form-search/form-search.html',
                'pragma-views/components/icons/icons.html',
                'pragma-views/components/icons/icon.html',
                'pragma-views/components/pragma-messages/pragma-messages',
                'pragma-views/custom-attributes/selectable',
                'pragma-views/components/order-group/order-group',
                'pragma-views/components/percentage-chart/percentage-chart',
                'pragma-views/components/master-list-container/master-list-container',
                'pragma-views/components/pragma-options-toolbar/pragma-options-toolbar',
                'pragma-views/components/pragma-dropdown-menu/pragma-dropdown-menu',
                'pragma-views/components/pragma-template/pragma-template'
            )
            .plugin("aurelia-dialog");

        aurelia.start().then(() => {
            aurelia.setRoot();
            resolve();
        });
    });
}