import { joinPage, signupPage } from '../pageobjects/index';
import { faker } from '@faker-js/faker'

describe('Register reviewer', () => {

    beforeEach( async () => {
        await joinPage.open();
    })

    it('should not be able register with invalid email', async () => {       
        // When
        await joinPage.clickOnReviewerButton();
        await signupPage.shouldBeOpenedAsReviewer();

        // And
        await signupPage.insertFirstName({firstName: faker.name.firstName()});
        await signupPage.insertLastName({lastName: faker.name.lastName()});
        await signupPage.insertEmail({email: 'test@'});
        await signupPage.insertPassword({password: 'Testing123456!'});
        await signupPage.confirmPassword({password: 'Testing123456!'})
        await signupPage.checkAgreeToS();
        await signupPage.submitRegistration();

        // Then
        await signupPage.shouldErrorEmailMessageApear();
    });

    it('should not be able register with invalid password', async () => {       
        // When
        await joinPage.clickOnReviewerButton();
        await signupPage.shouldBeOpenedAsReviewer();

        // And
        await signupPage.insertFirstName({firstName: faker.name.firstName()});
        await signupPage.insertLastName({lastName: faker.name.firstName()});
        await signupPage.insertEmail({email: faker.internet.email()});
        await signupPage.insertPassword({password: 'Testing'});
        await signupPage.confirmPassword({password: 'Testing'});
        await signupPage.checkAgreeToS();
        await signupPage.submitRegistration();

        // Then
        await signupPage.shouldPasswordBeCorrect();
    });

    it('should not be able register when passwords does not match', async () => {       
        // When
        await joinPage.clickOnReviewerButton();
        await signupPage.shouldBeOpenedAsReviewer();

        // And
        await signupPage.insertFirstName({firstName: faker.name.firstName()});
        await signupPage.insertLastName({lastName: faker.name.firstName()});
        await signupPage.insertEmail({email: faker.internet.email()});
        await signupPage.insertPassword({password: 'Testing123456!'});
        await signupPage.confirmPassword({password: 'Testing'});
        await signupPage.checkAgreeToS();
        await signupPage.submitRegistration();

        // Then
        await signupPage.shouldPasswordsMatch();
    });

    it('should not be able register without first name', async () => {       
        // When
        await joinPage.clickOnReviewerButton();
        await signupPage.shouldBeOpenedAsReviewer();

        // And
        await signupPage.insertFirstName({firstName: ''});
        await signupPage.insertLastName({lastName: faker.name.firstName()});
        await signupPage.insertEmail({email: faker.internet.email()});
        await signupPage.insertPassword({password: 'Testing123456!'});
        await signupPage.confirmPassword({password: 'Testing'});
        await signupPage.checkAgreeToS();
        await signupPage.submitRegistration();

        // Then
        await signupPage.shouldErrorFirstNameAppear();
    });
});


