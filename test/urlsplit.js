var assert = require('assert');
var urlsplit = require('../urlsplit');

describe('urlsplit.js', function() {
    it('handle hosts', function() {
        assert.deepEqual(
            urlsplit('http://abc.com/git/'),
            {domain: 'http://abc.com', path: '/git/'}
        );

        assert.deepEqual(
            urlsplit('http://abc.com'),
            {domain: 'http://abc.com', path: ''}
        );

        assert.deepEqual(
            urlsplit('http://abc.com/'),
            {domain: 'http://abc.com', path: '/'}
        );

        assert.deepEqual(
            urlsplit('https://abc.com/about'),
            {domain: 'https://abc.com', path: '/about'}
        );
    });

    it('handle query strings', function() {
        assert.deepEqual(
            urlsplit('/abc/index.php?a=b'),
            {domain: '', path: '/abc/index.php?a=b'}
        );
    });

    it('handle empty url', function() {
        // Map to dot like path.join
        assert.deepEqual(
            urlsplit(''),
            {domain: '', path: ''}
        );
    });

    it('handle paths (no hostname)', function() {
        assert.deepEqual(
            urlsplit('/Users/aaron/git'),
            {domain: '', path: '/Users/aaron/git'}
        );
        assert.deepEqual(
            urlsplit('/'),
            {domain: '', path: '/'}
        );
    })
});
