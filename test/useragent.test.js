describe('UserAgent类Api', () => {
    describe('isAndroid()', () => {
        it('isAndroid() should work fine', () => {
            expect(typeof MuseUtils.isAndroid()).to.equal('boolean');
        });
    });
    describe('isIOS()', () => {
        it('isIOS() should work fine', () => {
            expect(typeof MuseUtils.isIOS()).to.equal('boolean');
        });
    });
    describe('isLinux()', () => {
        it('isLinux() should work fine', () => {
            expect(typeof MuseUtils.isLinux()).to.equal('boolean');
        });
    });
    describe('isMac()', () => {
        it('isMac() should work fine', () => {
            expect(typeof MuseUtils.isMac()).to.equal('boolean');
        });
    });
    describe('isMobileBrowser()', () => {
        it('isMobileBrowser() should work fine', () => {
            expect(typeof MuseUtils.isMobileBrowser()).to.equal('boolean');
        });
    });
    describe('isWindows()', () => {
        it('isWindows() should work fine', () => {
            expect(typeof MuseUtils.isWindows()).to.equal('boolean');
        });
    });
});