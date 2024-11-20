# Video

https://www.youtube.com/watch?v=CBnX4BKRbEU

# Blog

https://medium.com/t-t-software-solution/2-odds-conference-2024-e2e-testing-with-playwright-aa47c149cc4b

# Installation
Install Yarn 
```
brew install yarn
```

# Hello World
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

# Cheat Sheet
```
# สร้าง Playwright Poject
yarn create playwright

# รันการทดสอบทั้งหมดแบบ End-to-End (E2E)
yarn playwright test

# แสดงผลในรูปแบบ HTML Report จากการรัน Playwright
yarn playwright show-report

# เปิดโหมด UI อินเทอร์แอคทีฟ เพื่อจัดการและตรวจสอบการทดสอบ
yarn playwright test --ui

# รันการทดสอบเฉพาะในไฟล์ที่ระบุ (ในตัวอย่างนี้คือไฟล์ example)
yarn playwright test example

# รันการทดสอบในโหมดดีบัก (Debug) เพื่อช่วยวิเคราะห์ปัญหา
yarn playwright test --debug

# ใช้ Codegen เพื่อสร้างโค้ดสำหรับการทดสอบโดยอัตโนมัติ
yarn playwright codegen
```