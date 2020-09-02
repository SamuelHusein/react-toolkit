const path = require('path');
var fs = require('fs');

try {
   const args = process.argv;
    let template = '';

    if(args.length >= 3){
        const NPM_TOKEN = args[2];
        template = `registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
save-exact=true`;
    } else {
        template = `registry=https://registry.npmjs.org/
save-exact=true`;
    }
   const filePath = path.join(__dirname, '../.npmrc');
   fs.writeFileSync(filePath  , template, 'utf8');
    return 1;
} catch(ex) {
    return -1;
    console.error(ex);
}