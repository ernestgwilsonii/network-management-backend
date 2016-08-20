var express = require("express"),
    snmpWrapper = require("../network-managers/snmp.js");


var router = express.Router();

// Example:  /12.34.56.78/password/1+2+3+5+8
router.get("/:ip/:community/:oids", function(req, res, next) {
    var ip = req.params.ip,
        community = req.params.community,
        oids = snmpWrapper.toIntArray(req.params.oids.split("+"));

    console.log(ip, community, oids);

    var data = snmpWrapper.get(ip, community, oids);

    res.send(data);
});

module.exports = router;
