import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { OrderPage } from "./pages/place_order"
import dataTest from "../fixtures/testData.json"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let orderPage = new OrderPage()

const URL = 'https://www.saucedemo.com/v1'

it('Test LOGIN', () => {
    loginPage.login(URL,dataTest.username,dataTest.password)
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,dataTest.username,'invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,dataTest.username,dataTest.password)
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})
it('Test Add Item to Shopping Cart', () => {
    loginPage.login(URL, dataTest.username,dataTest.password)
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
    dashboardPage.addToCart()
})
it('Test Remove Item from Shopping Cart', () => {
    loginPage.login(URL, dataTest.username, dataTest.password)
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
    //dashboardPage.addToCart()
    dashboardPage.removeFromCart()
})
it('Test Create Order', () => {
    loginPage.login(URL, dataTest.username, dataTest.password)
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
    dashboardPage.addToCart()
    dashboardPage.clickShoppingCart()
    orderPage.createOrder()
    orderPage.assertOrder()
})
