sap.ui.define(
    ["sap/suite/ui/generic/template/lib/AppComponent"],
    ["sap/m/MessageBox"],
    function (Component) {
        "use strict";

        return Component.extend("cicd.Component", {
            metadata: {
                manifest: "json"
            }
        });
    }
);