module.exports = function(RED) {
    function CelsiusToFahrenheit(config) {
        RED.nodes.createNode(this, config);
        const node = this;
        node.on('input', function(msg) {
            const value = msg.payload;
            if ((typeof value !== 'number' && typeof value !== 'string') ||
                (typeof value === 'string' && value.trim() === '') || !Number.isFinite(Number(value))) {
                node.error('payload must be a finite Celsius temperature', msg);
                return;
            }
            msg.payload = Number(value) * 9 / 5 + 32;
            node.send(msg);
        });
    }
    RED.nodes.registerType('CtoF', CelsiusToFahrenheit);
};
