
import fs from 'fs'; // Need to install Node type definition file (see package.json)

export abstract class CsvFileReader<T> {
  abstract mapRow(row: string[]): T;

  data: T[] = [];
  
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
    .readFileSync(this.filename, {
      encoding: 'utf-8' // Need to provide encoding type or we get a buffer
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',');
    })
    .map(this.mapRow);
  }

}