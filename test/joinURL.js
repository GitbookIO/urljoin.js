import assert from 'assert';
import joinURL from '../src';

describe('joinURL', () => {
    it('handle hosts', () => {
        assert.equal(
            joinURL('http://abc.com', '/git/'),
            joinURL('http://abc.com/', '/git/')
        );
        assert.equal(
            joinURL('http://abc.com/', '/git/'),
            'http://abc.com/git/'
        );

        assert.equal(
            joinURL('http://abc.com', ''),
            'http://abc.com/'
        );
    });

    it('handle query strings', () => {
        assert.equal(
            joinURL('/abc/', 'index.php?a=b'),
            '/abc/index.php?a=b'
        );
    });

    it('handle repeating slashes', () => {
        assert.equal(
            joinURL('http://abc.com//', '/team'),
            'http://abc.com/team'
        );
    });

    it('handle preceding slashes', () => {
        assert.equal(
            joinURL('/git/', '/repos/aaron/test.git'),
            '/git/repos/aaron/test.git'
        );
    });

    it('handle trailing slashes', () => {
        assert.equal(
            joinURL('/git/', 'test/'),
            '/git/test/'
        );

        assert.equal(
            joinURL('/git/', '/test/'),
            '/git/test/'
        );
    });

    it('handle relative', () => {
        assert.equal(
            joinURL('http://abc.com/forums/', '../about'),
            'http://abc.com/about'
        );

        // Ensure we can't go "below a domain"
        assert.equal(
            joinURL('http://abc.com/forums/', '../../about'),
            'http://abc.com/about'
        );

        assert.equal(
            joinURL('/git/', '../about'),
            '/about'
        );
    });

    it('handle empty url', () => {
        // Map to dot like path.join
        assert.equal(
            joinURL(''),
            '/'
        );

        assert.equal(
            joinURL(),
            '/'
        );
    });

    it('handle multiple args', () => {
        assert.equal(
            joinURL('http://abc.com', '/git/', '/repos', 'aaron/test.git'),
            'http://abc.com/git/repos/aaron/test.git'
        );
    });
});
