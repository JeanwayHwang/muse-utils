describe('Keycode类Api', () => {
    describe('getKeyName()', () => {
        it(`MuseUtils.getKeyName() should work fine`, () => {
            expect(MuseUtils.getKeyName(9)).to.equal('Tab');
            expect(MuseUtils.getKeyName(10000)).to.equal('');
        });
    });
});