# amber-javascript-sdk

## Developers notes

### clone package and create a local package
```
git clone git@gitlab.boonlogic.com:development/expert/amber-javascript-sdk
cd amber-javascript-sdk
npm link
npm install
npm run package
```

Note: When finished with development, run `npm unlink amber-javascript-sdk`

### seting up example scripts

from amber-javascript-sdk top level directory:

```
cd examples
npm init -y
npm install amber-javascript-sdk
```

### running sample scripts

from examples directory:

```
node connect-example.js
```

### publishing a new version of amber-javascript-sdk

* Edit `package.json` to increment the version.  Submit these changes to the master branch.  May be required to do a merge request first.
* Execute the `npm publish` command.  You will need a login to the npmjs registry.  The new package should appear at: [https://www.npmjs.com/package/amber-javascript-sdk](https://www.npmjs.com/package/amber-javascript-sdk)


### regenerating models via codegen

When the amber swagger specification has changed, it will be necessary to
regenerate the models and supporting code via codegen.  This is done through
the following procedure

* Copy amber-api.json specification into amber-javascript-sdk directory as `swagger.json`

* Run swagger generator

```
npm run generate
```

It may be necessary at this point to edit the src/sdk.js file to update the interface for any
new features.  For example, a property was added to a model that now needs to become a parameter
to an function.

