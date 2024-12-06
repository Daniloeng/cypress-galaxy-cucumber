const report = require("multiple-cucumber-html-reporter");
const fs = require("fs");
const { exec } = require("child_process");


const cucumberJsonDirectory = './cypress/reports/cucumber-json'
const cucumberHtmlMultiReport = './cypress/reports/html-multi-report'
const isWin = process.platform === "win32";
const command = 'cat "./cypress/reports/cucumber-ndjson/cucumber-report.ndjson" | cucumber-json-formatter > "./cypress/reports/cucumber-json/cucumber-report.json"'

const createDirectoryIfNotExist = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

// Creating directories..
createDirectoryIfNotExist(cucumberJsonDirectory);
createDirectoryIfNotExist(cucumberHtmlMultiReport);

// afterEach(() => {
//   cy.takeStepScreenshot('step_screenshot', { capture: 'fullPage' });
// });

const generateReport = () => {
  report.generate({
    jsonDir: "cypress/reports/cucumber-json/",
    reportPath: "cypress/reports/html-multi-report/",
    ignoreBadJsonFile: true,
    displayReportTime: true,
    displayDuration: true,
    metadata: {
      device: "Local test machine.",
      platform: { name: "Windows", version: "11" },
    },
  });
}

// Script to create cucumber-report.json
if (isWin) {
  const winCommand = `powershell ${command}`;
  exec(winCommand, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    generateReport();
});
} else {
  exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    generateReport();
});
}




