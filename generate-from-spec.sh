#!/bin/bash

#
# script to manage the generation of amber-javascript-sdk codegen
# files
#

# swagger.json must be copied here first
if [ ! -f swagger.json ]; then
    echo "error: swagger.json file is missing, install first from expert-api"
    exit 1
fi


# some files should not be overwritten
# move them aside and back again after the generation
backup_list="src/ApiClient.js README.md package.json"
for file in ${backup_list}; do
    cp ${file} ${file}.backup
done

# run the generator
swagger-codegen generate -DmoduleName=amber-javascript-sdk \
	-DpackageName=amber-javascript-sdk \
	-DprojectDescription='Boon_Logic_Amber_SDK' \
	-DusePromises=true \
	-i swagger.json \
	-l javascript -o .

# restore backups
for file in ${backup_list}; do
    mv ${file}.backup ${file}
done
