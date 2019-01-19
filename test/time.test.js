describe('Time类Api', () => {
    describe('compareWithMoment()', () => {
        it(`MuseUtils.compareWithMoment() should work fine`, () => {
            expect(MuseUtils.compareWithMoment(new Date().getTime() + 1000)).to.equal(-1);
            expect(MuseUtils.compareWithMoment(new Date().getTime())).to.equal(0);
            expect(MuseUtils.compareWithMoment(new Date().getTime() - 1000)).to.equal(1);
            expect(MuseUtils.compareWithMoment(new Date().getTime() - 1000), new Date().getTime()).to.equal(1);
        });
    });
    describe('countDown()', () => {
        it(`MuseUtils.countDown() should work fine`, () => {
            expect(MuseUtils.countDown(new Date().getTime() + 24 * 60 * 60 * 1000)).to.eql({
                day: 1,
                hour: 0,
                min: 0,
                sec: 0
            });
            expect(MuseUtils.countDown(new Date().getTime() + 24 * 60 * 60 * 1000, true)).to.eql({
                day: '01',
                hour: '00',
                min: '00',
                sec: '00'
            });
        });
    });
    describe('formatTime()', () => {
        it(`MuseUtils.formatTime() should work fine`, () => {
            expect(MuseUtils.formatTime(new Date(1546272000000))).to.eql({
                year: 2019,
                month: 1,
                day: 1,
                hour: 0,
                min: 0,
                sec: 0
            });
            expect(MuseUtils.formatTime(new Date(1546272000000), true)).to.eql({
                year: 2019,
                month: '01',
                day: '01',
                hour: '00',
                min: '00',
                sec: '00'
            });
        });
    });
    describe('getTodayZeroAM()', () => {
        it(`MuseUtils.getTodayZeroAM() should work fine`, () => {
            expect(typeof MuseUtils.getTodayZeroAM()).to.equal('number');
        });
    });
    describe('isTimeBetween()', () => {
        it(`MuseUtils.isTimeBetween() should work fine`, () => {
            const begin = new Date().getTime() - 1000, end = new Date().getTime() + 1000, now = new Date().getTime();
            expect(MuseUtils.isTimeBetween(begin, end)).to.equal(true);
            expect(MuseUtils.isTimeBetween(begin, end, now)).to.equal(true);
        });
    });
});