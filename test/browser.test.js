describe('Browser类Api', () => {
    describe('getDeviceHeight()', () => {
        it('getDeviceHeight should work fine', () => {
            expect(MuseUtils.getDeviceHeight()).to.least(0);
        });
    });
    describe('getScrollTop()', () => {
        it('getScrollTop should work fine', () => {
            expect(MuseUtils.getScrollTop()).to.least(0);
        });
    });
});