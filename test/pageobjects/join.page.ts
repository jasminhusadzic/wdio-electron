import { Page } from "./page";

export class JoinPage extends Page {

    public get reviewerButton() {
        return $('span*=Reviewer');
    }

    public open() {
        return super.open('join');
    }

    async clickOnReviewerButton() {
        await this.reviewerButton.waitForDisplayed({timeout: 6000})
        await this.reviewerButton.click();
    }
}
