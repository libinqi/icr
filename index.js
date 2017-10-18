var path = require('path');
var fs = require('fs');
var pkg = require(path.join(process.cwd(), 'package.json'));

var icr = null;
var config = null;
var configPath = path.join(process.cwd(), 'device.json');
if (pkg.icr && pkg.icr.driver) {
    icr = require(pkg.icr.driver);
	icr.driver = pkg.icr.driver;
} else if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath));
    if (config.icr && config.icr.driver) {
        icr = require(config.icr.driver);
		icr.driver = pkg.icr.driver;
    }
} else {
    configPath = path.join(process.cwd(), 'config.json');
	if (fs.existsSync(configPath)) {
		config = JSON.parse(fs.readFileSync(configPath));
		if (config.icr && config.icr.driver) {
			icr = require(config.icr.driver);
			icr.driver = pkg.icr.driver;
		}
	}
}

module.exports = icr;