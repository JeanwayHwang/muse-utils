describe('Math类Api', () => {
    describe('getRandomNum()', () => {
        it('10 <= MuseUtils.getRandomNum(10, 100) <= 100', () => {
            const number = MuseUtils.getRandomNum(10, 100);
            expect(number).to.least(0) && expect(number).to.most(100);
        });
    });
    describe('padLeft()', () => {
        it(`MuseUtils.padLeft(10) should return "10"`, () => {
            expect(MuseUtils.padLeft(10)).to.equal(10);
        });
        it(`MuseUtils.padLeft(1) should return "01"`, () => {
            expect(MuseUtils.padLeft(1)).to.equal('01');
        });
    });
});