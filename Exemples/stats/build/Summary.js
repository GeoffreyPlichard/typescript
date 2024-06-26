"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./report-targets/HtmlReport");
// Composition pattern: we import instances of other classes 
// to compose our summary
class Summary {
    static winsAnalysisWithHtmlReport(teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HtmlReport_1.HtmlReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
