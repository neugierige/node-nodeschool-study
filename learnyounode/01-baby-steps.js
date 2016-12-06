var sum = 0
for (i = 2; i < process.argv.length+2; i++) {
  if (isNaN(process.argv[i]) === false) {
    sum += Number(process.argv[i])
  }
}

console.log(sum);
