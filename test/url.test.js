describe('Url类Api', () => {
    describe('getQueryString()', () => {
        it(`MuseUtils.getQueryString('param') should return string`, () => {
            expect(typeof MuseUtils.getQueryString('param')).to.equal('string');
        });
        it(`MuseUtils.getQueryString() should return query object`, () => {
            expect(typeof MuseUtils.getQueryString()).to.equal('object');
        });
    });
});