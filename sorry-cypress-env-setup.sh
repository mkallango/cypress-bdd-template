#!/bin/bash

CYPRESS_VERSION="\$(npm show cypress version)"
echo $CYPRESS_VERSION
CYPRESS_CONFIG_FILE_PATH="\$(npx cypress cache path)/${CYPRESS_VERSION}/Cypress/resources/app/packages/server/config/app.yml"
echo $CYPRESS_CONFIG_FILE_PATH
sed -i 's/api.cypress.io/localhost:8080/g' $CYPRESS_CONFIG_FILE_PATH