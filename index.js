function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  function lee() {
    console.log('lee')
  }
  return lee
}

function returnsAnAnonymousFunction() {
  var lee = function() {
    console.log('lee')
  }
  return lee
}
