import { generalConf } from './general.conf.js'
export let bsConf = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    capabilities: process.env.PLATFORM === "android" ? [
        {
            "platformName": "Android",
            "appium:deviceName": "Samsung Galaxy S22 Ultra",
            "appium:automationName": "UIAutomator2",
            "appium:app": "bs://bef93c66f0be6b9cfd223e87ceb6c549c644f648",
            "appium:platformVersion": "12.0"
        }
    ] : [
        {
             "platformName": "iOS",
             "appium:deviceName": "iPhone 15",
             "appium:automationName": "XCUITest",
             "appium:app": "bs://12f6abe7f9d225ea51feed21a46e3f9ae5ee187f",
             "appium:platformVersion": "17"
        }
    ],
    commonCapabilities: {
        'bstack:options': {
            projectName: "BrowserStack EBAC",
            buildName: 'browserstack build',
            sessionName: `Test ${process.env.PLATFORM}`
            // debug: true,
            // networkLogs: true
        }
    },
    ...generalConf
}