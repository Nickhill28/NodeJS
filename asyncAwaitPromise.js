const log = (value) => {
    return new Promise((resolve) => {
      console.log(value);
      resolve();
    });
  };
  
  const wait = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        //console.log(time);
        resolve();
      }, time);
    });
  };
  
  (async () => {
    await log('a');
    await log('b');
    await wait(3000);
    await log('c');
    await wait(0);
    await log('d');
    await log('e');
  })();