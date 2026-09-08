sap.ui.define(
    ["sap/suite/ui/generic/template/lib/AppComponent"],
    ["sap/m/MessageBox"],
    ["sap/m/MessageToast"],
    function (Component) {
        "use strict";

        return Component.extend("cicd.Component", {
            metadata: {
                manifest: "json"
            }
        });
    }
);