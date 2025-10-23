import { LeftNavigationPage } from './../pages/LeftNavigationPage';
import {test as baseTest} from "playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { UserPage } from "../pages/UserPage";
import { PIMPage } from '../pages/PIMPage';

type POMFixtureType = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage:UserPage;
    leftNavigationPage:LeftNavigationPage;
    pimPage:PIMPage;
}

export const test = baseTest.extend<POMFixtureType>({
    loginPage: async({page},use)=>{
        await use(new LoginPage(page));
    },
    dashboardPage: async({page},use)=>{
        await use(new DashboardPage(page));
    },
    userPage: async({page},use)=>{
        await use(new UserPage(page));
    },
    leftNavigationPage: async({page},use)=>{
        await use(new LeftNavigationPage(page));
    },
    pimPage: async({page},use)=>{
        await use(new PIMPage(page));
    }
    


});

