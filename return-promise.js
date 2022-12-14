function stretch() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done stretching')
      resolve();
    }, 1000)
  });
}

function runOnTreadmill() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done running on treadmill')
    }, 500)
    resolve();
  })

}

function liftWeights() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('done lifting weights')
    }, 2000)
    resolve();
  })

}

function workout() {
  stretch()
  .then(() => runOnTreadmill())
  .then(() => liftWeights())
  .then(() => console.log('done working out'));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:


    // done working out
