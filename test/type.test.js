describe('Type类Api', () => {
    describe('getType()', () => {
        it('getType should work fine', () => { 
            expect(MuseUtils.getType(7)).to.equal('Number');
            expect(MuseUtils.getType(true)).to.equal('Boolean');
            expect(MuseUtils.getType('abc')).to.equal('String');
            expect(MuseUtils.getType({name: 'ryan'})).to.equal('Object');
            expect(MuseUtils.getType([1,2,3])).to.equal('Array');
            expect(MuseUtils.getType(function(){})).to.equal('Function');
            expect(MuseUtils.getType(undefined)).to.equal('Undefined');
        });
    });
    describe('isArray()', () => {
        it('isArray should work fine', () => { 
            expect(MuseUtils.isArray([])).to.be.true;
            expect(MuseUtils.isArray([1, 2, 3])).to.be.true;
            expect(MuseUtils.isArray(1)).to.be.false;
        });
    });
    describe('isBoolean()', () => {
        it('isBoolean should work fine', () => { 
            expect(MuseUtils.isBoolean(true)).to.be.true;
            expect(MuseUtils.isBoolean(false)).to.be.true;
            expect(MuseUtils.isBoolean('true')).to.be.false;
            expect(MuseUtils.isBoolean(0)).to.be.false;
        });
    });
    describe('isFunction()', () => {
        it('isFunction should work fine', () => { 
            expect(MuseUtils.isFunction(function(){})).to.be.true;
            expect(MuseUtils.isFunction('abc')).to.be.false;
        });
    });
    describe('isNumber()', () => {
        it('isNumber should work fine', () => { 
            expect(MuseUtils.isNumber(7)).to.be.true;
            expect(MuseUtils.isNumber('7')).to.be.false;
            expect(MuseUtils.isNumber([7])).to.be.false;
        });
    });
    describe('isString()', () => {
        it('isArray should work fine', () => { 
            expect(MuseUtils.isString('abc')).to.be.true;
            expect(MuseUtils.isString('1')).to.be.true;
            expect(MuseUtils.isString(1)).to.be.false;
        });
    });
    describe('isUndefined()', () => {
        it('isUndefined should work fine', () => { 
            let ok;
            expect(MuseUtils.isUndefined(ok)).to.be.true;
            expect(MuseUtils.isUndefined(1)).to.be.false;
        });
    });
});