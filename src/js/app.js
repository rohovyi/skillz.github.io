window.DARKNESS = {};

import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWeb();
flsFunctions.collapseMenu();

import * as navigation_Page from "./modules/navbar.js";
navigation_Page.navigationPage();

import * as swiperFunctions from "./modules/swiper.js";
swiperFunctions.swiperFunction();