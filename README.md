# install nodeJS
https://nodejs.org/en/download/

# install required node packages
npm intall

# open an E2E test 
cypress/integration/sample_ui_spec.js

# maually run UI tests
1. open the test runner
    ```console
    $  npm run cy:open
    ```
2. doubleclick cypress/integration/sample_ui_spec.js

# running UI tests from from command line
```console
$  npm run cy:run -- --spec "cypress/integration/sample_ui_spec.js"
```

```console
$  npm run cy:run -- --record --key 75048ae5-2e12-48d7-8019-d8d2512e90b7 --spec "cypress/integration/sample_ui_spec.js"
```

# start backend server with json-server ()
```console
$  json-server employees.json
```
or
```console
$  json-server employees.js
```
# view the API in Chrome or Postman
http://localhost:3000/employees

# View the API tests, then maually run them
1. open the test runner
    ```console
    $  npm run cy:open
    ```
2. doubleclick cypress/integration/sample_api_spec.js