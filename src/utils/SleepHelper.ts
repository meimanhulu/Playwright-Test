export class SleepHelper {
  static async sleep(milliseconds: number = 500): Promise<void> {
    console.log(`Sleeping for ${milliseconds} ms...`);
    await new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  static async sleepLong(): Promise<void> {
    console.log('Sleeping for 10000 ms (10 seconds)...');
    await new Promise(resolve => setTimeout(resolve, 10000));
  }

  static async sleepShort(): Promise<void> {
    console.log('Sleeping for 5000 ms...');
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}
