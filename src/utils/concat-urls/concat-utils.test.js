import {concatUrls} from './concat-urls';

describe('concatUrls', () => {
    test('if first url ends as /, it just concat urls', () => {
        expect(concatUrls('abc/', 'def')).toEqual('abc/def');
    });
    test('if first url ends as not /, it adds /', () => {
        expect(concatUrls('abc', 'def')).toEqual('abc/def');
    });
    test('if second url starts as /, it could work incorrect', () => {
        expect(concatUrls('abc/', '/def')).toEqual('abc//def');
    });
});
