# amber-javascript-sdk

## Developers notes

### clone package and create a local package
```
git clone git@gitlab.boonlogic.com:development/expert/amber-javascript-sdk
cd amber-javascript-sdk
npm install
npm run package
```

### seting up example scripts

from amber-javascript-sdk top level directory:

```
cd examples
npm install ..
```

### running sample scripts

from examples directory:

```
node connect-example.js
```

### publishing a new version of amber-javascript-sdk

* Edit `package.json` to increment the version.  Submit these changes to the master branch.  May be required to do a merge request first.
* Execute the `npm publish` command.  You will need a login to the npmjs registry.  The new package should appear at: [https://www.npmjs.com/package/amber-javascript-sdk](https://www.npmjs.com/package/amber-javascript-sdk)





