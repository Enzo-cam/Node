const fs = require('fs')

const content = fs.readFileSync('README.md', 'utf-8')

const wordCount = content.split(' ')

const reactCount = wordCount.filter(word => word.toLowerCase().includes('react') ).length

const secondReactCount = content.match(/react/gi ?? []).length

console.log("Palabras: ", wordCount.length)
console.log("Palabras de react: ", secondReactCount)


