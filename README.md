# E2E WebdriverIO

## How to run tests

Pull project and the first thing that you need to do is to run:

```sh
$ npm install
```
This will generate the node modules folder.

### Local Run

  ```sh
$ npm run e2e:test
```

### Github Actions Run

Navigate to Actions section, and select Manual Run tests. Select Run Workflow, choose branch and click on Run Workflof button. 

# Reporting

Report will be deployed to github pages on url https://jasminhusadzic.github.io/wdio-electron/
Currently is used Allure report. If execution is triggered over Github Actions, reports will be saved as Artifact (report.zip)
