const SnapshotTools = require('../services/SnapshotTools');
const assert = require('assert');

describe('parsing csv', () => {
    it('parce one line', () => {
        const csv = "\"0x00000000000000000000000000000000000000b1\",\"b1\",\"EOS5cujNHGMYZZ2tgByyNEUaoPLFhZVmGXbZc9BLJeQkKZFqGYEiQ\",\"100000000.0100\"";
        const result = SnapshotTools.csvToJson(csv, 1, 3);
        assert.equal(result[0].account, 'b1');
        assert.equal(result[0].amount, '100000000.0100');
    });

    it('parse more lines', async () => {
        const csv = await SnapshotTools.getCSV('./snapshot.csv');
        const result = SnapshotTools.csvToJson(csv, 1, 3);
        assert.equal(result.length, 163930);
        assert.equal(result[0].account, 'b1');
        assert.equal(result[0].amount, '100000000.0100');
        assert.equal(result[1].account, 'gmgenesis111');
        assert.equal(result[1].amount, '3.2926');
    });

    it('parse jungle snapshot', async () => {
        const csv = await SnapshotTools.getCSV('./20181004_account_snapshot_jungle.csv');
        const result = SnapshotTools.csvToJson(csv, 1, 2);
        assert.equal(result.length, 346466);
        assert.equal(result[0].account, '111111111111');
        assert.equal(result[0].amount, '0.1019');
        assert.equal(result[1].account, '111111111112');
        assert.equal(result[1].amount, '0.7157');
    })
});

