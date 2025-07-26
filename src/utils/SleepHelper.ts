
export const sleep = async (milliseconds: number = 500): Promise<void> => {
  console.log(`Sleeping for ${milliseconds} ms...`);
  await new Promise(resolve => setTimeout(resolve, milliseconds));
};

// SleepLong is equivalent to the original 5 seconds sleep
export const sleepLong = async (): Promise<void> => {
  console.log('Sleeping for 5000 ms (5 seconds)...');
  await new Promise(resolve => setTimeout(resolve, 5000));
};

// Default sleep is 500 milliseconds (short sleep)
export const sleepShort = async (): Promise<void> => {
  console.log('Sleeping for 500 ms...');
  await new Promise(resolve => setTimeout(resolve, 500));
};
