sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],  function (Controller) {
    "use strict";

    return Controller.extend("salesreport.controller.SelectionScreen", {

        onInit: function () {

        },

           onExecute: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            var oParameter = {
            companyCode: this.byId("bukrs").getValue(),
            fromDate: this.byId("erdatFrom").getValue(),
            toDate: this.byId("erdatTo").getValue(),    
            billingDocument: this.byId("vbeln").getValue(),
            salesoff: this.byId("vkbur").getValue(),
            bplace: this.byId("bupla").getValue(),
            output: this.byId("reportDisplay").getSelected()
            ? "REPORT"
            : "DOWNLOAD",
            output1: this.byId("reportDisplay").getSelected()
    ? this.byId("reportDisplay").getText()
    : this.byId("fileDownload").getText()
    };

    console.log(oParameter);

    if (!oParameter.companyCode || !oParameter.fromDate || (!oParameter.fromDate && !oParameter.toDate))
    {
      sap.m.MessageToast.show("Fill All Required Fields");
    }
    else{
         this.getOwnerComponent()
        .setModel(new sap.ui.model.json.JSONModel(oParameter), "reportFilters");
        oRouter.navTo("RouteReport");
    }  
  
  }
    });
    
});