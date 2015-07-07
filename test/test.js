var assert = require('assert');
var urljoin = require('../');

describe('urljoin.js', function() {
    it('handle hosts', function() {
        assert.equal(
            urljoin('http://abc.com', '/git/'),
            urljoin('http://abc.com/', '/git/')
        );
        assert.equal(
            urljoin('http://abc.com/', '/git/'),
            'http://abc.com/git/'
        );

        assert.equal(
            urljoin('http://abc.com', ''),
            'http://abc.com/'
        );
    });

    it('handle query strings', function() {
        assert.equal(
            urljoin('/abc/', 'index.php?a=b'),
            '/abc/index.php?a=b'
        );
    });

    it('handle repeating slashes', function() {
        assert.equal(
            urljoin('http://abc.com//', '/team'),
            'http://abc.com/team'
        );
    });

    it('handle preceding slashes', function() {
        assert.equal(
            urljoin('/git/', '/repos/aaron/test.git'),
            '/git/repos/aaron/test.git'
        );
    });

    it('handle trailing slashes', function() {
        assert.equal(
            urljoin('/git/', 'test/'),
            '/git/test/'
        );

        assert.equal(
            urljoin('/git/', '/test/'),
            '/git/test/'
        );
    });

    it('handle relative', function() {
        assert.equal(
            urljoin('http://abc.com/forums/', '../about'),
            'http://abc.com/about'
        );

        assert.equal(
            urljoin('/git/', '../about'),
            '/about'
        );
    });

    it('handle empty url', function() {
        // Map to dot like path.join
        assert.equal(
            urljoin(''),
            '/'
        );

        assert.equal(
            urljoin(),
            '/'
        );
    });
});
