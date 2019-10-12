F-to-C

module.exports = function(RED) {

    function temperatureConverter(config) {

                RED.nodes.createNode(this,config);

                var node = this;

                node.on('input', function(msg){

                    msg.payload = (32*config -32) * 5/9;

                    node.send(msg);

                });

     }

     RED.nodes.registerType("F-To-C", temperatureConverter);        

}
