import test from 'umi-test';

const args = process.argv.slice(2);



test({
  
}).catch(e => {
  console.log(e);
  process.exit(1);
});
