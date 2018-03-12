const chalk = require('chalk');
const packagejs = require('../../package.json');
const semver = require('semver');
const BaseGenerator = require('generator-jhipster/generators/generator-base');
const jhipsterConstants = require('generator-jhipster/generators/generator-constants');
const _ = require('lodash');
// Stores JHipster variables

// Stores JHipster functions

module.exports = class extends BaseGenerator {
    get initializing() {
        return {
            init(args) {
                if (args === 'default') {
                    // do something when argument is 'default'
                }
            },
            readConfig() {
                this.jhipsterAppConfig = this.getJhipsterAppConfig();
                if (!this.jhipsterAppConfig) {
                    this.error('Can\'t read .yo-rc.json');
                }
            },
            displayLogo() {
                // Have Yeoman greet the user.
                this.log(`Welcome to the ${chalk.bold.yellow('JHipster enterprise pom')} generator! ${chalk.yellow(`v${packagejs.version}\n`)}`);
            },
            checkJhipster() {
                const currentJhipsterVersion = this.jhipsterAppConfig.jhipsterVersion;
                const minimumJhipsterVersion = packagejs.dependencies['generator-jhipster'];
                if (!semver.satisfies(currentJhipsterVersion, minimumJhipsterVersion)) {
                    this.warning(`\nYour generated project used an old JHipster version (${currentJhipsterVersion})... you need at least (${minimumJhipsterVersion})\n`);
                }
            }
        };
    }

    prompting() {
        if (this.jhipsterAppConfig.buildTool !== 'maven') {
            this.log(chalk.red('Error! The JHipster Maven enterprise module only works with Maven!'));
            process.exit(1);
        }
        const prompts = [
            {
                type: 'input',
                name: 'mavenEnterprise',
                message: 'You\'ll install the maven enterprise module, please star if you like it and contribute via ticket/pr if it does not fully fit your need!',
                default: 'y'
            }
        ];

        const done = this.async();
        this.prompt(prompts).then((props) => {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        });
    }

    writing() {
        // const done = this.async();
        // function to use directly template

        // read config from .yo-rc.json
        this.JAVA_VERSION = jhipsterConstants.JAVA_VERSION;
        // const jhipsterAppConfig = this.getJhipsterAppConfig();
        // Application name modified, using each technology's conventions
        this.camelizedBaseName = _.camelCase(this.jhipsterAppConfig.baseName);
        this.dasherizedBaseName = _.kebabCase(this.jhipsterAppConfig.baseName);
        this.lowercaseBaseName = this.jhipsterAppConfig.baseName.toLowerCase();
        this.humanizedBaseName = _.startCase(this.jhipsterAppConfig.baseName);

        // this.packageFolder = this.packageName.replace(/\./g, '/');
        if (!this.nativeLanguage) {
            // set to english when translation is set to false
            this.nativeLanguage = 'en';
        }
        this.packageFolder = this.jhipsterAppConfig.packageFolder;
        this.packageName = this.jhipsterAppConfig.packageName;
        this.clientFramework = this.jhipsterAppConfig.clientFramework;
        this.clientPackageManager = this.jhipsterAppConfig.clientPackageManager;
        this.buildTool = this.jhipsterAppConfig.buildTool;

        // use function in generator-base.js from generator-jhipster
        this.angularAppName = this.jhipsterAppConfig.angularAppName;


        // variable from questions
        this.mavenEnterprise = this.props.mavenEnterprise;
        /* if (!this.mavenEnterprise) {
            return;
        } */
        // show all variables
        this.log('\n--- some config read from config ---');
        this.log(`baseName=${this.jhipsterAppConfig.baseName}`);
        this.log(`packageName=${this.jhipsterAppConfig.packageName}`);
        this.log(`buildTool=${this.jhipsterAppConfig.buildTool}`);

        this.log('------\n');
        this.copyTemplate('mvn/parent.pom.xml.ejs', '.mvn/parent/pom.xml', 'template', null, { interpolate: jhipsterConstants.INTERPOLATE_REGEX });
        this.copyTemplate('mvn/maven.config', '.mvn/maven.config', 'copy');
        this.copyTemplate('mvn/reporting.pom.xml.ejs', '.mvn/reporting/pom.xml', 'template', null, { interpolate: jhipsterConstants.INTERPOLATE_REGEX });
        this.copyTemplate('mvn/settings.xml', '.mvn/settings.xml', 'copy');
        this.copyTemplate('mvn/site.xml.ejs', 'src/site/site.xml', 'template', null, { interpolate: jhipsterConstants.INTERPOLATE_REGEX });
        this.copyTemplate('RELEASE.md', 'RELEASE.md', 'copy');
        // order matter!
        this.replaceContent(
            'pom.xml',
            '<version>(\\w|\.)*?<\/version>\\s*<packaging>',// eslint-disable-line
            '<packaging>',
            true
        );
        this.replaceContent(
            'pom.xml',
            '<parent>(\\s|\\w|\.)*?<\/parent>',// eslint-disable-line
            `<groupId>${this.packageName}</groupId>`,
            true
        );
        this.replaceContent(
            'pom.xml',
            `<groupId>${this.packageName}</groupId>`,
            `<parent>\n\t<groupId>${this.packageName}</groupId>\n\t<artifactId>${this.dasherizedBaseName}-reporting</artifactId>\n\t<version>0.0.1-SNAPSHOT</version>\n\t<relativePath>.mvn/reporting/pom.xml</relativePath>\n</parent>`
        );

        this.replaceContent(
            'pom.xml',
            '<maven\.version>(\\w|\.)*?<\/maven\.version>',// eslint-disable-line
            '',
            true
        );
        this.replaceContent(
            'pom.xml',
            '<maven\.build\.timestamp\.format>(\\w|\.)*?<\/maven\.build\.timestamp\.format>',// eslint-disable-line
            '',
            true
        );
        this.replaceContent(
            'pom.xml',
            '<java\.version>(\\w|\.)*?<\/java\.version>',// eslint-disable-line
            '',
            true
        );

        this.replaceContent(
            'pom.xml',
            '<project\.build\.sourceEncoding>(\\w|\.)*?<\/project\.build\.sourceEncoding>',// eslint-disable-line
            '',
            true
        );
        this.replaceContent(
            'pom.xml',
            '<project\.reporting\.outputEncoding>(\\w|\.)*?<\/project\.reporting\.outputEncoding>',// eslint-disable-line
            '',
            true
        );
        this.replaceContent(
            'pom.xml',
            '<sonar\.jacoco\.itReportPath>(\\w|\.|\$|\{|\}|\/)*?<\/sonar\.jacoco\.itReportPath>',// eslint-disable-line
            '',
            true
        );
        this.replaceContent(
            'pom.xml',
            '<sonar\.jacoco\.reportPath>(\\w|\.|\$|\{|\}|\/)*?<\/sonar\.jacoco\.reportPath>',// eslint-disable-line
            '',
            true
        );
    }

    install() {
        const logMsg =
            'To install the enterprise site, just run mvnw site. To deploy, run mvn release:prepare mvn release:perform. you can also tweak the travis file to configure continuous deployment';
        this.log(logMsg);
    }

    end() {
        this.log('End of enterprise-pom generator');
    }
};
