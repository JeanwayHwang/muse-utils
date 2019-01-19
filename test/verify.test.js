describe('Verify类Api', () => {
    describe('isMailAccount()', () => {
        it('isMailAccount should work fine', () => {
            expect(MuseUtils.isMailAccount('337677888@qq.com')).to.be.true;
            expect(MuseUtils.isMailAccount('337677888qq.com')).to.be.false;
        });
    });
    describe('isMobileNumber()', () => {
        it('isMobileNumber should work fine', () => {
            expect(MuseUtils.isMobileNumber('15221218888')).to.be.true;
            expect(MuseUtils.isMobileNumber('52212188880')).to.be.false;
        });
    });
    describe('isOnlyNumberAndLetter()', () => {
        it('isOnlyNumberAndLetter should work fine', () => {
            expect(MuseUtils.isOnlyNumberAndLetter('abc123')).to.be.true;
            expect(MuseUtils.isOnlyNumberAndLetter('abc123_')).to.be.false;
        });
    });
    describe('isPhoneNumber()', () => {
        it('isPhoneNumber should work fine', () => {
            expect(MuseUtils.isPhoneNumber('021-1234567')).to.be.true;
            expect(MuseUtils.isPhoneNumber('0021-123456')).to.be.false;
        });
    });
    describe('isPostCode()', () => {
        it('isPostCode should work fine', () => {
            expect(MuseUtils.isPostCode('123456')).to.be.true;
            expect(MuseUtils.isPostCode('12345')).to.be.false;
        });
    });
    describe('isPureChinese()', () => {
        it('isPureChinese should work fine', () => {
            expect(MuseUtils.isPureChinese('中文')).to.be.true;
            expect(MuseUtils.isPureChinese('中文chinese')).to.be.false;
        });
    });
    describe('isPureNumber()', () => {
        it('isPureNumber should work fine', () => {
            expect(MuseUtils.isPureNumber('123')).to.be.true;
            expect(MuseUtils.isPureNumber('123abc')).to.be.false;
        });
    });
});