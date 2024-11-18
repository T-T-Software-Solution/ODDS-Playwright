Install Yarn 
```
brew install yarn
```

Create Playwright
https://playwright.dev/docs/intro#installing-playwright
```
yarn create playwright
```

Select Typescript, and install Playwright browser

ลองรัน Hello World ด้วย
```
yarn playwright test
```

ลองเปิด HTML Report 
```
 yarn playwright show-report
 ```

Run UI
 ```
 yarn playwright test --ui
 ```

 Run Debugger
 ```
 yarn playwright test --debug
 ```

 Codegen
 ```
 yarn playwright codegen https://workshop-playwright.vercel.app
 ```

เสร็จแล้วลอง Refactor Code เป็น Page Object เพื่อให้ Code ใน Test Spec อ่านง่ายขึ้น
- ดูตัวอย่างใน `pages` และ `02.odds.refactoring`
- เสร็จแล้วรัน `yarn playwright test --ui`