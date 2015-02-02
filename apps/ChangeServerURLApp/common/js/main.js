function wlCommonInit(){
	$("#getServerURL").bind("click", getServerURL);
	$("#setServerURL").bind("click", setServerURL);
	$("#connectToServer").bind("click", connectToServer);
	
	connectToServer();
	
	// Feature is not supported when previewing the application web resources.
	if (WL.Client.getEnvironment() == WL.Environment.PREVIEW) {
		WL.SimpleDialog.show(
			"Change Server URL", "The set/get Server URL feature is available only in emulators/simulators and devices", 
			[{
				text: "Close", handler: function() {}
			}]
		) 
	}
}

/* GET SERVER URL */

function getServerURL() {
	WL.App.getServerUrl(getServerURLSuccess, getServerURLFailure)
}

function getServerURLSuccess(serverURL) {
	WL.SimpleDialog.show(
		"Change Server URL", "Server URL is: " + JSON.stringify(serverURL), 
		[{
			text: "Close", handler: function() {}
		}]
	) 
}

function getServerURLFailure() {
	WL.SimpleDialog.show(
		"Change Server URL", "Failed retrieving the server URL", 
		[{
			text: "Close", handler: function() {}
		}]
	)
}

/* SET SERVER URL */

function setServerURL() {
	var serverURL = $("#serverURL").val();
	WL.App.setServerUrl(serverURL, setServerURLSuccess, setServerURLFailure);
}

function setServerURLSuccess() {
    // Display the newly set server URL.
	getServerURL();
}

function setServerURLFailure() {
	WL.SimpleDialog.show(
		"Change Server URL", "Failed setting Server URL", 
		[{
			text: "Close", handler: function() {}
		}]
	)
}

/* CONNECT TO SERVER */
function connectToServer() {
	WL.Client.connect({onSuccess: connectSuccess, onFailure: connectFailure});
}

function connectSuccess() {
	WL.SimpleDialog.show(
		"Change Server URL", "Successfully connected to the MobileFirst Server", 
		[{
			text: "Close", handler: function() {}
		}]
	)
}

function connectFailure() {
	WL.SimpleDialog.show(
		"Change Server URL", "Failed connecting to the MobileFirst Server", 
		[{
			text: "Close", handler: function() {}
		}]
	)
}