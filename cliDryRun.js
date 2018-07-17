const {test} = require('./dryRun');
console.log('running dry run')
test(null, null, () => console.log('done'))