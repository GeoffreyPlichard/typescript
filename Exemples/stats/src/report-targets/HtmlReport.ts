import { OutputTarget } from "../Summary";
import fs from 'fs'; // Need to install Node type definition file (see package.json)

export class HtmlReport implements OutputTarget {

  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output Test</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync('report.html', html);
  }
}