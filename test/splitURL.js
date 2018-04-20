import assert from 'assert';
import { splitURL } from '../src';

describe('splitURL', () => {
    it('handle hosts', () => {
        assert.deepEqual(
            splitURL('http://abc.com/git/'),
            {domain: 'http://abc.com', path: '/git/'}
        );

        assert.deepEqual(
            splitURL('http://abc.com'),
            {domain: 'http://abc.com', path: ''}
        );

        assert.deepEqual(
            splitURL('http://abc.com/'),
            {domain: 'http://abc.com', path: '/'}
        );

        assert.deepEqual(
            splitURL('https://abc.com/about'),
            {domain: 'https://abc.com', path: '/about'}
        );
    });

    it('handle query strings', () => {
        assert.deepEqual(
            splitURL('/abc/index.php?a=b'),
            {domain: '', path: '/abc/index.php?a=b'}
        );
    });

    it('handle empty url', () => {
        // Map to dot like path.join
        assert.deepEqual(
            splitURL(''),
            {domain: '', path: ''}
        );
    });

    it('handle paths (no hostname)', () => {
        assert.deepEqual(
            splitURL('/Users/aaron/git'),
            {domain: '', path: '/Users/aaron/git'}
        );
        assert.deepEqual(
            splitURL('/'),
            {domain: '', path: '/'}
        );
    })
});
