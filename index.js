const sleep = async (seconds, isMilliseconds) => {
    return new Promise(async (resolve, reject) => {
      if ( seconds == null || seconds == undefined || isNaN(seconds) == true) 
      reject(new Error('\'Seconds\' argument must be of type \'Number\' or \'String\' containing only a number')); // 'Seconds' argument is NaN.
  
        if (
          isMilliseconds === true
        ) setTimeout(resolve, seconds * 1000) // Multiply 'seconds' argument by 1000 to convert to seconds.

        else if (
            isMilliseconds === false
        ) setTimeout(resolve, seconds) // 

        else if (
            isMilliseconds === undefined ||
            isMilliseconds === null
        ) setTimeout(resolve, seconds)

        else reject(new Error('\'isMilliseconds\' argument must be of type Boolean'));
    });
}
  
module.exports = sleep;