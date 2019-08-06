'use strict';

const puppeteer = require('puppeteer-core');
const fs = require("fs");

const username = fs.readFileSync("/run/secrets/hackerrank-username", "utf-8").trim();
const password = fs.readFileSync("/run/secrets/hackerrank-password", "utf-8").trim();

(async () => {
    let browser;
    try {
        //TODO: remove unsafe --no-sandbox
        browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox'], executablePath: '/usr/bin/chromium-browser'});
        const page = await browser.newPage();
        await page.goto('https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login');
        await page.type('#input-1', username);
        await page.type('#input-2', password);
        await page.click('button[type="submit"]');
        await page.waitForNavigation();

        if (page.url() != 'https://www.hackerrank.com/dashboard') {
            console.log('Login failed! Are the username and password correct?');
            await browser.close();
            process.exit(1);
        } else {
            console.log('Login succeeded!');
            await browser.close();
        }
    } catch (e) {
        console.log("Caught exception: ", e);
        await browser.close();
        process.exit(1);
    }
})();
