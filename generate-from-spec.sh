#!/bin/bash

#
# script to manage the generation of amber-javascript-sdk codegen files
#
# Note: see .codegen-ignore for list of exclusions
#

# swagger.json must be copied here first
if [ ! -f swagger.json ]; then
    echo "error: swagger.json file is missing, install first from expert-api"
    exit 1
fi

# run the generator
swagger-codegen generate -DmoduleName=amber-javascript-sdk \
	-DpackageName=amber-javascript-sdk \
	-DprojectDescription='Boon_Logic_Amber_SDK' \
	-DusePromises=true \
	-i swagger.json \
	-l javascript -o .
