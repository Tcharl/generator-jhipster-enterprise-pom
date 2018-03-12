/* global describe, beforeEach, it */

const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('JHipster generator enterprise-pom', () => {
    beforeEach((done) => {
        helpers
            .run(path.join(__dirname, '../generators/app'))
            .inTmpDir((dir) => {
                fse.copySync(path.join(__dirname, './templates/enterprisepom'), dir);
            })
            .withOptions({
                testmode: true
            })
            .withPrompts({
                mavenEnterprise: 'y'
            })
            .on('end', done);
    });

    it('generate parent pom file', () => {
        assert.file([
            '.mvn/parent/pom.xml',
        ]);
    });

    it('generate reporting pom file', () => {
        assert.file([
            '.mvn/reporting/pom.xml',
        ]);
    });

    it('generate settings redirection file', () => {
        assert.file([
            '.mvn/maven.config',
        ]);
    });
    it('generate settings file', () => {
        assert.file([
            '.mvn/settings.xml',
        ]);
    });
    it('generate site file', () => {
        assert.file([
            'src/site/site.xml',
        ]);
    });
});
