const SnapshotTools = require('../services/SnapshotTools');
const assert = require('assert');

describe('parsing csv', () => {
    it('parce one line', () => {
        const csv = "\"0x00000000000000000000000000000000000000b1\",\"b1\",\"EOS5cujNHGMYZZ2tgByyNEUaoPLFhZVmGXbZc9BLJeQkKZFqGYEiQ\",\"100000000.0100\"";
        const result = SnapshotTools.csvToJson(csv);
        assert.equal(result[0].account, 'b1');
        assert.equal(result[0].amount, '100000000.0100');
    });
});
