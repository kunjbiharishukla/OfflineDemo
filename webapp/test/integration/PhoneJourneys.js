jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/offlinedemo/OfflineDemo/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/offlinedemo/OfflineDemo/test/integration/pages/App",
	"com/sap/offlinedemo/OfflineDemo/test/integration/pages/Browser",
	"com/sap/offlinedemo/OfflineDemo/test/integration/pages/Master",
	"com/sap/offlinedemo/OfflineDemo/test/integration/pages/Detail",
	"com/sap/offlinedemo/OfflineDemo/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.offlinedemo.OfflineDemo.view."
	});

	sap.ui.require([
		"com/sap/offlinedemo/OfflineDemo/test/integration/NavigationJourneyPhone",
		"com/sap/offlinedemo/OfflineDemo/test/integration/NotFoundJourneyPhone",
		"com/sap/offlinedemo/OfflineDemo/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});