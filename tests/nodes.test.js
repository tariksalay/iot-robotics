const test = require('node:test');
const assert = require('node:assert/strict');
const {EventEmitter} = require('node:events');
const path = require('node:path');

function instantiate(relative) {
    let Constructor;
    const RED = {nodes: {
        createNode(node) {
            const events = new EventEmitter();
            node.on = events.on.bind(events);
            node.emit = events.emit.bind(events);
            node.sent = [];
            node.errors = [];
            node.send = msg => node.sent.push(msg);
            node.error = error => node.errors.push(error);
        },
        registerType(name, ctor) { Constructor = ctor; }
    }};
    require(path.join(__dirname, '..', relative))(RED);
    return new Constructor({});
}

test('Celsius node uses payload and matches its editor type', () => {
    const node = instantiate('ICP-7/Source Code/CtoF/CtoF.js');
    for (const [value, expected] of [[0, 32], [100, 212], ['-40', -40]]) {
        node.emit('input', {payload: value});
        assert.equal(node.sent.at(-1).payload, expected);
    }
    for (const value of ['', null, {}, 'not a number', Infinity]) node.emit('input', {payload: value});
    assert.equal(node.sent.length, 3);
    assert.equal(node.errors.length, 5);
});

for (const file of ['ICP-7/Source Code/lower/lower-case.js', 'ICP-7/lowcase/lower-case.js']) {
    test(`lowercase node validates payload: ${file}`, () => {
        const node = instantiate(file);
        node.emit('input', {payload: 'HELLO'});
        assert.equal(node.sent[0].payload, 'hello');
        node.emit('input', {payload: 12});
        assert.equal(node.sent.length, 1);
        assert.equal(node.errors.length, 1);
    });
}
