"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = __importDefault(require("fs")); // Need to install Node type definition file (see package.json)
class HtmlReport {
    print(report) {
        const html = `
      <div>
        <h1>Analysis Output Test</h1>
        <div>${report}</div>
      </div>
    `;
        fs_1.default.writeFileSync('report.html', html);
    }
}
exports.HtmlReport = HtmlReport;
