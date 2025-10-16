import { defineConfig } from "playwright/test";

export default defineConfig(
  {
    testDir:'./tests',
    reporter:[['html'],['list'],['allure-playwright']],
    workers:1,
    timeout: 90000,
    use:{
      trace:'on',
      screenshot:'only-on-failure',
      video:'on',
    },
    projects:[
      {
        use:{browserName:'chromium'}
      },
      // {
      //   use:{browserName:'firefox'}
      // }
    ]

  }
)