"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
// Composition pattern: we import instances of other classes 
// to compose our summary
class Summary {
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
