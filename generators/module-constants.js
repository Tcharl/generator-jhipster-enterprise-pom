/**
 * Copyright 2013-2018 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see http://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// version of docker images


// Version of Java, Scala
const JAVA_VERSION = '1.8'; // Java version is forced to be 1.8. We keep the variable as it might be useful in the future.
const SCALA_VERSION = '2.12.1';

// version of Node, Yarn, NPM
const NODE_VERSION = '8.9.4';
const YARN_VERSION = '1.5.1';
const NPM_VERSION = '5.7.1';

// all constants used throughout all generators

const MAIN_DIR = 'src/main/';
const TEST_DIR = 'src/test/';

// Note: this will be prepended with 'target/' for Maven, or with 'build/' for Gradle.
const CLIENT_DIST_DIR = 'www/';

const SUPPORTED_VALIDATION_RULES = ['required', 'unique', 'max', 'min', 'maxlength', 'minlength', 'maxbytes', 'minbytes', 'pattern'];

// documentation constants
const JHIPSTER_DOCUMENTATION_URL = 'http://www.jhipster.tech';
const JHIPSTER_DOCUMENTATION_ARCHIVE_PATH = '/documentation-archive/';

const constants = {
    INTERPOLATE_REGEX: /<%:([\s\S]+?)%>/g, // so that tags in templates do not get mistreated as _ templates
    DOCKER_DIR: `${MAIN_DIR}docker/`,
    LINE_LENGTH: 180,
    MAIN_DIR,
    TEST_DIR,

    CLIENT_MAIN_SRC_DIR: `${MAIN_DIR}webapp/`,
    CLIENT_TEST_SRC_DIR: `${TEST_DIR}javascript/`,
    CLIENT_WEBPACK_DIR: 'webpack/',
    CLIENT_DIST_DIR,
    ANGULAR_DIR: `${MAIN_DIR}webapp/app/`,
    REACT_DIR: `${MAIN_DIR}webapp/app/`,

    SERVER_MAIN_SRC_DIR: `${MAIN_DIR}java/`,
    SERVER_MAIN_RES_DIR: `${MAIN_DIR}resources/`,
    SERVER_TEST_SRC_DIR: `${TEST_DIR}java/`,
    SERVER_TEST_RES_DIR: `${TEST_DIR}resources/`,

    // entity related
    SUPPORTED_VALIDATION_RULES,

    JHIPSTER_DOCUMENTATION_URL,
    JHIPSTER_DOCUMENTATION_ARCHIVE_PATH,


    JAVA_VERSION,
    SCALA_VERSION,
    NODE_VERSION,
    YARN_VERSION,
    NPM_VERSION
};

module.exports = constants;
