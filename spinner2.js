const lineArray = ['|', '/', '-', '\\'];
let delay = 100;

for (const line of lineArray) {
  setTimeout(() => {process.stdout.write(`\r${line}    `)}, delay);
  delay += 200;
}

setTimeout(() => {
console.log();
}, 701);
