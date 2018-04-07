# generator-jhipster-enterprise-pom
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> JHipster module, This module enables release management using the maven release plugin, as well as maven site generation, which aggregagtes reports and provide a site from them

# Introduction

This is a [JHipster](http://jhipster.github.io/) module adding maven site generation as well as maven release management capabilities.

# Prerequisites

As this is a [JHipster](http://jhipster.github.io/) module, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://jhipster.github.io/installation.html)

# Installation

## With Yarn

To install this module:

```bash
yarn global add generator-jhipster-enterprise-pom
```

To update this module:

```bash
yarn global upgrade generator-jhipster-enterprise-pom
```

## With NPM

To install this module:

```bash
npm install -g generator-jhipster-enterprise-pom
```

To update this module:

```bash
npm update -g generator-jhipster-enterprise-pom
```

# Usage

In your JHipster project, launch:

`yo jhipster-enterprise-pom`, it will generate 2 new poms on your project:
* One for Parent configuration (release, signing, ...)
* One for reporting configuration, which will inherit from the parent one
And it will change the original pom adding the reporting pom as parent.

You can then release to an ARM (for example Maven-central) with a signed gpg key and your credentials using these commands:
`./mvnw -f .mvn/parent/pom.xml --batch-mode release:prepare -DdryRun=true 
./mvnw -f .mvn/parent/pom.xml --batch-mode release:clean 
./mvnw site 
./mvnw -f .mvn/parent/pom.xml --batch-mode release:prepare 
./mvnw -f .mvn/parent/pom.xml --batch-mode release:perform -P nexus-pro 
`

You can take a look at [that sample project](https://github.com/Tcharl/test-travis-release) which continuously release using travis.

# License

Apache-2.0 © [Charlie Mordant](https://blog.osgiliath.net)


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-enterprise-pom.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-enterprise-pom
[travis-image]: https://travis-ci.org/Tcharl/generator-jhipster-enterprise-pom.svg?branch=master
[travis-url]: https://travis-ci.org/Tcharl/generator-jhipster-enterprise-pom
[daviddm-image]: https://david-dm.org/Tcharl/generator-jhipster-enterprise-pom.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Tcharl/generator-jhipster-enterprise-pom
