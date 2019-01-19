describe('Data类Api', () => {
    describe('deepCopy()', () => {
        it('deepCopy should work fine', () => {
            const person = {name: 'ryan', age: 24};
            expect(MuseUtils.deepCopy(person)).to.eql(person);
        });
    });
    describe('mergeObject()', () => {
        it('mergeObject should work fine', () => {
            expect(MuseUtils.mergeObject({a: 1}, {b: 2}, {b: 3, c: 4})).to.eql({a: 1, b: 3, c: 4});
        });
    });
    describe('removeTheSame()', () => {
        it('MuseUtils.removeTheSame([1, 2, 2, 3]) should return [1, 2, 3]', () => {
            expect(MuseUtils.removeTheSame([1, 2, 2, 3])).to.eql([1, 2, 3]);
        });
    });
});