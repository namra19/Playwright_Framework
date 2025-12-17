import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from "../page_objects/BasePage.js";
import { URLs } from '../fixtures/urls.js';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }
    //Navigate to login page
    async navigate() {
        await this.page.goto(URLs.loginURL, { waitUntil: 'load' });
    }

    //Verify URL
    async verifyURL(expectedURL: RegExp | string) {
        await expect(this.page).toHaveURL(expectedURL);
    }

    //Verify Page title
    async verifyTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }
}