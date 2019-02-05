sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/mlf/bar8/model/models"
], function (UIComponent, models) {
    "use strict";

    return UIComponent.extend("sap.mlf.bar8.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			this.setModel(models.createParameterModel(), "parameter");
			this.setModel(models.createResultModel(), "result");
			this.setModel(new sap.ui.model.json.JSONModel({}), "dataSource");
        },

    });

});
