var express = require("express"),
    snmpWrapper = require("../network-managers/snmp.js");


var router = express.Router();

router.get("/:ip/:community/:oids", function(req, res, next) {
    var ip = req.params.ip,
        oids = req.params.oids.split(","),
        community = req.params.community;

    res.send("Received request to process oids");
});

module.exports = router;
