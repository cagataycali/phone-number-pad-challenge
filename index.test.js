const {padWithRegex, padWithoutRegex} = require('./index')

describe('regex', () => {
    test('works without +', () => {
        const input = '905054146201'  
        expect(padWithRegex(input)).toBe('905054146201');
    });

    test('works with +', () => {
        const input = '+905054146201'  
        expect(padWithRegex(input)).toBe('905054146201');
    });

    test('works with 0', () => {
        const input = '05054146201'  
        expect(padWithRegex(input)).toBe('905054146201');
    });

    test('works without 0', () => {
        const input = '5054146201'  
        expect(padWithRegex(input)).toBe('905054146201');
    });
})

describe('w/o regex', () => {
    test('works without +', () => {
        const input = '905054146201'  
        expect(padWithoutRegex(input)).toBe('905054146201');
    });

    test('works with +', () => {
        const input = '+905054146201'  
        expect(padWithoutRegex(input)).toBe('905054146201');
    });

    test('works with 0', () => {
        const input = '05054146201'  
        expect(padWithoutRegex(input)).toBe('905054146201');
    });

    test('works without 0', () => {
        const input = '5054146201'
        expect(padWithoutRegex(input)).toBe('905054146201');
    });
})
