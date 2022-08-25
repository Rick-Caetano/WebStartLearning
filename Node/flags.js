const getFlag = require('./basico de node')

// passe o seguinte valor para o terminal: node flags --string "ola" --name 'rick'
console.log(getFlag('--string') + ' ' + getFlag('--name')) //sempre depois da flag ele pegará seu valor