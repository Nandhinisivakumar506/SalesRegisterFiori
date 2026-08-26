sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("salesreport.controller.Report", {
        onInit: function () {
        this.getOwnerComponent()
                .getRouter()
                .getRoute("RouteReport")
                .attachPatternMatched(this._onRouteMatched, this);

        },
        

        _onRouteMatched: function (oEvent) {

            //var oArgs = oEvent.getParameter("arguments");
            //var oFromDate = new Date(oArgs.fromDate);
            var oArgumentModel = this.getOwnerComponent()
                                 .getModel("reportFilters");
             var oData = oArgumentModel.getData();
            console.log(oData);

             var aFilters = [];

            var oTable = this.byId("salesTable");
            var oBinding = oTable.getBinding("items");    

if(oData.billingDocument){
      aFilters.push( new Filter(
                                 "billing_document",
                                 FilterOperator.EQ,
                                  oData.billingDocument
                                )
                    )                 

}

if (oData.fromDate || oData.toDate) { //mot initial

    aFilters.push(
        new Filter(
            "billing_date",
            FilterOperator.BT,
            new Date(oData.fromDate),
            new Date(oData.toDate)
        )
    );

}
          
            oBinding.filter(aFilters);

            
          
        }
    });
});
