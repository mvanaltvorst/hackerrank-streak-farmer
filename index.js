'use strict';

const puppeteer = require('puppeteer');
const fs = require("fs");


const username = fs.readFileSync("/run/secrets/hackerrank-username").trim();
const password = fs.readFileSync("/run/secrets/hackerrank-password").trim();

(async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
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
})()