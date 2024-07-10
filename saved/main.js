import './style.css';
import { frontHeader } from "./frontPage.js";
import { router } from './router.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded");
    frontHeader();
    router();
});
