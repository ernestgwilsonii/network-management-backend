var snmp = require("net-snmp");

var snmpWrapper = {
    get: function(target, community, oids) {
        var session = snmp.createSession(target, community);

        var data = {
            values: [],
            errors: []
        };

        session.get(oids, function(error, varbinds) {
            for(var i = 0; i < varbinds.length; i++) {
                if(snmp.isVarbindError(varbinds[i])) {
                    data.errors.push(snmp.varbindError(varbinds[i]));
                } else {
                    data.values.push(varbinds[i].oid + " = " + varbinds[i].value);
                }
            }
        });

        session.close();

        return data;
    }
};

module.exports = snmpWrapper;
