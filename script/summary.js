fs = require('fs')
const users = {}
const files = process.argv.slice(2)
const filenames = []
function add(accumulator, a) {
  return accumulator + a;
}
for (let index = 0; index < files.length; index++) {
  const file = files[index];
  const filename = file.split('/')[file.split('/').length -1]
  filenames.push(filename)
  const data = fs.readFileSync(file, 'utf-8').split("\n")
  .map(c => c.split("|").map(c => c.trim()) )
  for (let j = 0; j < data.length; j++) {
    const cell = data[j];
    const [_, name, total, percent] = cell
    if(name != '----------------------' && name != 'name'){
      if(!users[name]){
        users[name] = {}
      }
      users[name][filename] = total
    }
  }
}
const summary = Object.keys(users).map(user => {
  const numbers = filenames.map(f => users[user][f] || 0).map(f => parseFloat(f))
  const sum = numbers.reduce(add,0);
  return([user, ...numbers, sum])
})
console.log(`name, ${filenames.join(',')}, summary`)
summary.sort((a, b) => {
  const lastNum = a.length - 1
  return b[lastNum] - a[lastNum]
}).forEach(s => {
  console.log(s.join(','))
})
