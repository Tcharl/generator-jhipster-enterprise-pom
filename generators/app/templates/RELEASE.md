# Release on Maven Central 

To release this process, check the informations on the .mvn/parent/pom.xml file 
Also, configure your gpg key and passphrase, as well as your Nexus credentials corresponding to the properties set in .mvn/settings.xml 

`
./mvnw -f .mvn/parent/pom.xml --batch-mode release:prepare -DdryRun=true
./mvnw -f .mvn/parent/pom.xml --batch-mode release:clean
./mvnw site
./mvnw -f .mvn/parent/pom.xml --batch-mode release:prepare
./mvnw -f .mvn/parent/pom.xml --batch-mode release:perform -P nexus-pro
`


# On Travis

A Travis CD deployment sample has been made [at this adress](https://github.com/Tcharl/test-travis-release), also, a [branch](https://github.com/Tcharl/generator-jhipster/tree/MAVEN_REPORTING) for full Jhipster integration has been implemented

# Site

Please also check that the site url has been correctly configured
