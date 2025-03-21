import { useEffect, useState } from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
const Demo = () => {
  let style = `
    /*====================== CSS Index Here =======================*/
/*
01. Abstracts
    1.1. Classes
    1.2. Extend
    1.3. Functions
    1.4. Mixins
    1.5. Variable
    1.6. Wordpress Default

02. Base
    2.1. Margin
    2.2. Padding
    2.3. Typography

03. Components
    3.1. Accordion
    3.2. Button
    3.3. Form
    3.4. Pagination
    3.6. Tab

04. Layout
    4.1. Blog Sidebar
    4.2. Breadcrumb
    4.3. Comment
    4.4. Footer
    4.5. Header Top
    4.6. Header
    4.7. Preloader
    4.8. Scroll Top
    4.9. Section Heading
    4.10. Slick
    4.11. Social Icon
*/
/*======================== CSS Index End ======================*/
/* Convert to Rem start */
/* Convert to Rem End */
/* ======================== Functions Css End ======================= */
/* ======================== Functions Css End ======================= */
/* Font Family*/
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
/* ========================= Variable Css Start ======================== */
:root {
  /* Font Family Variable */
    --heading-font: "Inter", sans-serif;
    --body-font: "Inter", sans-serif;
  /* Font Size Variable Start */
    --heading-one: clamp(2rem, -0.0733rem + 6.3692vw, 3.125rem);
    --heading-two: clamp(1.75rem, 0.7133rem + 2.8846vw, 2.875rem);
    --heading-three: clamp(1.5rem, 0.3353rem + 2.1661vw, 2.5rem);
    --heading-four: clamp(1.5rem, 0.5569rem + 1.444vw, 2.25rem);
    --heading-five: clamp(1.125rem, 1.2rem + 0.722vw, 1.5rem);
    --heading-six: clamp(1rem, 0.769rem + 0.6813vw, 1.25rem);
  /* Font Size End */
  /* template main color */
    --main-h: 222;
    --main-s: 100%;
    --main-l: 64%;
    --main: var(--main-h) var(--main-s) var(--main-l);
  /* White Color */
    --white: 0 0% 100%;
    --black: 221 39% 11%;
    --light: 215 14% 34%;
    --heading-color: var(--black);
    --body-color: var(--light);
    --body-bg: var(--gray);
    --border-color: 236 13% 77%;
    --section-bg: 210 25% 97%;
    --translate-x-middle: translateX(-50%);
    --translate-y-middle: translateY(-50%);
    --size-2: 0.125rem;
    --size-3: 0.1875rem;
    --size-4: 0.25rem;
    --size-5: 0.3125rem;
    --size-6: 0.375rem;
    --size-7: 0.4375rem;
    --size-8: 0.5rem;
    --size-9: 0.5625rem;
    --size-10: 0.625rem;
    --size-11: 0.6875rem;
    --size-12: 0.75rem;
    --size-13: 0.8125rem;
    --size-14: 0.875rem;
    --size-16: 1rem;
    --size-18: 1.125rem;
    --size-20: 1.25rem;
    --size-22: 1.375rem;
    --size-24: 1.5rem;
    --size-26: 1.625rem;
    --size-28: 1.75rem;
    --size-30: 1.875rem;
    --size-32: 2rem;
    --size-36: 2rem;
    --size-40: 2.5rem;
    --size-44: 2.75rem;
    --size-48: 3rem;
    --size-50: 3.125rem;
    --size-56: 3.5rem;
    --size-64: 4rem;
    --size-68: 4.25rem;
    --size-72: 4.5rem;
    --size-76: 4.75rem;
    --size-80: 5rem;
    --size-90: 5.625rem;
    --size-110: 6.875rem;
    --size-120: 7.5rem;
    --size-144: 9rem;
    --size-160: 10rem;
    --main-50: hsl(var(--main-h), var(--main-s), calc(var(--main-l) + (100% - var(--main-l)) * 0.9));
    --main-100: hsl(var(--main-h), var(--main-s), calc(var(--main-l) + (100% - var(--main-l)) * 0.8));
    --main-200: hsl(var(--main-h), var(--main-s), calc(var(--main-l) + (100% - var(--main-l)) * 0.7));
    --main-300: hsl(var(--main-h), var(--main-s), calc(var(--main-l) + (100% - var(--main-l)) * 0.6));
    --main-400: hsl(var(--main-h), var(--main-s), calc(var(--main-l) + (100% - var(--main-l)) * 0.5));
    --main-500: hsl(var(--main-h), var(--main-s), calc(var(--main-l) + (100% - var(--main-l)) * 0.4));
    --main-600: hsl(var(--main-h), var(--main-s), var(--main-l));
    --main-700: hsl(var(--main-h), var(--main-s), calc(var(--main-l) - var(--main-l) * 0.1));
    --main-800: hsl(var(--main-h), var(--main-s), calc(var(--main-l) - var(--main-l) * 0.2));
    --main-900: hsl(var(--main-h), var(--main-s), calc(var(--main-l) - var(--main-l) * 0.3));
    --gray-50: #ECF1F9;
    --gray-100: #E6E6E6;
    --gray-200: #CCCCCC;
    --gray-300: #B3B3B3;
    --gray-400: #999999;
    --gray-500: #808080;
    --gray-600: #666666;
    --gray-700: #4D4D4D;
    --gray-800: #333333;
    --gray-900: #1A1A1A;
    --gray-950: #0D0D0D;
    --light-50: #F5F6FA;
    --light-100: #F3F4F6;
    --light-600: #E4F1FF;
    --light-700: #374151;
    --light-800: #1F2937;
    --primary-50: #E4F1FF;
    --primary-100: #BFDCFF;
    --primary-200: #95C7FF;
    --primary-300: #6BB1FF;
    --primary-400: #519FFF;
    --primary-500: #458EFF;
    --primary-600: #487FFF;
    --primary-700: #486CEA;
    --primary-800: #4759D6;
    --primary-900: #4536B6;
    --danger-50: #FEF2F2;
    --danger-100: #FEE2E2;
    --danger-200: #FECACA;
    --danger-300: #FCA5A5;
    --danger-400: #F87171;
    --danger-500: #EF4444;
    --danger-600: #DC2626;
    --danger-700: #B91C1C;
    --danger-800: #991B1B;
    --danger-900: #7F1D1D;
    --success-50: #F0FDF4;
    --success-100: #DCFCE7;
    --success-200: #BBF7D0;
    --success-300: #86EFAC;
    --success-400: #4ADE80;
    --success-500: #22C55E;
    --success-600: #16A34A;
    --success-700: #15803D;
    --success-800: #166534;
    --success-900: #14532D;
    --warning-50: #FEFCE8;
    --warning-100: #FEF9C3;
    --warning-200: #FEF08A;
    --warning-300: #FDE047;
    --warning-400: #FACC15;
    --warning-500: #EAB308;
    --warning-600: #FF9F29;
    --warning-700: #f39016;
    --warning-800: #e58209;
    --warning-900: #d77907;
    --info-50: #EFF6FF;
    --info-100: #DBEAFE;
    --info-200: #BFDBFE;
    --info-300: #93C5FD;
    --info-400: #60A5FA;
    --info-500: #3B82F6;
    --info-600: #2563EB;
    --info-700: #1D4ED8;
    --info-800: #1E40AF;
    --info-900: #1E3A8A;
    --purple-50: #dab1fa;
    --purple-100: #d39efc;
    --purple-600: #8C01F9;
    --font-xs: 0.75rem;
    --font-sm: 0.875rem;
    --font-md: 1rem;
    --font-lg: 1.125rem;
    --font-xl: 1.25rem;
    --font-2xl: 1.5rem;
    --font-3xl: 1.875rem;
    --font-4xl: 2.25rem;
    --font-5xl: 3rem;
    --font-6xl: 3.75rem;
}

/* ========================= Variable Css End ======================== */
/* ============================ Mixins Css Start ============================ */
/* Media Breakpoint for Each Device Start */
/* Media Breakpoint for Each Device End */
/* ============================ Mixins Css End ============================ */
/* ================================= Button Css Start =========================== */


.btn-check:checked + .btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check) + .btn:active {
    color: none;
    background-color: none;
    border-color: none;
}

.btn {
    position: relative;
    border-radius: 8px;
    border: 1px solid transparent;
    font-weight: 500;
    font-family: var(--body-font);
    color: hsl(var(--white)) !important;
    z-index: 1;
    padding: 15px 24px;
}

.btn:hover, .btn:focus, .btn:focus-visible {
    box-shadow: none !important;
}

.btn-sm {
    padding: 11px 24px !important;
}

.btn:active {
    transform: scale(1.01);
}

.btn-main {
    background-color: hsl(var(--main)) !important;
    border-color: hsl(var(--main)) !important;
}

.btn-main:hover {
    background-color: var(--main-800) !important;
    border-color: var(--main-800) !important;
}

.btn-outline-main {
    background-color: transparent !important;
    border-color: hsl(var(--main)) !important;
    color: hsl(var(--main)) !important;
}

.btn-outline-main:hover {
    background-color: hsl(var(--main)) !important;
    border-color: hsl(var(--main)) !important;
    color: hsl(var(--white)) !important;
}

/* ================================= Button Css End =========================== */
/* Tabs Css Start */
.nav-pills .nav-link.active {
    background-color: var(--main-600) !important;
    color: hsl(var(--white)) !important;
}

.nav-pills .nav-link.active:hover {
    background-color: var(--main-800) !important;
}

/* Tabs Css End */
/* ================================= Typography Css Start =========================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--body-font);
    color: hsl(var(--body-color));
    word-break: break-word;
    background-color: hsl(var(--white));
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

p {
    font-weight: 400;
    margin: 0;
    line-height: 1.6;
}

span {
    display: inline-block;
}

h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4,
h5, .h5,
h6, .h6 {
    margin: 0 0 16px 0;
    font-family: var(--heading-font);
    color: hsl(var(--heading-color));
    line-height: 1.2;
    font-weight: 700;
}

h1, .h1 {
    font-size: var(--heading-one);
}

h2, .h2 {
    font-size: var(--heading-two);
}

h3, .h3 {
    font-size: var(--heading-three);
}

h4, .h4 {
    font-size: var(--heading-four);
}

h5, .h5 {
    font-size: var(--heading-five);
}

h6, .h6 {
    font-size: var(--heading-six);
}

h1 > a,
h2 > a,
h3 > a,
h4 > a,
h5 > a,
h6 > a {
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
    transition: 0.2s linear;
    line-height: inherit;
}

h1 > a:hover,
h2 > a:hover,
h3 > a:hover,
h4 > a:hover,
h5 > a:hover,
h6 > a:hover {
    color: hsl(var(--main));
}

a {
    display: inline-block;
    transition: 0.2s linear;
    text-decoration: none;
    color: #0661e9;
}

a:hover {
    color: #1d72f2;
}

img {
    max-width: 100%;
    height: auto;
}

select {
    cursor: pointer;
}

ul,
ol {
    padding: 0;
    margin: 0;
    list-style: none;
}

button {
    border: 0;
    background-color: transparent;
}

button:focus {
    outline: none;
    box-shadow: none;
}

.form-select:focus {
    outline: 0;
    box-shadow: none;
}

/* ================================= Typography Css End =========================== */
/* ================================= Margin Css Start =========================== */
.m-2 {
    margin: var(--size-2) !important;
}

.m-3 {
    margin: var(--size-3) !important;
}

.m-4 {
    margin: var(--size-4) !important;
}

.m-5 {
    margin: var(--size-5) !important;
}

.m-6 {
    margin: var(--size-6) !important;
}

.m-7 {
    margin: var(--size-7) !important;
}

.m-8 {
    margin: var(--size-8) !important;
}

.m-9 {
    margin: var(--size-9) !important;
}

.m-10 {
    margin: var(--size-10) !important;
}

.m-11 {
    margin: var(--size-11) !important;
}

.m-12 {
    margin: var(--size-12) !important;
}

.m-13 {
    margin: var(--size-13) !important;
}

.m-14 {
    margin: var(--size-14) !important;
}

.m-16 {
    margin: var(--size-16) !important;
}

.m-18 {
    margin: var(--size-18) !important;
}

.m-20 {
    margin: var(--size-20) !important;
}

.m-22 {
    margin: var(--size-22) !important;
}

.m-24 {
    margin: var(--size-24) !important;
}

.m-26 {
    margin: var(--size-26) !important;
}

.m-28 {
    margin: var(--size-28) !important;
}

.m-30 {
    margin: var(--size-30) !important;
}

.m-32 {
    margin: var(--size-32) !important;
}

.m-36 {
    margin: var(--size-36) !important;
}

.m-40 {
    margin: var(--size-40) !important;
}

.m-44 {
    margin: var(--size-44) !important;
}

.m-48 {
    margin: var(--size-48) !important;
}

.m-50 {
    margin: var(--size-50) !important;
}

.m-56 {
    margin: var(--size-56) !important;
}

.m-64 {
    margin: var(--size-64) !important;
}

.m-68 {
    margin: var(--size-68) !important;
}

.m-72 {
    margin: var(--size-72) !important;
}

.m-76 {
    margin: var(--size-76) !important;
}

.m-80 {
    margin: var(--size-80) !important;
}

.m-90 {
    margin: var(--size-90) !important;
}

.m-110 {
    margin: var(--size-110) !important;
}

.m-120 {
    margin: var(--size-120) !important;
}

.m-144 {
    margin: var(--size-144) !important;
}

.m-160 {
    margin: var(--size-160) !important;
}

.mx-2 {
    margin-inline: var(--size-2) !important;
}

.mx-3 {
    margin-inline: var(--size-3) !important;
}

.mx-4 {
    margin-inline: var(--size-4) !important;
}

.mx-5 {
    margin-inline: var(--size-5) !important;
}

.mx-6 {
    margin-inline: var(--size-6) !important;
}

.mx-7 {
    margin-inline: var(--size-7) !important;
}

.mx-8 {
    margin-inline: var(--size-8) !important;
}

.mx-9 {
    margin-inline: var(--size-9) !important;
}

.mx-10 {
    margin-inline: var(--size-10) !important;
}

.mx-11 {
    margin-inline: var(--size-11) !important;
}

.mx-12 {
    margin-inline: var(--size-12) !important;
}

.mx-13 {
    margin-inline: var(--size-13) !important;
}

.mx-14 {
    margin-inline: var(--size-14) !important;
}

.mx-16 {
    margin-inline: var(--size-16) !important;
}

.mx-18 {
    margin-inline: var(--size-18) !important;
}

.mx-20 {
    margin-inline: var(--size-20) !important;
}

.mx-22 {
    margin-inline: var(--size-22) !important;
}

.mx-24 {
    margin-inline: var(--size-24) !important;
}

.mx-26 {
    margin-inline: var(--size-26) !important;
}

.mx-28 {
    margin-inline: var(--size-28) !important;
}

.mx-30 {
    margin-inline: var(--size-30) !important;
}

.mx-32 {
    margin-inline: var(--size-32) !important;
}

.mx-36 {
    margin-inline: var(--size-36) !important;
}

.mx-40 {
    margin-inline: var(--size-40) !important;
}

.mx-44 {
    margin-inline: var(--size-44) !important;
}

.mx-48 {
    margin-inline: var(--size-48) !important;
}

.mx-50 {
    margin-inline: var(--size-50) !important;
}

.mx-56 {
    margin-inline: var(--size-56) !important;
}

.mx-64 {
    margin-inline: var(--size-64) !important;
}

.mx-68 {
    margin-inline: var(--size-68) !important;
}

.mx-72 {
    margin-inline: var(--size-72) !important;
}

.mx-76 {
    margin-inline: var(--size-76) !important;
}

.mx-80 {
    margin-inline: var(--size-80) !important;
}

.mx-90 {
    margin-inline: var(--size-90) !important;
}

.mx-110 {
    margin-inline: var(--size-110) !important;
}

.mx-120 {
    margin-inline: var(--size-120) !important;
}

.mx-144 {
    margin-inline: var(--size-144) !important;
}

.mx-160 {
    margin-inline: var(--size-160) !important;
}

.my-2 {
    margin-block: var(--size-2) !important;
}

.my-3 {
    margin-block: var(--size-3) !important;
}

.my-4 {
    margin-block: var(--size-4) !important;
}

.my-5 {
    margin-block: var(--size-5) !important;
}

.my-6 {
    margin-block: var(--size-6) !important;
}

.my-7 {
    margin-block: var(--size-7) !important;
}

.my-8 {
    margin-block: var(--size-8) !important;
}

.my-9 {
    margin-block: var(--size-9) !important;
}

.my-10 {
    margin-block: var(--size-10) !important;
}

.my-11 {
    margin-block: var(--size-11) !important;
}

.my-12 {
    margin-block: var(--size-12) !important;
}

.my-13 {
    margin-block: var(--size-13) !important;
}

.my-14 {
    margin-block: var(--size-14) !important;
}

.my-16 {
    margin-block: var(--size-16) !important;
}

.my-18 {
    margin-block: var(--size-18) !important;
}

.my-20 {
    margin-block: var(--size-20) !important;
}

.my-22 {
    margin-block: var(--size-22) !important;
}

.my-24 {
    margin-block: var(--size-24) !important;
}

.my-26 {
    margin-block: var(--size-26) !important;
}

.my-28 {
    margin-block: var(--size-28) !important;
}

.my-30 {
    margin-block: var(--size-30) !important;
}

.my-32 {
    margin-block: var(--size-32) !important;
}

.my-36 {
    margin-block: var(--size-36) !important;
}

.my-40 {
    margin-block: var(--size-40) !important;
}

.my-44 {
    margin-block: var(--size-44) !important;
}

.my-48 {
    margin-block: var(--size-48) !important;
}

.my-50 {
    margin-block: var(--size-50) !important;
}

.my-56 {
    margin-block: var(--size-56) !important;
}

.my-64 {
    margin-block: var(--size-64) !important;
}

.my-68 {
    margin-block: var(--size-68) !important;
}

.my-72 {
    margin-block: var(--size-72) !important;
}

.my-76 {
    margin-block: var(--size-76) !important;
}

.my-80 {
    margin-block: var(--size-80) !important;
}

.my-90 {
    margin-block: var(--size-90) !important;
}

.my-110 {
    margin-block: var(--size-110) !important;
}

.my-120 {
    margin-block: var(--size-120) !important;
}

.my-144 {
    margin-block: var(--size-144) !important;
}

.my-160 {
    margin-block: var(--size-160) !important;
}

.ms-2 {
    margin-inline-start: var(--size-2) !important;
}

.ms-3 {
    margin-inline-start: var(--size-3) !important;
}

.ms-4 {
    margin-inline-start: var(--size-4) !important;
}

.ms-5 {
    margin-inline-start: var(--size-5) !important;
}

.ms-6 {
    margin-inline-start: var(--size-6) !important;
}

.ms-7 {
    margin-inline-start: var(--size-7) !important;
}

.ms-8 {
    margin-inline-start: var(--size-8) !important;
}

.ms-9 {
    margin-inline-start: var(--size-9) !important;
}

.ms-10 {
    margin-inline-start: var(--size-10) !important;
}

.ms-11 {
    margin-inline-start: var(--size-11) !important;
}

.ms-12 {
    margin-inline-start: var(--size-12) !important;
}

.ms-13 {
    margin-inline-start: var(--size-13) !important;
}

.ms-14 {
    margin-inline-start: var(--size-14) !important;
}

.ms-16 {
    margin-inline-start: var(--size-16) !important;
}

.ms-18 {
    margin-inline-start: var(--size-18) !important;
}

.ms-20 {
    margin-inline-start: var(--size-20) !important;
}

.ms-22 {
    margin-inline-start: var(--size-22) !important;
}

.ms-24 {
    margin-inline-start: var(--size-24) !important;
}

.ms-26 {
    margin-inline-start: var(--size-26) !important;
}

.ms-28 {
    margin-inline-start: var(--size-28) !important;
}

.ms-30 {
    margin-inline-start: var(--size-30) !important;
}

.ms-32 {
    margin-inline-start: var(--size-32) !important;
}

.ms-36 {
    margin-inline-start: var(--size-36) !important;
}

.ms-40 {
    margin-inline-start: var(--size-40) !important;
}

.ms-44 {
    margin-inline-start: var(--size-44) !important;
}

.ms-48 {
    margin-inline-start: var(--size-48) !important;
}

.ms-50 {
    margin-inline-start: var(--size-50) !important;
}

.ms-56 {
    margin-inline-start: var(--size-56) !important;
}

.ms-64 {
    margin-inline-start: var(--size-64) !important;
}

.ms-68 {
    margin-inline-start: var(--size-68) !important;
}

.ms-72 {
    margin-inline-start: var(--size-72) !important;
}

.ms-76 {
    margin-inline-start: var(--size-76) !important;
}

.ms-80 {
    margin-inline-start: var(--size-80) !important;
}

.ms-90 {
    margin-inline-start: var(--size-90) !important;
}

.ms-110 {
    margin-inline-start: var(--size-110) !important;
}

.ms-120 {
    margin-inline-start: var(--size-120) !important;
}

.ms-144 {
    margin-inline-start: var(--size-144) !important;
}

.ms-160 {
    margin-inline-start: var(--size-160) !important;
}

.me-2 {
    margin-inline-end: var(--size-2) !important;
}

.me-3 {
    margin-inline-end: var(--size-3) !important;
}

.me-4 {
    margin-inline-end: var(--size-4) !important;
}

.me-5 {
    margin-inline-end: var(--size-5) !important;
}

.me-6 {
    margin-inline-end: var(--size-6) !important;
}

.me-7 {
    margin-inline-end: var(--size-7) !important;
}

.me-8 {
    margin-inline-end: var(--size-8) !important;
}

.me-9 {
    margin-inline-end: var(--size-9) !important;
}

.me-10 {
    margin-inline-end: var(--size-10) !important;
}

.me-11 {
    margin-inline-end: var(--size-11) !important;
}

.me-12 {
    margin-inline-end: var(--size-12) !important;
}

.me-13 {
    margin-inline-end: var(--size-13) !important;
}

.me-14 {
    margin-inline-end: var(--size-14) !important;
}

.me-16 {
    margin-inline-end: var(--size-16) !important;
}

.me-18 {
    margin-inline-end: var(--size-18) !important;
}

.me-20 {
    margin-inline-end: var(--size-20) !important;
}

.me-22 {
    margin-inline-end: var(--size-22) !important;
}

.me-24 {
    margin-inline-end: var(--size-24) !important;
}

.me-26 {
    margin-inline-end: var(--size-26) !important;
}

.me-28 {
    margin-inline-end: var(--size-28) !important;
}

.me-30 {
    margin-inline-end: var(--size-30) !important;
}

.me-32 {
    margin-inline-end: var(--size-32) !important;
}

.me-36 {
    margin-inline-end: var(--size-36) !important;
}

.me-40 {
    margin-inline-end: var(--size-40) !important;
}

.me-44 {
    margin-inline-end: var(--size-44) !important;
}

.me-48 {
    margin-inline-end: var(--size-48) !important;
}

.me-50 {
    margin-inline-end: var(--size-50) !important;
}

.me-56 {
    margin-inline-end: var(--size-56) !important;
}

.me-64 {
    margin-inline-end: var(--size-64) !important;
}

.me-68 {
    margin-inline-end: var(--size-68) !important;
}

.me-72 {
    margin-inline-end: var(--size-72) !important;
}

.me-76 {
    margin-inline-end: var(--size-76) !important;
}

.me-80 {
    margin-inline-end: var(--size-80) !important;
}

.me-90 {
    margin-inline-end: var(--size-90) !important;
}

.me-110 {
    margin-inline-end: var(--size-110) !important;
}

.me-120 {
    margin-inline-end: var(--size-120) !important;
}

.me-144 {
    margin-inline-end: var(--size-144) !important;
}

.me-160 {
    margin-inline-end: var(--size-160) !important;
}

.mt-2 {
    margin-block-start: var(--size-2) !important;
}

.mt-3 {
    margin-block-start: var(--size-3) !important;
}

.mt-4 {
    margin-block-start: var(--size-4) !important;
}

.mt-5 {
    margin-block-start: var(--size-5) !important;
}

.mt-6 {
    margin-block-start: var(--size-6) !important;
}

.mt-7 {
    margin-block-start: var(--size-7) !important;
}

.mt-8 {
    margin-block-start: var(--size-8) !important;
}

.mt-9 {
    margin-block-start: var(--size-9) !important;
}

.mt-10 {
    margin-block-start: var(--size-10) !important;
}

.mt-11 {
    margin-block-start: var(--size-11) !important;
}

.mt-12 {
    margin-block-start: var(--size-12) !important;
}

.mt-13 {
    margin-block-start: var(--size-13) !important;
}

.mt-14 {
    margin-block-start: var(--size-14) !important;
}

.mt-16 {
    margin-block-start: var(--size-16) !important;
}

.mt-18 {
    margin-block-start: var(--size-18) !important;
}

.mt-20 {
    margin-block-start: var(--size-20) !important;
}

.mt-22 {
    margin-block-start: var(--size-22) !important;
}

.mt-24 {
    margin-block-start: var(--size-24) !important;
}

.mt-26 {
    margin-block-start: var(--size-26) !important;
}

.mt-28 {
    margin-block-start: var(--size-28) !important;
}

.mt-30 {
    margin-block-start: var(--size-30) !important;
}

.mt-32 {
    margin-block-start: var(--size-32) !important;
}

.mt-36 {
    margin-block-start: var(--size-36) !important;
}

.mt-40 {
    margin-block-start: var(--size-40) !important;
}

.mt-44 {
    margin-block-start: var(--size-44) !important;
}

.mt-48 {
    margin-block-start: var(--size-48) !important;
}

.mt-50 {
    margin-block-start: var(--size-50) !important;
}

.mt-56 {
    margin-block-start: var(--size-56) !important;
}

.mt-64 {
    margin-block-start: var(--size-64) !important;
}

.mt-68 {
    margin-block-start: var(--size-68) !important;
}

.mt-72 {
    margin-block-start: var(--size-72) !important;
}

.mt-76 {
    margin-block-start: var(--size-76) !important;
}

.mt-80 {
    margin-block-start: var(--size-80) !important;
}

.mt-90 {
    margin-block-start: var(--size-90) !important;
}

.mt-110 {
    margin-block-start: var(--size-110) !important;
}

.mt-120 {
    margin-block-start: var(--size-120) !important;
}

.mt-144 {
    margin-block-start: var(--size-144) !important;
}

.mt-160 {
    margin-block-start: var(--size-160) !important;
}

.mb-2 {
    margin-block-end: var(--size-2) !important;
}

.mb-3 {
    margin-block-end: var(--size-3) !important;
}

.mb-4 {
    margin-block-end: var(--size-4) !important;
}

.mb-5 {
    margin-block-end: var(--size-5) !important;
}

.mb-6 {
    margin-block-end: var(--size-6) !important;
}

.mb-7 {
    margin-block-end: var(--size-7) !important;
}

.mb-8 {
    margin-block-end: var(--size-8) !important;
}

.mb-9 {
    margin-block-end: var(--size-9) !important;
}

.mb-10 {
    margin-block-end: var(--size-10) !important;
}

.mb-11 {
    margin-block-end: var(--size-11) !important;
}

.mb-12 {
    margin-block-end: var(--size-12) !important;
}

.mb-13 {
    margin-block-end: var(--size-13) !important;
}

.mb-14 {
    margin-block-end: var(--size-14) !important;
}

.mb-16 {
    margin-block-end: var(--size-16) !important;
}

.mb-18 {
    margin-block-end: var(--size-18) !important;
}

.mb-20 {
    margin-block-end: var(--size-20) !important;
}

.mb-22 {
    margin-block-end: var(--size-22) !important;
}

.mb-24 {
    margin-block-end: var(--size-24) !important;
}

.mb-26 {
    margin-block-end: var(--size-26) !important;
}

.mb-28 {
    margin-block-end: var(--size-28) !important;
}

.mb-30 {
    margin-block-end: var(--size-30) !important;
}

.mb-32 {
    margin-block-end: var(--size-32) !important;
}

.mb-36 {
    margin-block-end: var(--size-36) !important;
}

.mb-40 {
    margin-block-end: var(--size-40) !important;
}

.mb-44 {
    margin-block-end: var(--size-44) !important;
}

.mb-48 {
    margin-block-end: var(--size-48) !important;
}

.mb-50 {
    margin-block-end: var(--size-50) !important;
}

.mb-56 {
    margin-block-end: var(--size-56) !important;
}

.mb-64 {
    margin-block-end: var(--size-64) !important;
}

.mb-68 {
    margin-block-end: var(--size-68) !important;
}

.mb-72 {
    margin-block-end: var(--size-72) !important;
}

.mb-76 {
    margin-block-end: var(--size-76) !important;
}

.mb-80 {
    margin-block-end: var(--size-80) !important;
}

.mb-90 {
    margin-block-end: var(--size-90) !important;
}

.mb-110 {
    margin-block-end: var(--size-110) !important;
}

.mb-120 {
    margin-block-end: var(--size-120) !important;
}

.mb-144 {
    margin-block-end: var(--size-144) !important;
}

.mb-160 {
    margin-block-end: var(--size-160) !important;
}

.mt-0 {
    margin-block-start: 0 !important;
}

.mb-0 {
    margin-block-end: 0 !important;
}

.ms-0 {
    margin-inline-start: 0 !important;
}

.me-0 {
    margin-inline-end: 0 !important;
}

.my-120 {
    margin-block-start: 60px !important;
    margin-block-end: 60px !important;
}

@media (min-width: 576px) {
    .my-120 {
        margin-block-start: 80px !important;
        margin-block-end: 80px !important;
    }
}

@media (min-width: 992px) {
    .my-120 {
        margin-block-start: 120px !important;
        margin-block-end: 120px !important;
    }
}

.mt-120 {
    margin-block-start: 60px !important;
}

@media (min-width: 576px) {
    .mt-120 {
        margin-block-start: 80px !important;
    }
}

@media (min-width: 992px) {
    .mt-120 {
        margin-block-start: 120px !important;
    }
}

.mb-120 {
    margin-block-end: 60px !important;
}

@media (min-width: 576px) {
    .mb-120 {
        margin-block-end: 80px !important;
    }
}

@media (min-width: 992px) {
    .mb-120 {
        margin-block-end: 120px !important;
    }
}

.my-60 {
    margin-block-start: 30px !important;
    margin-block-end: 30px !important;
}

@media (min-width: 576px) {
    .my-60 {
        margin-block-start: 40px !important;
        margin-block-end: 40px !important;
    }
}

@media (min-width: 992px) {
    .my-60 {
        margin-block-start: 60px !important;
        margin-block-end: 60px !important;
    }
}

.mt-60 {
    margin-block-start: 30px !important;
}

@media (min-width: 576px) {
    .mt-60 {
        margin-block-start: 40px !important;
    }
}

@media (min-width: 992px) {
    .mt-60 {
        margin-block-start: 60px !important;
    }
}

.mb-60 {
    margin-block-end: 30px !important;
}

@media (min-width: 576px) {
    .mb-60 {
        margin-block-end: 40px !important;
    }
}

@media (min-width: 992px) {
    .mb-60 {
        margin-block-end: 60px !important;
    }
}
/* ================================= Margin Css End =========================== */
/* ================================= Padding Css Start =========================== */
.p-2 {
    padding: var(--size-2) !important;
}

.p-3 {
    padding: var(--size-3) !important;
}

.p-4 {
    padding: var(--size-4) !important;
}

.p-5 {
    padding: var(--size-5) !important;
}

.p-6 {
    padding: var(--size-6) !important;
}

.p-7 {
    padding: var(--size-7) !important;
}

.p-8 {
    padding: var(--size-8) !important;
}

.p-9 {
    padding: var(--size-9) !important;
}

.p-10 {
    padding: var(--size-10) !important;
}

.p-11 {
    padding: var(--size-11) !important;
}

.p-12 {
    padding: var(--size-12) !important;
}

.p-13 {
    padding: var(--size-13) !important;
}

.p-14 {
    padding: var(--size-14) !important;
}

.p-16 {
    padding: var(--size-16) !important;
}

.p-18 {
    padding: var(--size-18) !important;
}

.p-20 {
    padding: var(--size-20) !important;
}

.p-22 {
    padding: var(--size-22) !important;
}

.p-24 {
    padding: var(--size-24) !important;
}

.p-26 {
    padding: var(--size-26) !important;
}

.p-28 {
    padding: var(--size-28) !important;
}

.p-30 {
    padding: var(--size-30) !important;
}

.p-32 {
    padding: var(--size-32) !important;
}

.p-36 {
    padding: var(--size-36) !important;
}

.p-40 {
    padding: var(--size-40) !important;
}

.p-44 {
    padding: var(--size-44) !important;
}

.p-48 {
    padding: var(--size-48) !important;
}

.p-50 {
    padding: var(--size-50) !important;
}

.p-56 {
    padding: var(--size-56) !important;
}

.p-64 {
    padding: var(--size-64) !important;
}

.p-68 {
    padding: var(--size-68) !important;
}

.p-72 {
    padding: var(--size-72) !important;
}

.p-76 {
    padding: var(--size-76) !important;
}

.p-80 {
    padding: var(--size-80) !important;
}

.p-90 {
    padding: var(--size-90) !important;
}

.p-110 {
    padding: var(--size-110) !important;
}

.p-120 {
    padding: var(--size-120) !important;
}

.p-144 {
    padding: var(--size-144) !important;
}

.p-160 {
    padding: var(--size-160) !important;
}

.px-2 {
    padding-inline: var(--size-2) !important;
}

.px-3 {
    padding-inline: var(--size-3) !important;
}

.px-4 {
    padding-inline: var(--size-4) !important;
}

.px-5 {
    padding-inline: var(--size-5) !important;
}

.px-6 {
    padding-inline: var(--size-6) !important;
}

.px-7 {
    padding-inline: var(--size-7) !important;
}

.px-8 {
    padding-inline: var(--size-8) !important;
}

.px-9 {
    padding-inline: var(--size-9) !important;
}

.px-10 {
    padding-inline: var(--size-10) !important;
}

.px-11 {
    padding-inline: var(--size-11) !important;
}

.px-12 {
    padding-inline: var(--size-12) !important;
}

.px-13 {
    padding-inline: var(--size-13) !important;
}

.px-14 {
    padding-inline: var(--size-14) !important;
}

.px-16 {
    padding-inline: var(--size-16) !important;
}

.px-18 {
    padding-inline: var(--size-18) !important;
}

.px-20 {
    padding-inline: var(--size-20) !important;
}

.px-22 {
    padding-inline: var(--size-22) !important;
}

.px-24 {
    padding-inline: var(--size-24) !important;
}

.px-26 {
    padding-inline: var(--size-26) !important;
}

.px-28 {
    padding-inline: var(--size-28) !important;
}

.px-30 {
    padding-inline: var(--size-30) !important;
}

.px-32 {
    padding-inline: var(--size-32) !important;
}

.px-36 {
    padding-inline: var(--size-36) !important;
}

.px-40 {
    padding-inline: var(--size-40) !important;
}

.px-44 {
    padding-inline: var(--size-44) !important;
}

.px-48 {
    padding-inline: var(--size-48) !important;
}

.px-50 {
    padding-inline: var(--size-50) !important;
}

.px-56 {
    padding-inline: var(--size-56) !important;
}

.px-64 {
    padding-inline: var(--size-64) !important;
}

.px-68 {
    padding-inline: var(--size-68) !important;
}

.px-72 {
    padding-inline: var(--size-72) !important;
}

.px-76 {
    padding-inline: var(--size-76) !important;
}

.px-80 {
    padding-inline: var(--size-80) !important;
}

.px-90 {
    padding-inline: var(--size-90) !important;
}

.px-110 {
    padding-inline: var(--size-110) !important;
}

.px-120 {
    padding-inline: var(--size-120) !important;
}

.px-144 {
    padding-inline: var(--size-144) !important;
}

.px-160 {
    padding-inline: var(--size-160) !important;
}

.py-2 {
    padding-block: var(--size-2) !important;
}

.py-3 {
    padding-block: var(--size-3) !important;
}

.py-4 {
    padding-block: var(--size-4) !important;
}

.py-5 {
    padding-block: var(--size-5) !important;
}

.py-6 {
    padding-block: var(--size-6) !important;
}

.py-7 {
    padding-block: var(--size-7) !important;
}

.py-8 {
    padding-block: var(--size-8) !important;
}

.py-9 {
    padding-block: var(--size-9) !important;
}

.py-10 {
    padding-block: var(--size-10) !important;
}

.py-11 {
    padding-block: var(--size-11) !important;
}

.py-12 {
    padding-block: var(--size-12) !important;
}

.py-13 {
    padding-block: var(--size-13) !important;
}

.py-14 {
    padding-block: var(--size-14) !important;
}

.py-16 {
    padding-block: var(--size-16) !important;
}

.py-18 {
    padding-block: var(--size-18) !important;
}

.py-20 {
    padding-block: var(--size-20) !important;
}

.py-22 {
    padding-block: var(--size-22) !important;
}

.py-24 {
    padding-block: var(--size-24) !important;
}

.py-26 {
    padding-block: var(--size-26) !important;
}

.py-28 {
    padding-block: var(--size-28) !important;
}

.py-30 {
    padding-block: var(--size-30) !important;
}

.py-32 {
    padding-block: var(--size-32) !important;
}

.py-36 {
    padding-block: var(--size-36) !important;
}

.py-40 {
    padding-block: var(--size-40) !important;
}

.py-44 {
    padding-block: var(--size-44) !important;
}

.py-48 {
    padding-block: var(--size-48) !important;
}

.py-50 {
    padding-block: var(--size-50) !important;
}

.py-56 {
    padding-block: var(--size-56) !important;
}

.py-64 {
    padding-block: var(--size-64) !important;
}

.py-68 {
    padding-block: var(--size-68) !important;
}

.py-72 {
    padding-block: var(--size-72) !important;
}

.py-76 {
    padding-block: var(--size-76) !important;
}

.py-80 {
    padding-block: var(--size-80) !important;
}

.py-90 {
    padding-block: var(--size-90) !important;
}

.py-110 {
    padding-block: var(--size-110) !important;
}

.py-120 {
    padding-block: var(--size-120) !important;
}

.py-144 {
    padding-block: var(--size-144) !important;
}

.py-160 {
    padding-block: var(--size-160) !important;
}

.ps-2 {
    padding-inline-start: var(--size-2) !important;
}

.ps-3 {
    padding-inline-start: var(--size-3) !important;
}

.ps-4 {
    padding-inline-start: var(--size-4) !important;
}

.ps-5 {
    padding-inline-start: var(--size-5) !important;
}

.ps-6 {
    padding-inline-start: var(--size-6) !important;
}

.ps-7 {
    padding-inline-start: var(--size-7) !important;
}

.ps-8 {
    padding-inline-start: var(--size-8) !important;
}

.ps-9 {
    padding-inline-start: var(--size-9) !important;
}

.ps-10 {
    padding-inline-start: var(--size-10) !important;
}

.ps-11 {
    padding-inline-start: var(--size-11) !important;
}

.ps-12 {
    padding-inline-start: var(--size-12) !important;
}

.ps-13 {
    padding-inline-start: var(--size-13) !important;
}

.ps-14 {
    padding-inline-start: var(--size-14) !important;
}

.ps-16 {
    padding-inline-start: var(--size-16) !important;
}

.ps-18 {
    padding-inline-start: var(--size-18) !important;
}

.ps-20 {
    padding-inline-start: var(--size-20) !important;
}

.ps-22 {
    padding-inline-start: var(--size-22) !important;
}

.ps-24 {
    padding-inline-start: var(--size-24) !important;
}

.ps-26 {
    padding-inline-start: var(--size-26) !important;
}

.ps-28 {
    padding-inline-start: var(--size-28) !important;
}

.ps-30 {
    padding-inline-start: var(--size-30) !important;
}

.ps-32 {
    padding-inline-start: var(--size-32) !important;
}

.ps-36 {
    padding-inline-start: var(--size-36) !important;
}

.ps-40 {
    padding-inline-start: var(--size-40) !important;
}

.ps-44 {
    padding-inline-start: var(--size-44) !important;
}

.ps-48 {
    padding-inline-start: var(--size-48) !important;
}

.ps-50 {
    padding-inline-start: var(--size-50) !important;
}

.ps-56 {
    padding-inline-start: var(--size-56) !important;
}

.ps-64 {
    padding-inline-start: var(--size-64) !important;
}

.ps-68 {
    padding-inline-start: var(--size-68) !important;
}

.ps-72 {
    padding-inline-start: var(--size-72) !important;
}

.ps-76 {
    padding-inline-start: var(--size-76) !important;
}

.ps-80 {
    padding-inline-start: var(--size-80) !important;
}

.ps-90 {
    padding-inline-start: var(--size-90) !important;
}

.ps-110 {
    padding-inline-start: var(--size-110) !important;
}

.ps-120 {
    padding-inline-start: var(--size-120) !important;
}

.ps-144 {
    padding-inline-start: var(--size-144) !important;
}

.ps-160 {
    padding-inline-start: var(--size-160) !important;
}

.pe-2 {
    padding-inline-end: var(--size-2) !important;
}

.pe-3 {
    padding-inline-end: var(--size-3) !important;
}

.pe-4 {
    padding-inline-end: var(--size-4) !important;
}

.pe-5 {
    padding-inline-end: var(--size-5) !important;
}

.pe-6 {
    padding-inline-end: var(--size-6) !important;
}

.pe-7 {
    padding-inline-end: var(--size-7) !important;
}

.pe-8 {
    padding-inline-end: var(--size-8) !important;
}

.pe-9 {
    padding-inline-end: var(--size-9) !important;
}

.pe-10 {
    padding-inline-end: var(--size-10) !important;
}

.pe-11 {
    padding-inline-end: var(--size-11) !important;
}

.pe-12 {
    padding-inline-end: var(--size-12) !important;
}

.pe-13 {
    padding-inline-end: var(--size-13) !important;
}

.pe-14 {
    padding-inline-end: var(--size-14) !important;
}

.pe-16 {
    padding-inline-end: var(--size-16) !important;
}

.pe-18 {
    padding-inline-end: var(--size-18) !important;
}

.pe-20 {
    padding-inline-end: var(--size-20) !important;
}

.pe-22 {
    padding-inline-end: var(--size-22) !important;
}

.pe-24 {
    padding-inline-end: var(--size-24) !important;
}

.pe-26 {
    padding-inline-end: var(--size-26) !important;
}

.pe-28 {
    padding-inline-end: var(--size-28) !important;
}

.pe-30 {
    padding-inline-end: var(--size-30) !important;
}

.pe-32 {
    padding-inline-end: var(--size-32) !important;
}

.pe-36 {
    padding-inline-end: var(--size-36) !important;
}

.pe-40 {
    padding-inline-end: var(--size-40) !important;
}

.pe-44 {
    padding-inline-end: var(--size-44) !important;
}

.pe-48 {
    padding-inline-end: var(--size-48) !important;
}

.pe-50 {
    padding-inline-end: var(--size-50) !important;
}

.pe-56 {
    padding-inline-end: var(--size-56) !important;
}

.pe-64 {
    padding-inline-end: var(--size-64) !important;
}

.pe-68 {
    padding-inline-end: var(--size-68) !important;
}

.pe-72 {
    padding-inline-end: var(--size-72) !important;
}

.pe-76 {
    padding-inline-end: var(--size-76) !important;
}

.pe-80 {
    padding-inline-end: var(--size-80) !important;
}

.pe-90 {
    padding-inline-end: var(--size-90) !important;
}

.pe-110 {
    padding-inline-end: var(--size-110) !important;
}

.pe-120 {
    padding-inline-end: var(--size-120) !important;
}

.pe-144 {
    padding-inline-end: var(--size-144) !important;
}

.pe-160 {
    padding-inline-end: var(--size-160) !important;
}

.pt-2 {
    padding-block-start: var(--size-2) !important;
}

.pt-3 {
    padding-block-start: var(--size-3) !important;
}

.pt-4 {
    padding-block-start: var(--size-4) !important;
}

.pt-5 {
    padding-block-start: var(--size-5) !important;
}

.pt-6 {
    padding-block-start: var(--size-6) !important;
}

.pt-7 {
    padding-block-start: var(--size-7) !important;
}

.pt-8 {
    padding-block-start: var(--size-8) !important;
}

.pt-9 {
    padding-block-start: var(--size-9) !important;
}

.pt-10 {
    padding-block-start: var(--size-10) !important;
}

.pt-11 {
    padding-block-start: var(--size-11) !important;
}

.pt-12 {
    padding-block-start: var(--size-12) !important;
}

.pt-13 {
    padding-block-start: var(--size-13) !important;
}

.pt-14 {
    padding-block-start: var(--size-14) !important;
}

.pt-16 {
    padding-block-start: var(--size-16) !important;
}

.pt-18 {
    padding-block-start: var(--size-18) !important;
}

.pt-20 {
    padding-block-start: var(--size-20) !important;
}

.pt-22 {
    padding-block-start: var(--size-22) !important;
}

.pt-24 {
    padding-block-start: var(--size-24) !important;
}

.pt-26 {
    padding-block-start: var(--size-26) !important;
}

.pt-28 {
    padding-block-start: var(--size-28) !important;
}

.pt-30 {
    padding-block-start: var(--size-30) !important;
}

.pt-32 {
    padding-block-start: var(--size-32) !important;
}

.pt-36 {
    padding-block-start: var(--size-36) !important;
}

.pt-40 {
    padding-block-start: var(--size-40) !important;
}

.pt-44 {
    padding-block-start: var(--size-44) !important;
}

.pt-48 {
    padding-block-start: var(--size-48) !important;
}

.pt-50 {
    padding-block-start: var(--size-50) !important;
}

.pt-56 {
    padding-block-start: var(--size-56) !important;
}

.pt-64 {
    padding-block-start: var(--size-64) !important;
}

.pt-68 {
    padding-block-start: var(--size-68) !important;
}

.pt-72 {
    padding-block-start: var(--size-72) !important;
}

.pt-76 {
    padding-block-start: var(--size-76) !important;
}

.pt-80 {
    padding-block-start: var(--size-80) !important;
}

.pt-90 {
    padding-block-start: var(--size-90) !important;
}

.pt-110 {
    padding-block-start: var(--size-110) !important;
}

.pt-120 {
    padding-block-start: var(--size-120) !important;
}

.pt-144 {
    padding-block-start: var(--size-144) !important;
}

.pt-160 {
    padding-block-start: var(--size-160) !important;
}

.pb-2 {
    padding-block-end: var(--size-2) !important;
}

.pb-3 {
    padding-block-end: var(--size-3) !important;
}

.pb-4 {
    padding-block-end: var(--size-4) !important;
}

.pb-5 {
    padding-block-end: var(--size-5) !important;
}

.pb-6 {
    padding-block-end: var(--size-6) !important;
}

.pb-7 {
    padding-block-end: var(--size-7) !important;
}

.pb-8 {
    padding-block-end: var(--size-8) !important;
}

.pb-9 {
    padding-block-end: var(--size-9) !important;
}

.pb-10 {
    padding-block-end: var(--size-10) !important;
}

.pb-11 {
    padding-block-end: var(--size-11) !important;
}

.pb-12 {
    padding-block-end: var(--size-12) !important;
}

.pb-13 {
    padding-block-end: var(--size-13) !important;
}

.pb-14 {
    padding-block-end: var(--size-14) !important;
}

.pb-16 {
    padding-block-end: var(--size-16) !important;
}

.pb-18 {
    padding-block-end: var(--size-18) !important;
}

.pb-20 {
    padding-block-end: var(--size-20) !important;
}

.pb-22 {
    padding-block-end: var(--size-22) !important;
}

.pb-24 {
    padding-block-end: var(--size-24) !important;
}

.pb-26 {
    padding-block-end: var(--size-26) !important;
}

.pb-28 {
    padding-block-end: var(--size-28) !important;
}

.pb-30 {
    padding-block-end: var(--size-30) !important;
}

.pb-32 {
    padding-block-end: var(--size-32) !important;
}

.pb-36 {
    padding-block-end: var(--size-36) !important;
}

.pb-40 {
    padding-block-end: var(--size-40) !important;
}

.pb-44 {
    padding-block-end: var(--size-44) !important;
}

.pb-48 {
    padding-block-end: var(--size-48) !important;
}

.pb-50 {
    padding-block-end: var(--size-50) !important;
}

.pb-56 {
    padding-block-end: var(--size-56) !important;
}

.pb-64 {
    padding-block-end: var(--size-64) !important;
}

.pb-68 {
    padding-block-end: var(--size-68) !important;
}

.pb-72 {
    padding-block-end: var(--size-72) !important;
}

.pb-76 {
    padding-block-end: var(--size-76) !important;
}

.pb-80 {
    padding-block-end: var(--size-80) !important;
}

.pb-90 {
    padding-block-end: var(--size-90) !important;
}

.pb-110 {
    padding-block-end: var(--size-110) !important;
}

.pb-120 {
    padding-block-end: var(--size-120) !important;
}

.pb-144 {
    padding-block-end: var(--size-144) !important;
}

.pb-160 {
    padding-block-end: var(--size-160) !important;
}

.pt-0 {
    padding-block-start: 0 !important;
}

.pb-0 {
    padding-block-end: 0 !important;
}

.ps-0 {
    padding-inline-start: 0 !important;
}

.pe-0 {
    padding-inline-end: 0 !important;
}

.py-120 {
    padding-block-start: 60px !important;
    padding-block-end: 60px !important;
}

@media (min-width: 576px) {
    .py-120 {
        padding-block-start: 80px !important;
        padding-block-end: 80px !important;
    }
}

@media (min-width: 992px) {
    .py-120 {
        padding-block-start: 120px !important;
        padding-block-end: 120px !important;
    }
}

.pt-120 {
    padding-block-start: 60px !important;
}

@media (min-width: 576px) {
    .pt-120 {
        padding-block-start: 80px !important;
    }
}

@media (min-width: 992px) {
    .pt-120 {
        padding-block-start: 120px !important;
    }
}

.pb-120 {
    padding-block-end: 60px !important;
}

@media (min-width: 576px) {
    .pb-120 {
        padding-block-end: 80px !important;
    }
}

@media (min-width: 992px) {
    .pb-120 {
        padding-block-end: 120px !important;
    }
}

.py-60 {
    padding-block-start: 30px !important;
    padding-block-end: 30px !important;
}

@media (min-width: 576px) {
    .py-60 {
        padding-block-start: 40px !important;
        padding-block-end: 40px !important;
    }
}

@media (min-width: 992px) {
    .py-60 {
        padding-block-start: 60px !important;
        padding-block-end: 60px !important;
    }
}

.pt-60 {
    padding-block-start: 30px !important;
}

@media (min-width: 576px) {
    .pt-60 {
        padding-block-start: 40px !important;
    }
}

@media (min-width: 992px) {
    .pt-60 {
        padding-block-start: 60px !important;
    }
}

.pb-60 {
    padding-block-end: 30px !important;
}

@media (min-width: 576px) {
    .pb-60 {
        padding-block-end: 40px !important;
    }
}

@media (min-width: 992px) {
    .pb-60 {
        padding-block-end: 60px !important;
    }
}
/* ================================= Padding Css End =========================== */
/* ================================= Classes Css Start =========================== */
/* Section Background */
.section-bg {
    background-color: hsl(var(--section-bg)) !important;
}

.container {
    max-width: 1360px;
}

/* Column Extra Small Screen */
@media screen and (min-width: 425px) and (max-width: 575px) {
    .col-xs-6 {
        width: 50%;
    }
}

.transform-scale-1 {
    transform: scale(1) !important;
}

.line-height-0 {
    line-height: 0;
}

/* Transition */
.transition-1 {
    transition: 0.1s linear;
}

.transition-2 {
    transition: 0.2s linear;
}

.transition-3 {
    transition: 0.3s linear;
}

.min-width-max-content {
    min-width: max-content;
}

.inset-inline-start-0 {
    inset-inline-start: 0;
}

.inset-inline-end-0 {
    inset-inline-end: 0;
}

.inset-block-start-0 {
    inset-block-start: 0;
}

.inset-block-end-0 {
    inset-block-end: 0;
}

.start-auto {
    inset-inline-start: auto !important;
}

.end-auto {
    inset-inline-end: auto !important;
}

/* Text Color */
.hover-text-decoration-underline:hover {
    text-decoration: underline;
}

.hover-text-decoration-none:hover {
    text-decoration: none;
}

.font-heading {
    font-family: var(--heading-font);
}

.font-body {
    font-family: var(--body-font);
}

/* Bg Image Css */
.bg-img {
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    width: 100%;
    height: 100%;
}

/* ================================= Classes Css End =========================== */
/* ============================ Extend Css Start ======================== */
/* Cover image Css */
.cover-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Display Flex Css Start */
.flex-align {
    display: flex;
    align-items: center;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Display Flex Css End */
/* ============================ Extend Css End ======================== */
.w-2 {
    width: 0.125rem !important;
}

.w-3 {
    width: 0.1875rem !important;
}

.w-4 {
    width: 0.25rem !important;
}

.w-5 {
    width: 0.3125rem !important;
}

.w-6 {
    width: 0.375rem !important;
}

.w-7 {
    width: 0.4375rem !important;
}

.w-8 {
    width: 0.5rem !important;
}

.w-9 {
    width: 0.5625rem !important;
}

.w-10 {
    width: 0.625rem !important;
}

.w-11 {
    width: 0.6875rem !important;
}

.w-12 {
    width: 0.75rem !important;
}

.w-13 {
    width: 0.8125rem !important;
}

.w-14 {
    width: 0.875rem !important;
}

.w-16 {
    width: 1rem !important;
}

.w-18 {
    width: 1.125rem !important;
}

.w-20 {
    width: 1.25rem !important;
}

.w-22 {
    width: 1.375rem !important;
}

.w-24 {
    width: 1.5rem !important;
}

.w-26 {
    width: 1.625rem !important;
}

.w-28 {
    width: 1.75rem !important;
}

.w-30 {
    width: 1.875rem !important;
}

.w-32 {
    width: 2rem !important;
}

.w-36 {
    width: 2rem !important;
}

.w-40 {
    width: 2.5rem !important;
}

.w-44 {
    width: 2.75rem !important;
}

.w-48 {
    width: 3rem !important;
}

.w-50 {
    width: 3.125rem !important;
}

.w-56 {
    width: 3.5rem !important;
}

.w-64 {
    width: 4rem !important;
}

.w-68 {
    width: 4.25rem !important;
}

.w-72 {
    width: 4.5rem !important;
}

.w-76 {
    width: 4.75rem !important;
}

.w-80 {
    width: 5rem !important;
}

.w-90 {
    width: 5.625rem !important;
}

.w-110 {
    width: 6.875rem !important;
}

.w-120 {
    width: 7.5rem !important;
}

.w-144 {
    width: 9rem !important;
}

.w-160 {
    width: 10rem !important;
}

.h-2 {
    height: 0.125rem !important;
}

.h-3 {
    height: 0.1875rem !important;
}

.h-4 {
    height: 0.25rem !important;
}

.h-5 {
    height: 0.3125rem !important;
}

.h-6 {
    height: 0.375rem !important;
}

.h-7 {
    height: 0.4375rem !important;
}

.h-8 {
    height: 0.5rem !important;
}

.h-9 {
    height: 0.5625rem !important;
}

.h-10 {
    height: 0.625rem !important;
}

.h-11 {
    height: 0.6875rem !important;
}

.h-12 {
    height: 0.75rem !important;
}

.h-13 {
    height: 0.8125rem !important;
}

.h-14 {
    height: 0.875rem !important;
}

.h-16 {
    height: 1rem !important;
}

.h-18 {
    height: 1.125rem !important;
}

.h-20 {
    height: 1.25rem !important;
}

.h-22 {
    height: 1.375rem !important;
}

.h-24 {
    height: 1.5rem !important;
}

.h-26 {
    height: 1.625rem !important;
}

.h-28 {
    height: 1.75rem !important;
}

.h-30 {
    height: 1.875rem !important;
}

.h-32 {
    height: 2rem !important;
}

.h-36 {
    height: 2rem !important;
}

.h-40 {
    height: 2.5rem !important;
}

.h-44 {
    height: 2.75rem !important;
}

.h-48 {
    height: 3rem !important;
}

.h-50 {
    height: 3.125rem !important;
}

.h-56 {
    height: 3.5rem !important;
}

.h-64 {
    height: 4rem !important;
}

.h-68 {
    height: 4.25rem !important;
}

.h-72 {
    height: 4.5rem !important;
}

.h-76 {
    height: 4.75rem !important;
}

.h-80 {
    height: 5rem !important;
}

.h-90 {
    height: 5.625rem !important;
}

.h-110 {
    height: 6.875rem !important;
}

.h-120 {
    height: 7.5rem !important;
}

.h-144 {
    height: 9rem !important;
}

.h-160 {
    height: 10rem !important;
}

.max-h-unset {
    max-height: unset !important;
}

.max-w-unset {
    max-width: unset !important;
}

.max-w-772 {
    max-width: 772px;
}

.text-main-50 {
    color: var(--main-50) !important;
}

.text-main-100 {
    color: var(--main-100) !important;
}

.text-main-200 {
    color: var(--main-200) !important;
}

.text-main-300 {
    color: var(--main-300) !important;
}

.text-main-400 {
    color: var(--main-400) !important;
}

.text-main-500 {
    color: var(--main-500) !important;
}

.text-main-600 {
    color: var(--main-600) !important;
}

.text-main-700 {
    color: var(--main-700) !important;
}

.text-main-800 {
    color: var(--main-800) !important;
}

.text-main-900 {
    color: var(--main-900) !important;
}

.text-gray-50 {
    color: var(--gray-50) !important;
}

.text-gray-100 {
    color: var(--gray-100) !important;
}

.text-gray-200 {
    color: var(--gray-200) !important;
}

.text-gray-300 {
    color: var(--gray-300) !important;
}

.text-gray-400 {
    color: var(--gray-400) !important;
}

.text-gray-500 {
    color: var(--gray-500) !important;
}

.text-gray-600 {
    color: var(--gray-600) !important;
}

.text-gray-700 {
    color: var(--gray-700) !important;
}

.text-gray-800 {
    color: var(--gray-800) !important;
}

.text-gray-900 {
    color: var(--gray-900) !important;
}

.text-gray-950 {
    color: var(--gray-950) !important;
}

.text-light-50 {
    color: var(--light-50) !important;
}

.text-light-100 {
    color: var(--light-100) !important;
}

.text-light-600 {
    color: var(--light-600) !important;
}

.text-light-700 {
    color: var(--light-700) !important;
}

.text-light-800 {
    color: var(--light-800) !important;
}

.text-primary-50 {
    color: var(--primary-50) !important;
}

.text-primary-100 {
    color: var(--primary-100) !important;
}

.text-primary-200 {
    color: var(--primary-200) !important;
}

.text-primary-300 {
    color: var(--primary-300) !important;
}

.text-primary-400 {
    color: var(--primary-400) !important;
}

.text-primary-500 {
    color: var(--primary-500) !important;
}

.text-primary-600 {
    color: var(--primary-600) !important;
}

.text-primary-700 {
    color: var(--primary-700) !important;
}

.text-primary-800 {
    color: var(--primary-800) !important;
}

.text-primary-900 {
    color: var(--primary-900) !important;
}

.text-danger-50 {
    color: var(--danger-50) !important;
}

.text-danger-100 {
    color: var(--danger-100) !important;
}

.text-danger-200 {
    color: var(--danger-200) !important;
}

.text-danger-300 {
    color: var(--danger-300) !important;
}

.text-danger-400 {
    color: var(--danger-400) !important;
}

.text-danger-500 {
    color: var(--danger-500) !important;
}

.text-danger-600 {
    color: var(--danger-600) !important;
}

.text-danger-700 {
    color: var(--danger-700) !important;
}

.text-danger-800 {
    color: var(--danger-800) !important;
}

.text-danger-900 {
    color: var(--danger-900) !important;
}

.text-success-50 {
    color: var(--success-50) !important;
}

.text-success-100 {
    color: var(--success-100) !important;
}

.text-success-200 {
    color: var(--success-200) !important;
}

.text-success-300 {
    color: var(--success-300) !important;
}

.text-success-400 {
    color: var(--success-400) !important;
}

.text-success-500 {
    color: var(--success-500) !important;
}

.text-success-600 {
    color: var(--success-600) !important;
}

.text-success-700 {
    color: var(--success-700) !important;
}

.text-success-800 {
    color: var(--success-800) !important;
}

.text-success-900 {
    color: var(--success-900) !important;
}

.text-warning-50 {
    color: var(--warning-50) !important;
}

.text-warning-100 {
    color: var(--warning-100) !important;
}

.text-warning-200 {
    color: var(--warning-200) !important;
}

.text-warning-300 {
    color: var(--warning-300) !important;
}

.text-warning-400 {
    color: var(--warning-400) !important;
}

.text-warning-500 {
    color: var(--warning-500) !important;
}

.text-warning-600 {
    color: var(--warning-600) !important;
}

.text-warning-700 {
    color: var(--warning-700) !important;
}

.text-warning-800 {
    color: var(--warning-800) !important;
}

.text-warning-900 {
    color: var(--warning-900) !important;
}

.text-info-50 {
    color: var(--info-50) !important;
}

.text-info-100 {
    color: var(--info-100) !important;
}

.text-info-200 {
    color: var(--info-200) !important;
}

.text-info-300 {
    color: var(--info-300) !important;
}

.text-info-400 {
    color: var(--info-400) !important;
}

.text-info-500 {
    color: var(--info-500) !important;
}

.text-info-600 {
    color: var(--info-600) !important;
}

.text-info-700 {
    color: var(--info-700) !important;
}

.text-info-800 {
    color: var(--info-800) !important;
}

.text-info-900 {
    color: var(--info-900) !important;
}

.text-purple-50 {
    color: var(--purple-50) !important;
}

.text-purple-100 {
    color: var(--purple-100) !important;
}

.text-purple-600 {
    color: var(--purple-600) !important;
}

.text-heading {
    color: hsl(var(--heading-color)) !important;
}

.text-body {
    color: hsl(var(--body-color)) !important;
}

.text-main {
    color: hsl(var(--main)) !important;
}

.hover-text-main-50:hover {
    color: var(--main-50) !important;
}

.hover-text-main-100:hover {
    color: var(--main-100) !important;
}

.hover-text-main-200:hover {
    color: var(--main-200) !important;
}

.hover-text-main-300:hover {
    color: var(--main-300) !important;
}

.hover-text-main-400:hover {
    color: var(--main-400) !important;
}

.hover-text-main-500:hover {
    color: var(--main-500) !important;
}

.hover-text-main-600:hover {
    color: var(--main-600) !important;
}

.hover-text-main-700:hover {
    color: var(--main-700) !important;
}

.hover-text-main-800:hover {
    color: var(--main-800) !important;
}

.hover-text-main-900:hover {
    color: var(--main-900) !important;
}

.hover-text-gray-50:hover {
    color: var(--gray-50) !important;
}

.hover-text-gray-100:hover {
    color: var(--gray-100) !important;
}

.hover-text-gray-200:hover {
    color: var(--gray-200) !important;
}

.hover-text-gray-300:hover {
    color: var(--gray-300) !important;
}

.hover-text-gray-400:hover {
    color: var(--gray-400) !important;
}

.hover-text-gray-500:hover {
    color: var(--gray-500) !important;
}

.hover-text-gray-600:hover {
    color: var(--gray-600) !important;
}

.hover-text-gray-700:hover {
    color: var(--gray-700) !important;
}

.hover-text-gray-800:hover {
    color: var(--gray-800) !important;
}

.hover-text-gray-900:hover {
    color: var(--gray-900) !important;
}

.hover-text-gray-950:hover {
    color: var(--gray-950) !important;
}

.hover-text-light-50:hover {
    color: var(--light-50) !important;
}

.hover-text-light-100:hover {
    color: var(--light-100) !important;
}

.hover-text-light-600:hover {
    color: var(--light-600) !important;
}

.hover-text-light-700:hover {
    color: var(--light-700) !important;
}

.hover-text-light-800:hover {
    color: var(--light-800) !important;
}

.hover-text-primary-50:hover {
    color: var(--primary-50) !important;
}

.hover-text-primary-100:hover {
    color: var(--primary-100) !important;
}

.hover-text-primary-200:hover {
    color: var(--primary-200) !important;
}

.hover-text-primary-300:hover {
    color: var(--primary-300) !important;
}

.hover-text-primary-400:hover {
    color: var(--primary-400) !important;
}

.hover-text-primary-500:hover {
    color: var(--primary-500) !important;
}

.hover-text-primary-600:hover {
    color: var(--primary-600) !important;
}

.hover-text-primary-700:hover {
    color: var(--primary-700) !important;
}

.hover-text-primary-800:hover {
    color: var(--primary-800) !important;
}

.hover-text-primary-900:hover {
    color: var(--primary-900) !important;
}

.hover-text-danger-50:hover {
    color: var(--danger-50) !important;
}

.hover-text-danger-100:hover {
    color: var(--danger-100) !important;
}

.hover-text-danger-200:hover {
    color: var(--danger-200) !important;
}

.hover-text-danger-300:hover {
    color: var(--danger-300) !important;
}

.hover-text-danger-400:hover {
    color: var(--danger-400) !important;
}

.hover-text-danger-500:hover {
    color: var(--danger-500) !important;
}

.hover-text-danger-600:hover {
    color: var(--danger-600) !important;
}

.hover-text-danger-700:hover {
    color: var(--danger-700) !important;
}

.hover-text-danger-800:hover {
    color: var(--danger-800) !important;
}

.hover-text-danger-900:hover {
    color: var(--danger-900) !important;
}

.hover-text-success-50:hover {
    color: var(--success-50) !important;
}

.hover-text-success-100:hover {
    color: var(--success-100) !important;
}

.hover-text-success-200:hover {
    color: var(--success-200) !important;
}

.hover-text-success-300:hover {
    color: var(--success-300) !important;
}

.hover-text-success-400:hover {
    color: var(--success-400) !important;
}

.hover-text-success-500:hover {
    color: var(--success-500) !important;
}

.hover-text-success-600:hover {
    color: var(--success-600) !important;
}

.hover-text-success-700:hover {
    color: var(--success-700) !important;
}

.hover-text-success-800:hover {
    color: var(--success-800) !important;
}

.hover-text-success-900:hover {
    color: var(--success-900) !important;
}

.hover-text-warning-50:hover {
    color: var(--warning-50) !important;
}

.hover-text-warning-100:hover {
    color: var(--warning-100) !important;
}

.hover-text-warning-200:hover {
    color: var(--warning-200) !important;
}

.hover-text-warning-300:hover {
    color: var(--warning-300) !important;
}

.hover-text-warning-400:hover {
    color: var(--warning-400) !important;
}

.hover-text-warning-500:hover {
    color: var(--warning-500) !important;
}

.hover-text-warning-600:hover {
    color: var(--warning-600) !important;
}

.hover-text-warning-700:hover {
    color: var(--warning-700) !important;
}

.hover-text-warning-800:hover {
    color: var(--warning-800) !important;
}

.hover-text-warning-900:hover {
    color: var(--warning-900) !important;
}

.hover-text-info-50:hover {
    color: var(--info-50) !important;
}

.hover-text-info-100:hover {
    color: var(--info-100) !important;
}

.hover-text-info-200:hover {
    color: var(--info-200) !important;
}

.hover-text-info-300:hover {
    color: var(--info-300) !important;
}

.hover-text-info-400:hover {
    color: var(--info-400) !important;
}

.hover-text-info-500:hover {
    color: var(--info-500) !important;
}

.hover-text-info-600:hover {
    color: var(--info-600) !important;
}

.hover-text-info-700:hover {
    color: var(--info-700) !important;
}

.hover-text-info-800:hover {
    color: var(--info-800) !important;
}

.hover-text-info-900:hover {
    color: var(--info-900) !important;
}

.hover-text-purple-50:hover {
    color: var(--purple-50) !important;
}

.hover-text-purple-100:hover {
    color: var(--purple-100) !important;
}

.hover-text-purple-600:hover {
    color: var(--purple-600) !important;
}

/* Text Color */
.hover-text-white:hover {
    color: #fff !important;
}

.hover-text-heading:hover {
    color: hsl(var(--heading-color)) !important;
}

.hover-text-body:hover {
    color: hsl(var(--body-color)) !important;
}

.hover-text-main:hover {
    color: hsl(var(--main)) !important;
}

.border-main-50 {
    border-color: var(--main-50) !important;
}

.border-main-100 {
    border-color: var(--main-100) !important;
}

.border-main-200 {
    border-color: var(--main-200) !important;
}

.border-main-300 {
    border-color: var(--main-300) !important;
}

.border-main-400 {
    border-color: var(--main-400) !important;
}

.border-main-500 {
    border-color: var(--main-500) !important;
}

.border-main-600 {
    border-color: var(--main-600) !important;
}

.border-main-700 {
    border-color: var(--main-700) !important;
}

.border-main-800 {
    border-color: var(--main-800) !important;
}

.border-main-900 {
    border-color: var(--main-900) !important;
}

.border-gray-50 {
    border-color: var(--gray-50) !important;
}

.border-gray-100 {
    border-color: var(--gray-100) !important;
}

.border-gray-200 {
    border-color: var(--gray-200) !important;
}

.border-gray-300 {
    border-color: var(--gray-300) !important;
}

.border-gray-400 {
    border-color: var(--gray-400) !important;
}

.border-gray-500 {
    border-color: var(--gray-500) !important;
}

.border-gray-600 {
    border-color: var(--gray-600) !important;
}

.border-gray-700 {
    border-color: var(--gray-700) !important;
}

.border-gray-800 {
    border-color: var(--gray-800) !important;
}

.border-gray-900 {
    border-color: var(--gray-900) !important;
}

.border-gray-950 {
    border-color: var(--gray-950) !important;
}

.border-light-50 {
    border-color: var(--light-50) !important;
}

.border-light-100 {
    border-color: var(--light-100) !important;
}

.border-light-600 {
    border-color: var(--light-600) !important;
}

.border-light-700 {
    border-color: var(--light-700) !important;
}

.border-light-800 {
    border-color: var(--light-800) !important;
}

.border-primary-50 {
    border-color: var(--primary-50) !important;
}

.border-primary-100 {
    border-color: var(--primary-100) !important;
}

.border-primary-200 {
    border-color: var(--primary-200) !important;
}

.border-primary-300 {
    border-color: var(--primary-300) !important;
}

.border-primary-400 {
    border-color: var(--primary-400) !important;
}

.border-primary-500 {
    border-color: var(--primary-500) !important;
}

.border-primary-600 {
    border-color: var(--primary-600) !important;
}

.border-primary-700 {
    border-color: var(--primary-700) !important;
}

.border-primary-800 {
    border-color: var(--primary-800) !important;
}

.border-primary-900 {
    border-color: var(--primary-900) !important;
}

.border-danger-50 {
    border-color: var(--danger-50) !important;
}

.border-danger-100 {
    border-color: var(--danger-100) !important;
}

.border-danger-200 {
    border-color: var(--danger-200) !important;
}

.border-danger-300 {
    border-color: var(--danger-300) !important;
}

.border-danger-400 {
    border-color: var(--danger-400) !important;
}

.border-danger-500 {
    border-color: var(--danger-500) !important;
}

.border-danger-600 {
    border-color: var(--danger-600) !important;
}

.border-danger-700 {
    border-color: var(--danger-700) !important;
}

.border-danger-800 {
    border-color: var(--danger-800) !important;
}

.border-danger-900 {
    border-color: var(--danger-900) !important;
}

.border-success-50 {
    border-color: var(--success-50) !important;
}

.border-success-100 {
    border-color: var(--success-100) !important;
}

.border-success-200 {
    border-color: var(--success-200) !important;
}

.border-success-300 {
    border-color: var(--success-300) !important;
}

.border-success-400 {
    border-color: var(--success-400) !important;
}

.border-success-500 {
    border-color: var(--success-500) !important;
}

.border-success-600 {
    border-color: var(--success-600) !important;
}

.border-success-700 {
    border-color: var(--success-700) !important;
}

.border-success-800 {
    border-color: var(--success-800) !important;
}

.border-success-900 {
    border-color: var(--success-900) !important;
}

.border-warning-50 {
    border-color: var(--warning-50) !important;
}

.border-warning-100 {
    border-color: var(--warning-100) !important;
}

.border-warning-200 {
    border-color: var(--warning-200) !important;
}

.border-warning-300 {
    border-color: var(--warning-300) !important;
}

.border-warning-400 {
    border-color: var(--warning-400) !important;
}

.border-warning-500 {
    border-color: var(--warning-500) !important;
}

.border-warning-600 {
    border-color: var(--warning-600) !important;
}

.border-warning-700 {
    border-color: var(--warning-700) !important;
}

.border-warning-800 {
    border-color: var(--warning-800) !important;
}

.border-warning-900 {
    border-color: var(--warning-900) !important;
}

.border-info-50 {
    border-color: var(--info-50) !important;
}

.border-info-100 {
    border-color: var(--info-100) !important;
}

.border-info-200 {
    border-color: var(--info-200) !important;
}

.border-info-300 {
    border-color: var(--info-300) !important;
}

.border-info-400 {
    border-color: var(--info-400) !important;
}

.border-info-500 {
    border-color: var(--info-500) !important;
}

.border-info-600 {
    border-color: var(--info-600) !important;
}

.border-info-700 {
    border-color: var(--info-700) !important;
}

.border-info-800 {
    border-color: var(--info-800) !important;
}

.border-info-900 {
    border-color: var(--info-900) !important;
}

.border-purple-50 {
    border-color: var(--purple-50) !important;
}

.border-purple-100 {
    border-color: var(--purple-100) !important;
}

.border-purple-600 {
    border-color: var(--purple-600) !important;
}

.hover-border-main-50:hover {
    border-color: var(--main-50) !important;
}

.hover-border-main-100:hover {
    border-color: var(--main-100) !important;
}

.hover-border-main-200:hover {
    border-color: var(--main-200) !important;
}

.hover-border-main-300:hover {
    border-color: var(--main-300) !important;
}

.hover-border-main-400:hover {
    border-color: var(--main-400) !important;
}

.hover-border-main-500:hover {
    border-color: var(--main-500) !important;
}

.hover-border-main-600:hover {
    border-color: var(--main-600) !important;
}

.hover-border-main-700:hover {
    border-color: var(--main-700) !important;
}

.hover-border-main-800:hover {
    border-color: var(--main-800) !important;
}

.hover-border-main-900:hover {
    border-color: var(--main-900) !important;
}

.hover-border-gray-50:hover {
    border-color: var(--gray-50) !important;
}

.hover-border-gray-100:hover {
    border-color: var(--gray-100) !important;
}

.hover-border-gray-200:hover {
    border-color: var(--gray-200) !important;
}

.hover-border-gray-300:hover {
    border-color: var(--gray-300) !important;
}

.hover-border-gray-400:hover {
    border-color: var(--gray-400) !important;
}

.hover-border-gray-500:hover {
    border-color: var(--gray-500) !important;
}

.hover-border-gray-600:hover {
    border-color: var(--gray-600) !important;
}

.hover-border-gray-700:hover {
    border-color: var(--gray-700) !important;
}

.hover-border-gray-800:hover {
    border-color: var(--gray-800) !important;
}

.hover-border-gray-900:hover {
    border-color: var(--gray-900) !important;
}

.hover-border-gray-950:hover {
    border-color: var(--gray-950) !important;
}

.hover-border-light-50:hover {
    border-color: var(--light-50) !important;
}

.hover-border-light-100:hover {
    border-color: var(--light-100) !important;
}

.hover-border-light-600:hover {
    border-color: var(--light-600) !important;
}

.hover-border-light-700:hover {
    border-color: var(--light-700) !important;
}

.hover-border-light-800:hover {
    border-color: var(--light-800) !important;
}

.hover-border-primary-50:hover {
    border-color: var(--primary-50) !important;
}

.hover-border-primary-100:hover {
    border-color: var(--primary-100) !important;
}

.hover-border-primary-200:hover {
    border-color: var(--primary-200) !important;
}

.hover-border-primary-300:hover {
    border-color: var(--primary-300) !important;
}

.hover-border-primary-400:hover {
    border-color: var(--primary-400) !important;
}

.hover-border-primary-500:hover {
    border-color: var(--primary-500) !important;
}

.hover-border-primary-600:hover {
    border-color: var(--primary-600) !important;
}

.hover-border-primary-700:hover {
    border-color: var(--primary-700) !important;
}

.hover-border-primary-800:hover {
    border-color: var(--primary-800) !important;
}

.hover-border-primary-900:hover {
    border-color: var(--primary-900) !important;
}

.hover-border-danger-50:hover {
    border-color: var(--danger-50) !important;
}

.hover-border-danger-100:hover {
    border-color: var(--danger-100) !important;
}

.hover-border-danger-200:hover {
    border-color: var(--danger-200) !important;
}

.hover-border-danger-300:hover {
    border-color: var(--danger-300) !important;
}

.hover-border-danger-400:hover {
    border-color: var(--danger-400) !important;
}

.hover-border-danger-500:hover {
    border-color: var(--danger-500) !important;
}

.hover-border-danger-600:hover {
    border-color: var(--danger-600) !important;
}

.hover-border-danger-700:hover {
    border-color: var(--danger-700) !important;
}

.hover-border-danger-800:hover {
    border-color: var(--danger-800) !important;
}

.hover-border-danger-900:hover {
    border-color: var(--danger-900) !important;
}

.hover-border-success-50:hover {
    border-color: var(--success-50) !important;
}

.hover-border-success-100:hover {
    border-color: var(--success-100) !important;
}

.hover-border-success-200:hover {
    border-color: var(--success-200) !important;
}

.hover-border-success-300:hover {
    border-color: var(--success-300) !important;
}

.hover-border-success-400:hover {
    border-color: var(--success-400) !important;
}

.hover-border-success-500:hover {
    border-color: var(--success-500) !important;
}

.hover-border-success-600:hover {
    border-color: var(--success-600) !important;
}

.hover-border-success-700:hover {
    border-color: var(--success-700) !important;
}

.hover-border-success-800:hover {
    border-color: var(--success-800) !important;
}

.hover-border-success-900:hover {
    border-color: var(--success-900) !important;
}

.hover-border-warning-50:hover {
    border-color: var(--warning-50) !important;
}

.hover-border-warning-100:hover {
    border-color: var(--warning-100) !important;
}

.hover-border-warning-200:hover {
    border-color: var(--warning-200) !important;
}

.hover-border-warning-300:hover {
    border-color: var(--warning-300) !important;
}

.hover-border-warning-400:hover {
    border-color: var(--warning-400) !important;
}

.hover-border-warning-500:hover {
    border-color: var(--warning-500) !important;
}

.hover-border-warning-600:hover {
    border-color: var(--warning-600) !important;
}

.hover-border-warning-700:hover {
    border-color: var(--warning-700) !important;
}

.hover-border-warning-800:hover {
    border-color: var(--warning-800) !important;
}

.hover-border-warning-900:hover {
    border-color: var(--warning-900) !important;
}

.hover-border-info-50:hover {
    border-color: var(--info-50) !important;
}

.hover-border-info-100:hover {
    border-color: var(--info-100) !important;
}

.hover-border-info-200:hover {
    border-color: var(--info-200) !important;
}

.hover-border-info-300:hover {
    border-color: var(--info-300) !important;
}

.hover-border-info-400:hover {
    border-color: var(--info-400) !important;
}

.hover-border-info-500:hover {
    border-color: var(--info-500) !important;
}

.hover-border-info-600:hover {
    border-color: var(--info-600) !important;
}

.hover-border-info-700:hover {
    border-color: var(--info-700) !important;
}

.hover-border-info-800:hover {
    border-color: var(--info-800) !important;
}

.hover-border-info-900:hover {
    border-color: var(--info-900) !important;
}

.hover-border-purple-50:hover {
    border-color: var(--purple-50) !important;
}

.hover-border-purple-100:hover {
    border-color: var(--purple-100) !important;
}

.hover-border-purple-600:hover {
    border-color: var(--purple-600) !important;
}

.bg-main-50 {
    background-color: var(--main-50) !important;
}

.bg-main-100 {
    background-color: var(--main-100) !important;
}

.bg-main-200 {
    background-color: var(--main-200) !important;
}

.bg-main-300 {
    background-color: var(--main-300) !important;
}

.bg-main-400 {
    background-color: var(--main-400) !important;
}

.bg-main-500 {
    background-color: var(--main-500) !important;
}

.bg-main-600 {
    background-color: var(--main-600) !important;
}

.bg-main-700 {
    background-color: var(--main-700) !important;
}

.bg-main-800 {
    background-color: var(--main-800) !important;
}

.bg-main-900 {
    background-color: var(--main-900) !important;
}

.bg-gray-50 {
    background-color: var(--gray-50) !important;
}

.bg-gray-100 {
    background-color: var(--gray-100) !important;
}

.bg-gray-200 {
    background-color: var(--gray-200) !important;
}

.bg-gray-300 {
    background-color: var(--gray-300) !important;
}

.bg-gray-400 {
    background-color: var(--gray-400) !important;
}

.bg-gray-500 {
    background-color: var(--gray-500) !important;
}

.bg-gray-600 {
    background-color: var(--gray-600) !important;
}

.bg-gray-700 {
    background-color: var(--gray-700) !important;
}

.bg-gray-800 {
    background-color: var(--gray-800) !important;
}

.bg-gray-900 {
    background-color: var(--gray-900) !important;
}

.bg-gray-950 {
    background-color: var(--gray-950) !important;
}

.bg-light-50 {
    background-color: var(--light-50) !important;
}

.bg-light-100 {
    background-color: var(--light-100) !important;
}

.bg-light-600 {
    background-color: var(--light-600) !important;
}

.bg-light-700 {
    background-color: var(--light-700) !important;
}

.bg-light-800 {
    background-color: var(--light-800) !important;
}

.bg-primary-50 {
    background-color: var(--primary-50) !important;
}

.bg-primary-100 {
    background-color: var(--primary-100) !important;
}

.bg-primary-200 {
    background-color: var(--primary-200) !important;
}

.bg-primary-300 {
    background-color: var(--primary-300) !important;
}

.bg-primary-400 {
    background-color: var(--primary-400) !important;
}

.bg-primary-500 {
    background-color: var(--primary-500) !important;
}

.bg-primary-600 {
    background-color: var(--primary-600) !important;
}

.bg-primary-700 {
    background-color: var(--primary-700) !important;
}

.bg-primary-800 {
    background-color: var(--primary-800) !important;
}

.bg-primary-900 {
    background-color: var(--primary-900) !important;
}

.bg-danger-50 {
    background-color: var(--danger-50) !important;
}

.bg-danger-100 {
    background-color: var(--danger-100) !important;
}

.bg-danger-200 {
    background-color: var(--danger-200) !important;
}

.bg-danger-300 {
    background-color: var(--danger-300) !important;
}

.bg-danger-400 {
    background-color: var(--danger-400) !important;
}

.bg-danger-500 {
    background-color: var(--danger-500) !important;
}

.bg-danger-600 {
    background-color: var(--danger-600) !important;
}

.bg-danger-700 {
    background-color: var(--danger-700) !important;
}

.bg-danger-800 {
    background-color: var(--danger-800) !important;
}

.bg-danger-900 {
    background-color: var(--danger-900) !important;
}

.bg-success-50 {
    background-color: var(--success-50) !important;
}

.bg-success-100 {
    background-color: var(--success-100) !important;
}

.bg-success-200 {
    background-color: var(--success-200) !important;
}

.bg-success-300 {
    background-color: var(--success-300) !important;
}

.bg-success-400 {
    background-color: var(--success-400) !important;
}

.bg-success-500 {
    background-color: var(--success-500) !important;
}

.bg-success-600 {
    background-color: var(--success-600) !important;
}

.bg-success-700 {
    background-color: var(--success-700) !important;
}

.bg-success-800 {
    background-color: var(--success-800) !important;
}

.bg-success-900 {
    background-color: var(--success-900) !important;
}

.bg-warning-50 {
    background-color: var(--warning-50) !important;
}

.bg-warning-100 {
    background-color: var(--warning-100) !important;
}

.bg-warning-200 {
    background-color: var(--warning-200) !important;
}

.bg-warning-300 {
    background-color: var(--warning-300) !important;
}

.bg-warning-400 {
    background-color: var(--warning-400) !important;
}

.bg-warning-500 {
    background-color: var(--warning-500) !important;
}

.bg-warning-600 {
    background-color: var(--warning-600) !important;
}

.bg-warning-700 {
    background-color: var(--warning-700) !important;
}

.bg-warning-800 {
    background-color: var(--warning-800) !important;
}

.bg-warning-900 {
    background-color: var(--warning-900) !important;
}

.bg-info-50 {
    background-color: var(--info-50) !important;
}

.bg-info-100 {
    background-color: var(--info-100) !important;
}

.bg-info-200 {
    background-color: var(--info-200) !important;
}

.bg-info-300 {
    background-color: var(--info-300) !important;
}

.bg-info-400 {
    background-color: var(--info-400) !important;
}

.bg-info-500 {
    background-color: var(--info-500) !important;
}

.bg-info-600 {
    background-color: var(--info-600) !important;
}

.bg-info-700 {
    background-color: var(--info-700) !important;
}

.bg-info-800 {
    background-color: var(--info-800) !important;
}

.bg-info-900 {
    background-color: var(--info-900) !important;
}

.bg-purple-50 {
    background-color: var(--purple-50) !important;
}

.bg-purple-100 {
    background-color: var(--purple-100) !important;
}

.bg-purple-600 {
    background-color: var(--purple-600) !important;
}

.hover-bg-main-50:hover {
    background-color: var(--main-50) !important;
}

.hover-bg-main-100:hover {
    background-color: var(--main-100) !important;
}

.hover-bg-main-200:hover {
    background-color: var(--main-200) !important;
}

.hover-bg-main-300:hover {
    background-color: var(--main-300) !important;
}

.hover-bg-main-400:hover {
    background-color: var(--main-400) !important;
}

.hover-bg-main-500:hover {
    background-color: var(--main-500) !important;
}

.hover-bg-main-600:hover {
    background-color: var(--main-600) !important;
}

.hover-bg-main-700:hover {
    background-color: var(--main-700) !important;
}

.hover-bg-main-800:hover {
    background-color: var(--main-800) !important;
}

.hover-bg-main-900:hover {
    background-color: var(--main-900) !important;
}

.hover-bg-gray-50:hover {
    background-color: var(--gray-50) !important;
}

.hover-bg-gray-100:hover {
    background-color: var(--gray-100) !important;
}

.hover-bg-gray-200:hover {
    background-color: var(--gray-200) !important;
}

.hover-bg-gray-300:hover {
    background-color: var(--gray-300) !important;
}

.hover-bg-gray-400:hover {
    background-color: var(--gray-400) !important;
}

.hover-bg-gray-500:hover {
    background-color: var(--gray-500) !important;
}

.hover-bg-gray-600:hover {
    background-color: var(--gray-600) !important;
}

.hover-bg-gray-700:hover {
    background-color: var(--gray-700) !important;
}

.hover-bg-gray-800:hover {
    background-color: var(--gray-800) !important;
}

.hover-bg-gray-900:hover {
    background-color: var(--gray-900) !important;
}

.hover-bg-gray-950:hover {
    background-color: var(--gray-950) !important;
}

.hover-bg-light-50:hover {
    background-color: var(--light-50) !important;
}

.hover-bg-light-100:hover {
    background-color: var(--light-100) !important;
}

.hover-bg-light-600:hover {
    background-color: var(--light-600) !important;
}

.hover-bg-light-700:hover {
    background-color: var(--light-700) !important;
}

.hover-bg-light-800:hover {
    background-color: var(--light-800) !important;
}

.hover-bg-primary-50:hover {
    background-color: var(--primary-50) !important;
}

.hover-bg-primary-100:hover {
    background-color: var(--primary-100) !important;
}

.hover-bg-primary-200:hover {
    background-color: var(--primary-200) !important;
}

.hover-bg-primary-300:hover {
    background-color: var(--primary-300) !important;
}

.hover-bg-primary-400:hover {
    background-color: var(--primary-400) !important;
}

.hover-bg-primary-500:hover {
    background-color: var(--primary-500) !important;
}

.hover-bg-primary-600:hover {
    background-color: var(--primary-600) !important;
}

.hover-bg-primary-700:hover {
    background-color: var(--primary-700) !important;
}

.hover-bg-primary-800:hover {
    background-color: var(--primary-800) !important;
}

.hover-bg-primary-900:hover {
    background-color: var(--primary-900) !important;
}

.hover-bg-danger-50:hover {
    background-color: var(--danger-50) !important;
}

.hover-bg-danger-100:hover {
    background-color: var(--danger-100) !important;
}

.hover-bg-danger-200:hover {
    background-color: var(--danger-200) !important;
}

.hover-bg-danger-300:hover {
    background-color: var(--danger-300) !important;
}

.hover-bg-danger-400:hover {
    background-color: var(--danger-400) !important;
}

.hover-bg-danger-500:hover {
    background-color: var(--danger-500) !important;
}

.hover-bg-danger-600:hover {
    background-color: var(--danger-600) !important;
}

.hover-bg-danger-700:hover {
    background-color: var(--danger-700) !important;
}

.hover-bg-danger-800:hover {
    background-color: var(--danger-800) !important;
}

.hover-bg-danger-900:hover {
    background-color: var(--danger-900) !important;
}

.hover-bg-success-50:hover {
    background-color: var(--success-50) !important;
}

.hover-bg-success-100:hover {
    background-color: var(--success-100) !important;
}

.hover-bg-success-200:hover {
    background-color: var(--success-200) !important;
}

.hover-bg-success-300:hover {
    background-color: var(--success-300) !important;
}

.hover-bg-success-400:hover {
    background-color: var(--success-400) !important;
}

.hover-bg-success-500:hover {
    background-color: var(--success-500) !important;
}

.hover-bg-success-600:hover {
    background-color: var(--success-600) !important;
}

.hover-bg-success-700:hover {
    background-color: var(--success-700) !important;
}

.hover-bg-success-800:hover {
    background-color: var(--success-800) !important;
}

.hover-bg-success-900:hover {
    background-color: var(--success-900) !important;
}

.hover-bg-warning-50:hover {
    background-color: var(--warning-50) !important;
}

.hover-bg-warning-100:hover {
    background-color: var(--warning-100) !important;
}

.hover-bg-warning-200:hover {
    background-color: var(--warning-200) !important;
}

.hover-bg-warning-300:hover {
    background-color: var(--warning-300) !important;
}

.hover-bg-warning-400:hover {
    background-color: var(--warning-400) !important;
}

.hover-bg-warning-500:hover {
    background-color: var(--warning-500) !important;
}

.hover-bg-warning-600:hover {
    background-color: var(--warning-600) !important;
}

.hover-bg-warning-700:hover {
    background-color: var(--warning-700) !important;
}

.hover-bg-warning-800:hover {
    background-color: var(--warning-800) !important;
}

.hover-bg-warning-900:hover {
    background-color: var(--warning-900) !important;
}

.hover-bg-info-50:hover {
    background-color: var(--info-50) !important;
}

.hover-bg-info-100:hover {
    background-color: var(--info-100) !important;
}

.hover-bg-info-200:hover {
    background-color: var(--info-200) !important;
}

.hover-bg-info-300:hover {
    background-color: var(--info-300) !important;
}

.hover-bg-info-400:hover {
    background-color: var(--info-400) !important;
}

.hover-bg-info-500:hover {
    background-color: var(--info-500) !important;
}

.hover-bg-info-600:hover {
    background-color: var(--info-600) !important;
}

.hover-bg-info-700:hover {
    background-color: var(--info-700) !important;
}

.hover-bg-info-800:hover {
    background-color: var(--info-800) !important;
}

.hover-bg-info-900:hover {
    background-color: var(--info-900) !important;
}

.hover-bg-purple-50:hover {
    background-color: var(--purple-50) !important;
}

.hover-bg-purple-100:hover {
    background-color: var(--purple-100) !important;
}

.hover-bg-purple-600:hover {
    background-color: var(--purple-600) !important;
}

.gradient-1 {
    background: linear-gradient(52deg, #544BFF 14.87%, #E44EFF 86.11%);
}

.gradient-2 {
    background: linear-gradient(60deg, #2163FE 14.24%, #5AE1FF 86.64%);
}

.gradient-3 {
    background: linear-gradient(60deg, #FF460C 14.24%, #FDAC0E 86.64%);
}

.gradient-4 {
    background: linear-gradient(51deg, #24CF75 15.86%, #B8DB1D 84.49%);
}

.gradient-5 {
    background: linear-gradient(60deg, #D328A8 14.24%, #FF8FFF 86.64%);
}

.bg-gradient-1 {
    background: linear-gradient(96deg, #F2F1FF 5.02%, #FDF1FF 95.41%);
}

.bg-gradient-2 {
    background: linear-gradient(247deg, rgba(87, 218, 255, 0.1) 0.99%, rgba(0, 80, 255, 0.1) 97.77%);
}

.bg-gradient-3 {
    background: linear-gradient(247deg, rgba(255, 197, 69, 0.1) 0.99%, rgba(255, 74, 13, 0.1) 97.77%);
}

.bg-gradient-4 {
    background: linear-gradient(270deg, rgba(184, 219, 29, 0.12) 0%, rgba(38, 207, 116, 0.12) 100%);
}

.bg-gradient-5 {
    background: linear-gradient(270deg, rgba(253, 190, 251, 0.1) 0%, rgba(214, 51, 174, 0.1) 100%);
}

.bg-blue-color {
    background-color: #090346 !important;
}

.bg-white-color {
    background-color: #fff !important;
}

/* Font Size Class Start */
.text-inherit {
    font-size: inherit;
}

.text-xs {
    font-size: 0.75rem !important;
}

.text-sm {
    font-size: 0.875rem !important;
}

.text-md {
    font-size: 1rem !important;
}

.text-lg {
    font-size: 1.125rem !important;
}

.text-xl {
    font-size: 1.25rem !important;
}

.text-2xl {
    font-size: 1.5rem !important;
}

.text-3xl {
    font-size: 1.875rem !important;
}

.text-4xl {
    font-size: 2.25rem !important;
}

.text-5xl {
    font-size: 3rem !important;
}

.text-6xl {
    font-size: 3.75rem !important;
}

.text-2 {
    font-size: 0.125rem !important;
}

.text-3 {
    font-size: 0.1875rem !important;
}

.text-4 {
    font-size: 0.25rem !important;
}

.text-5 {
    font-size: 0.3125rem !important;
}

.text-6 {
    font-size: 0.375rem !important;
}

.text-7 {
    font-size: 0.4375rem !important;
}

.text-8 {
    font-size: 0.5rem !important;
}

.text-9 {
    font-size: 0.5625rem !important;
}

.text-10 {
    font-size: 0.625rem !important;
}

.text-11 {
    font-size: 0.6875rem !important;
}

.text-12 {
    font-size: 0.75rem !important;
}

.text-13 {
    font-size: 0.8125rem !important;
}

.text-14 {
    font-size: 0.875rem !important;
}

.text-16 {
    font-size: 1rem !important;
}

.text-18 {
    font-size: 1.125rem !important;
}

.text-20 {
    font-size: 1.25rem !important;
}

.text-22 {
    font-size: 1.375rem !important;
}

.text-24 {
    font-size: 1.5rem !important;
}

.text-26 {
    font-size: 1.625rem !important;
}

.text-28 {
    font-size: 1.75rem !important;
}

.text-30 {
    font-size: 1.875rem !important;
}

.text-32 {
    font-size: 2rem !important;
}

.text-36 {
    font-size: 2rem !important;
}

.text-40 {
    font-size: 2.5rem !important;
}

.text-44 {
    font-size: 2.75rem !important;
}

.text-48 {
    font-size: 3rem !important;
}

.text-50 {
    font-size: 3.125rem !important;
}

.text-56 {
    font-size: 3.5rem !important;
}

.text-64 {
    font-size: 4rem !important;
}

.text-68 {
    font-size: 4.25rem !important;
}

.text-72 {
    font-size: 4.5rem !important;
}

.text-76 {
    font-size: 4.75rem !important;
}

.text-80 {
    font-size: 5rem !important;
}

.text-90 {
    font-size: 5.625rem !important;
}

.text-110 {
    font-size: 6.875rem !important;
}

.text-120 {
    font-size: 7.5rem !important;
}

.text-144 {
    font-size: 9rem !important;
}

.text-160 {
    font-size: 10rem !important;
}

/* Font Size Class End */
/* Box shadow start */
.box-shadow-sm {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.box-shadow-md {
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
}

.box-shadow-lg {
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.06);
}

.box-shadow-xl {
    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.08);
}

.box-shadow-2xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.box-shadow-3xl {
    box-shadow: 0px 20px 80px 0px rgba(81, 59, 99, 0.24);
}

.box-shadow-inner {
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

.custom-shadow {
    box-shadow: 0 24px 24px 0 rgba(0, 0, 0, 0.1);
}

/* Box shadow End */
/* Border Radius */
.rounded-2 {
    border-radius: 0.125rem !important;
}

.rounded-3 {
    border-radius: 0.1875rem !important;
}

.rounded-4 {
    border-radius: 0.25rem !important;
}

.rounded-5 {
    border-radius: 0.3125rem !important;
}

.rounded-6 {
    border-radius: 0.375rem !important;
}

.rounded-7 {
    border-radius: 0.4375rem !important;
}

.rounded-8 {
    border-radius: 0.5rem !important;
}

.rounded-9 {
    border-radius: 0.5625rem !important;
}

.rounded-10 {
    border-radius: 0.625rem !important;
}

.rounded-11 {
    border-radius: 0.6875rem !important;
}

.rounded-12 {
    border-radius: 0.75rem !important;
}

.rounded-13 {
    border-radius: 0.8125rem !important;
}

.rounded-14 {
    border-radius: 0.875rem !important;
}

.rounded-16 {
    border-radius: 1rem !important;
}

.rounded-18 {
    border-radius: 1.125rem !important;
}

.rounded-20 {
    border-radius: 1.25rem !important;
}

.rounded-22 {
    border-radius: 1.375rem !important;
}

.rounded-24 {
    border-radius: 1.5rem !important;
}

.rounded-26 {
    border-radius: 1.625rem !important;
}

.rounded-28 {
    border-radius: 1.75rem !important;
}

.rounded-30 {
    border-radius: 1.875rem !important;
}

.rounded-32 {
    border-radius: 2rem !important;
}

.rounded-36 {
    border-radius: 2rem !important;
}

.rounded-40 {
    border-radius: 2.5rem !important;
}

.rounded-44 {
    border-radius: 2.75rem !important;
}

.rounded-48 {
    border-radius: 3rem !important;
}

.rounded-50 {
    border-radius: 3.125rem !important;
}

.rounded-56 {
    border-radius: 3.5rem !important;
}

.rounded-64 {
    border-radius: 4rem !important;
}

.rounded-68 {
    border-radius: 4.25rem !important;
}

.rounded-72 {
    border-radius: 4.5rem !important;
}

.rounded-76 {
    border-radius: 4.75rem !important;
}

.rounded-80 {
    border-radius: 5rem !important;
}

.rounded-90 {
    border-radius: 5.625rem !important;
}

.rounded-110 {
    border-radius: 6.875rem !important;
}

.rounded-120 {
    border-radius: 7.5rem !important;
}

.rounded-144 {
    border-radius: 9rem !important;
}

.rounded-160 {
    border-radius: 10rem !important;
}

/* Hide Scroll bar Css For Custom Modal */
.scroll-hide {
    position: absolute;
    overflow-y: hidden;
    padding-inline-end: 17px;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
}

@media screen and (max-width: 991px) {
    .scroll-hide {
        padding-inline-end: 0;
    }
}

.scroll-hide-sm {
    position: absolute;
    overflow-y: hidden;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: calc(100% - 0px);
}

/* Hide Scroll bar Css For Custom Modal End */
/* Overlay Start */
.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    content: "";
    inset-inline-start: 0;
    inset-block-start: 0;
    background-color: hsl(var(--black)/0.6);
    z-index: 99;
    transition: 0.2s linear;
    visibility: hidden;
    opacity: 0;
}

.overlay.show-overlay {
    visibility: visible;
    opacity: 1;
}

.side-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    content: "";
    inset-inline-start: 0;
    inset-block-start: 0;
    background-color: hsl(var(--black)/0.6);
    z-index: 99;
    transition: 0.2s linear;
    visibility: hidden;
    opacity: 0;
}

.side-overlay.show {
    visibility: visible;
    opacity: 1;
}

/* Overlay End */
.text-line-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.text-line-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.text-line-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.scroll-sm::-webkit-scrollbar {
    width: 6px;
}

.scroll-sm::-webkit-scrollbar-track {
    background: hsl(var(--white));
}

.scroll-sm::-webkit-scrollbar-thumb {
    background: #e4e4e4;
    background: hsl(var(--white));
    border-radius: 50px;
}

.scroll-sm::-webkit-scrollbar-thumb:hover {
    background: #c1c1c1 !important;
}

.scroll-sm:hover::-webkit-scrollbar-thumb {
    background: #e4e4e4;
}

.scroll-sm-horizontal::-webkit-scrollbar {
    height: 6px;
}

.gap-2 {
    gap: var(--size-2) !important;
}

.gap-3 {
    gap: var(--size-3) !important;
}

.gap-4 {
    gap: var(--size-4) !important;
}

.gap-5 {
    gap: var(--size-5) !important;
}

.gap-6 {
    gap: var(--size-6) !important;
}

.gap-7 {
    gap: var(--size-7) !important;
}

.gap-8 {
    gap: var(--size-8) !important;
}

.gap-9 {
    gap: var(--size-9) !important;
}

.gap-10 {
    gap: var(--size-10) !important;
}

.gap-11 {
    gap: var(--size-11) !important;
}

.gap-12 {
    gap: var(--size-12) !important;
}

.gap-13 {
    gap: var(--size-13) !important;
}

.gap-14 {
    gap: var(--size-14) !important;
}

.gap-16 {
    gap: var(--size-16) !important;
}

.gap-18 {
    gap: var(--size-18) !important;
}

.gap-20 {
    gap: var(--size-20) !important;
}

.gap-22 {
    gap: var(--size-22) !important;
}

.gap-24 {
    gap: var(--size-24) !important;
}

.gap-26 {
    gap: var(--size-26) !important;
}

.gap-28 {
    gap: var(--size-28) !important;
}

.gap-30 {
    gap: var(--size-30) !important;
}

.gap-32 {
    gap: var(--size-32) !important;
}

.gap-36 {
    gap: var(--size-36) !important;
}

.gap-40 {
    gap: var(--size-40) !important;
}

.gap-44 {
    gap: var(--size-44) !important;
}

.gap-48 {
    gap: var(--size-48) !important;
}

.gap-50 {
    gap: var(--size-50) !important;
}

.gap-56 {
    gap: var(--size-56) !important;
}

.gap-64 {
    gap: var(--size-64) !important;
}

.gap-68 {
    gap: var(--size-68) !important;
}

.gap-72 {
    gap: var(--size-72) !important;
}

.gap-76 {
    gap: var(--size-76) !important;
}

.gap-80 {
    gap: var(--size-80) !important;
}

.gap-90 {
    gap: var(--size-90) !important;
}

.gap-110 {
    gap: var(--size-110) !important;
}

.gap-120 {
    gap: var(--size-120) !important;
}

.gap-144 {
    gap: var(--size-144) !important;
}

.gap-160 {
    gap: var(--size-160) !important;
}

/* ================================= preload Css Start =========================== */
.preloader {
    background-color: hsl(var(--white));
    inset-block-end: 0;
    inset-inline-start: 0;
    position: fixed;
    inset-inline-end: 0;
    inset-block-start: 0;
    z-index: 9999;
}

.preloader .loader {
    background: hsl(var(--main));
    border-radius: 50%;
    width: 70px;
    height: 70px;
    inset-inline-start: 50%;
    margin-inline-start: -23px;
    margin-block-start: -14px;
    position: absolute;
    inset-block-start: 50%;
    animation: load 0.75s linear infinite;
}

.preloader .loader:after {
    content: "";
    position: absolute;
    width: 69px;
    height: 69px;
    inset-block-start: 3px;
    inset-inline-end: 0;
    inset-inline-start: 0;
    margin: auto;
    background: hsl(var(--white));
    border-radius: 50%;
}

@keyframes load {
    to {
        transform: rotate(360deg);
    }
}
/* ================================= preload Css End ===========================  */
/* ====================== Section Heading ==================== */
.section-heading {
    text-align: center;
    margin-block-end: clamp(2rem, 0.174rem + 3.803vw, 3.5rem);
    max-width: 700px;
    margin-inline-start: auto;
    margin-inline-end: auto;
    z-index: 1;
    position: relative;
}

.section-heading__title {
    font-size: 184px !important;
    line-height: 0.75;
    text-align: center;
    opacity: 0.4;
    background: linear-gradient(180deg, #266FFE 0%, rgba(38, 111, 254, 0) 81.96%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: -44px !important;
    z-index: -1;
    position: relative;
}

.section-heading p {
    max-width: 678px;
    margin-inline-start: auto;
    margin-inline-end: auto;
}

/* ====================== Section Heading En d==================== */
/* ============= Header Start Here ======================= */
.header {
    transition: 0.2s linear;
    background-color: hsl(var(--white));
    padding: 16px 0;
    box-shadow: 0px 4px 24px -5px rgba(0, 0, 0, 0.04);
}

.header.fixed-header {
    position: fixed;
    inset-inline-start: 0;
    inset-block-start: 0;
    inset-inline-end: 0;
    width: 100%;
    z-index: 9;
    backdrop-filter: blur(24px);
    animation: slideDown 0.35s ease-out;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 991px) {
    .header.fixed-header {
        inset-block-start: -1px;
    }
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}

.logo img {
    max-width: 200px;
}

/* Header Menu and Submenu Css Start */
.nav-menu {
    gap: 4px;
}

.nav-menu__item.activePage > a {
    color: hsl(var(--main));
}

.nav-menu__item.activePage > a::before {
    color: hsl(var(--main));
}

.nav-menu__item:hover > a {
    color: hsl(var(--heading-color));
}

@media (min-width: 992px) {
    .nav-menu__item:hover > a {
        color: hsl(var(--main));
    }
}

.nav-menu__link {
    color: hsl(var(--heading-color)) !important;
    font-weight: 500;
    width: 100%;
    padding: 6px 16px;
    transition: 0.2s;
}

@media (min-width: 992px) {
    .nav-menu__link {
        border-radius: 8px;
    }

    .nav-menu__link:hover, .nav-menu__link.active {
        background-color: var(--gray-100);
    }
}
/* ================================= Header Css End =========================== */
/* Mobile Menu Sidebar Start */
.mobile-menu {
    position: fixed;
    background-color: hsl(var(--white));
    width: 300px;
    height: 100vh;
    overflow-y: auto;
    padding: 24px;
    z-index: 991;
    transform: translateX(-100%);
    transition: 0.2s linear;
    padding-block-end: 68px;
}

.mobile-menu.active {
    transform: translateX(0%);
}

.close-button {
    position: absolute;
    inset-inline-end: 8px;
    inset-block-start: 8px;
    width: 28px;
    height: 28px;
    background-color: var(--gray-200);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
}

.close-button:hover {
    background-color: hsl(var(--black));
    color: hsl(var(--white));
}

.nav-menu--mobile {
    display: block;
    margin-block-start: 32px;
}

.nav-menu--mobile .nav-menu__item > a::before {
    transform: translateY(-50%) rotate(0deg);
}

.nav-menu--mobile .nav-menu__link {
    border-bottom: 1px solid var(--gray-200) !important;
    position: relative;
    padding: 12px 0;
    padding-inline-end: 16px;
}

/* Mobile Menu Sidebar Start */
/* ========================= Footer Css Start ============================== */
.footer {
    background-color: hsl(var(--heading-color));
}

.footer-content {
    max-width: 724px;
    margin: 0 auto;
    text-align: center;
}

/* ========================= Footer Css End ============================== */
/* ===================== Scroll to Top Start ================================= */
.progress-wrap {
    position: fixed;
    inset-inline-end: 36px;
    inset-block-end: 36px;
    height: 46px;
    line-height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    border-radius: 50px;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    background-color: transparent;
}

@media screen and (max-width: 991px) {
    .progress-wrap {
        inset-inline-end: 24px;
        inset-block-end: 24px;
        height: 40px;
        width: 40px;
        line-height: 40px;
    }
}

.progress-wrap.active-progress {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.progress-wrap:hover {
    transform: scale(1.06);
    background-color: var(--main-200);
}

.progress-wrap::after {
    position: absolute;
    font-family: "remixicon";
    font-weight: 900;
    content: "";
    text-align: center;
    height: 46px;
    width: 46px;
    line-height: 46px;
    font-size: 18px;
    inset-inline-start: 0;
    inset-block-start: 0;
    cursor: pointer;
    display: block;
    z-index: 1;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    color: hsl(var(--main)) !important;
}

@media screen and (max-width: 991px) {
    .progress-wrap::after {
        height: 40px;
        width: 40px;
        line-height: 40px;
    }
}

.progress-wrap svg path {
    fill: none;
}

.progress-wrap svg.progress-circle path {
    stroke: hsl(var(--main));
    stroke-width: 5;
    box-sizing: border-box;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

/* ===================== Scroll to Top End ================================= */
/* ================= Slick Arrow & Dots css Start ================ */
.slick-initialized.slick-slider .slick-track {
    display: flex;
}

.slick-initialized.slick-slider .slick-slide {
    cursor: grab;
    height: auto;
    margin: 0;
}

.slick-initialized.slick-slider .slick-slide > div {
    height: 100%;
}

/* Dots Css Start */
.slick-dots {
    text-align: center;
    padding-block-start: 20px;
}

.slick-dots li {
    display: inline-block;
}

.slick-dots li button {
    border: none;
    background-color: hsl(var(--black)/0.2);
    color: hsl(var(--white));
    margin: 0 3px;
    width: 25px;
    height: 8px;
    border-radius: 1px;
    border-radius: 50rem;
    text-indent: -9999px;
    transition: 0.3s linear;
}

.slick-dots li.slick-active button {
    background-color: hsl(var(--main));
    width: 40px;
}

/* Dots Css End */
/* ================= Slick Arrow & Dots css Start ================ */
/* ===================================== Banner Css Start ================================ */
.banner {
    background-image: url("/assets_demo/images/bg/gradient-bg.png");
}

.banner__inner {
    padding-top: 96px;
}

.banner .slick-slide {
    transition: 0.4s linear;
}

.banner .slick-slide.slick-current.slick-active {
    transform: scale(1.2);
    transform-origin: bottom;
    z-index: 10;
}

.banner .slick-initialized.slick-slider .slick-track {
    padding-top: clamp(5rem, -1.086rem + 12.678vw, 10rem);
}

.banner .slick-list.draggable {
    padding: 0 !important;
}

.tech-icon {
    position: absolute;
    z-index: -1;
}

.tech-icon.one {
    left: 14%;
    top: 154px;
    animation-delay: 1s;
}

.tech-icon.two {
    top: 72%;
    left: 25%;
    animation-delay: 1.5s;
}

.tech-icon.three {
    top: 72%;
    right: 25%;
    animation-delay: 2.2s;
}

.tech-icon.four {
    top: 100px;
    right: 12%;
    animation-delay: 2.8s;
}

.animation-updown {
    animation: upDown 4s linear infinite;
}

.animation-rotation {
    animation: roatation 8s linear infinite;
}

.animation-scalation {
    animation: scalation 8s linear infinite;
}

.animation-walking {
    animation: walking 10s linear infinite;
}

@keyframes upDown {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-30px);
    }

    100% {
        transform: translateY(0px);
    }
}
/* ===================================== Banner Css End ================================ */
/* ================================ Counter Section Css Start ====================================== */
.counter {
    margin-top: 120px;
}

@media screen and (max-width: 991px) {
    .counter {
        margin-top: 80px;
    }
}

@media (min-width: 1200px) {
    .counter {
        margin-top: -87px;
        position: relative;
        z-index: 2;
    }
}

.counter-item-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(184px, 1fr));
    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.08);
}

@media screen and (max-width: 767px) {
    .counter-item-wrapper {
        grid-template-columns: 1fr 1fr;
    }
}

.counter-item {
    transition: 0.2s linear;
}

.counter-item:nth-child(4n+1) {
    background: linear-gradient(270deg, rgba(212, 225, 255, 0.15) 1.1%, rgba(72, 127, 255, 0.15) 98.9%);
}

.counter-item:nth-child(4n+2) {
    background: linear-gradient(270deg, rgba(253, 226, 193, 0.13) 0%, rgba(255, 159, 41, 0.13) 100%);
}

.counter-item:nth-child(4n+3) {
    background: linear-gradient(270deg, rgba(220, 177, 253, 0.13) 0%, rgba(140, 1, 249, 0.13) 100%);
}

.counter-item:nth-child(4n+4) {
    background: linear-gradient(270deg, rgba(199, 255, 217, 0.13) 0%, rgba(16, 139, 56, 0.13) 100%);
}

.counter-item:hover .counter-item__icon {
    animation: 1s wobble linear;
    -webkit-transform-origin: 50% 100%;
}

@media screen and (max-width: 575px) {
    .counter-item__text {
        font-size: 0.875rem !important;
    }
}

@media screen and (max-width: 424px) {
    .counter-item__text {
        font-size: 0.75rem !important;
    }
}

@keyframes wobble {
    0% {
        transform: none;
    }

    15% {
        transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }

    30% {
        transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }

    45% {
        transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }

    60% {
        transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }

    75% {
        transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }

    100% {
        transform: none;
    }
}
/* ================================ Counter Section Css End ====================================== */
/* ================================== Feature Section Start =================================== */
.feature-item {
    padding: clamp(1.5rem, -0.478rem + 4.12vw, 3.125rem) 16px;
    border: 1px solid transparent;
    transition: 0.2s linear;
}

.feature-item:hover {
    border: 1px solid var(--main-600) !important;
}

.feature-item:hover .feature-item__icon img {
    animation: tada 1s ease infinite;
}

@media screen and (max-width: 767px) {
    .feature-item__text {
        font-size: 0.8125rem !important;
    }
}

@-webkit-keyframes tada {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    10%, 20% {
        -webkit-transform: scale(0.9) rotate(-3deg);
        transform: scale(0.9) rotate(-3deg);
    }

    30%, 50%, 70%, 90% {
        -webkit-transform: scale(1.1) rotate(3deg);
        transform: scale(1.1) rotate(3deg);
    }

    40%, 60%, 80% {
        -webkit-transform: scale(1.1) rotate(-3deg);
        transform: scale(1.1) rotate(-3deg);
    }

    100% {
        -webkit-transform: scale(1) rotate(0);
        transform: scale(1) rotate(0);
    }
}

@keyframes tada {
    0% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    10%, 20% {
        -webkit-transform: scale(0.9) rotate(-3deg);
        -ms-transform: scale(0.9) rotate(-3deg);
        transform: scale(0.9) rotate(-3deg);
    }

    30%, 50%, 70%, 90% {
        -webkit-transform: scale(1.2) rotate(3deg);
        -ms-transform: scale(1.2) rotate(3deg);
        transform: scale(1.2) rotate(3deg);
    }

    40%, 60%, 80% {
        -webkit-transform: scale(1.2) rotate(-3deg);
        -ms-transform: scale(1.2) rotate(-3deg);
        transform: scale(1.2) rotate(-3deg);
    }

    100% {
        -webkit-transform: scale(1) rotate(0);
        -ms-transform: scale(1) rotate(0);
        transform: scale(1) rotate(0);
    }
}
/* ================================== Feature Section End =================================== */
/* ======================== Demos Section Css Start ================================ */
.demo-section {

     background-image: url("/assets_demo/images/bg/demo-bg.png");
}

.demo-item {
    border-radius: 16px 16px 0 0;
    overflow: hidden;
}

.demo-item:hover .demo-item__overlay {
    transform: scale(1);
    visibility: visible;
    opacity: 1;
}

.demo-item.upcoming-item:hover .demo-item__thumbs {
    background: #10101040;
}

.demo-item.upcoming-item .demo-item__overlay {
    background: rgba(14, 1, 67, 0.2);
    backdrop-filter: blur(4px);
}

.demo-item__inner {
    padding: 0 10px;
    padding-top: 16px;
}

.demo-item__thumbs {
    border-radius: 8px 8px 0 0;
    background-color: hsl(var(--white));
}

.demo-item__thumbs img {
    border-radius: 8px 8px 0 0;
    max-height: 282px;
    width: 100%;
    object-fit: cover;
    object-position: top;
}

.demo-item__overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: calc(100% + 0px);
    height: calc(100% + 0px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    background: rgba(148, 148, 148, 0.25);
    background: #10101040;
    backdrop-filter: blur(1.5px);
    transform: scale(0.8);
    visibility: hidden;
    opacity: 0;
    transition: 0.2s linear;
    border-radius: inherit;
}

.bg-light-gradient-1, .bg-light-gradient-2 {
    position: relative;
    z-index: 1;
}

.bg-light-gradient-1:hover::after, .bg-light-gradient-2:hover::after {
    visibility: visible;
    opacity: 1;
}

.bg-light-gradient-1:hover::before, .bg-light-gradient-2:hover::before {
    visibility: hidden;
    opacity: 0;
}

.bg-light-gradient-1::before, .bg-light-gradient-1::after, .bg-light-gradient-2::before, .bg-light-gradient-2::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: 0.3s linear;
    z-index: -1;
}

.bg-light-gradient-1::before {
    background: linear-gradient(180deg, rgba(156, 51, 226, 0.2) 0%, rgba(64, 54, 206, 0.2) 100%);
    visibility: visible;
    opacity: 1;
}

.bg-light-gradient-1::after {
    background: linear-gradient(180deg, #42DDFF 0%, #0137FF 100%) !important;
    visibility: hidden;
    opacity: 0;
}

.bg-light-gradient-2::before {
    background: linear-gradient(180deg, rgba(66, 221, 255, 0.2) 0%, rgba(1, 55, 255, 0.2) 100%);
    visibility: visible;
    opacity: 1;
}

.bg-light-gradient-2::after {
    background: linear-gradient(180deg, #42DDFF 0%, #0137FF 100%) !important;
    visibility: hidden;import { CSS } from '@dnd-kit/utilities';

    opacity: 0;
}

/* ======================== Demos Section Css End ================================ */
.testimonials::before {
    position: absolute;
    content: "";
    width: 470px;
    height: 980px;
    transform: rotate(54deg);
    border-radius: 980px;
    opacity: 0.3;
    background: #CCB6FF;
    filter: blur(250px);
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.testimonials-slider {
    margin: -16px;
}

/* Lightbox Overlay */
.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99000 !important;
}

/* Lightbox Content */
.lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
}

/* Lightbox Image */
.lightbox-image {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
}

/* Close Button */
.close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
}

.scroll-to-top {
    display: flex;
    justify-content: center;
    align-items: center;
     z-index: 99000 !important;
}

.demo .banner__content h1{
font-size: 52px !important;
}



    `;

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const images = [
    "assets_demo/images/thumbs/banner-img1.png",
    "assets_demo/images/thumbs/banner-img2.png",
    "assets_demo/images/thumbs/banner-img3.png",
    "assets_demo/images/thumbs/banner-img4.png",
    "assets_demo/images/thumbs/banner-img5.png",
    "assets_demo/images/thumbs/banner-img6.png",
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 260) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });

    return () => {
      window.removeEventListener("load", () => {
        setLoading(false);
      });
    };
  }, []);

  return (
    <section className='demo'>
      <ScrollToTop smooth width={20} color='#477EFF' />
      <>
        {loading && (
          <div className='preloader'>
            <div className='loader'></div>
          </div>
        )}
      </>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      {/*==================== Preloader Start ====================*/}

      {/*==================== Preloader End ====================*/}
      {/*==================== Overlay Start ====================*/}
      <div className='overlay' />
      {/*==================== Overlay End ====================*/}
      {/*==================== Sidebar Overlay End ====================*/}
      <div className='side-overlay' />
      {/*==================== Sidebar Overlay End ====================*/}
      {/* ==================== Scroll to Top End Here ==================== */}
      <div className='progress-wrap'>
        <svg
          className='progress-circle svg-content'
          width='100%'
          height='100%'
          viewBox='-1 -1 102 102'
        >
          <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' />
        </svg>
      </div>
      {/* ==================== Scroll to Top End Here ==================== */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div>
        {/* Mobile Menu */}
        <div
          className={`mobile-menu scroll-sm d-lg-none d-block ${
            isMobileMenuActive ? "active" : ""
          }`}
        >
          <button
            type='button'
            className='close-button'
            onClick={toggleMobileMenu}
          >
            <i className='ri-close-fill'></i>
          </button>
          <div className='mobile-menu__inner'>
            <Link to='/index-1' className='mobile-menu__logo'>
              <img src='assets_demo/images/logo/logo.png' alt='Logo' />
            </Link>
            <div className='mobile-menu__menu'>
              <ul className='nav-menu flex-align nav-menu--mobile'>
                <li className='nav-menu__item'>
                  <a
                    href='#banner'
                    onClick={closeMobileMenu}
                    className='nav-menu__link'
                  >
                    Home
                  </a>
                </li>
                <li className='nav-menu__item'>
                  <a
                    href='#demos'
                    onClick={closeMobileMenu}
                    className='nav-menu__link'
                  >
                    Dashboards
                  </a>
                </li>
                <li className='nav-menu__item'>
                  <a
                    href='#features'
                    onClick={closeMobileMenu}
                    className='nav-menu__link'
                  >
                    Features
                  </a>
                </li>
                <li className='nav-menu__item'>
                  <a
                    href='#documentation'
                    onClick={closeMobileMenu}
                    className='nav-menu__link'
                  >
                    UI Elements
                  </a>
                </li>
              </ul>
              <a
                href='https://themeforest.net/user/wowtheme7'
                className='btn btn-main btn-sm d-lg-none flex-align gap-8 py-9 mt-24'
              >
                <i className='ri-shopping-cart-line d-inline-flex text-md line-height-0'></i>
                Purchase Now
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className={`header ${isHeaderSticky ? "fixed-header" : ""}`}>
          <div className='container container-two'>
            <nav className='header-inner flex-between'>
              {/* Logo */}
              <div className='logo'>
                <Link to='/index-1' className='link'>
                  <img src='assets_demo/images/logo/logo.png' alt='Logo' />
                </Link>
              </div>

              {/* Main Menu */}
              <div
                className='header-menu d-lg-block d-none'
                id='navbar-example'
              >
                <ul className='nav-menu flex-align'>
                  <li className='nav-menu__item'>
                    <a href='#banner' className='nav-menu__link'>
                      Home
                    </a>
                  </li>
                  <li className='nav-menu__item'>
                    <a href='#demos' className='nav-menu__link'>
                      Dashboards
                    </a>
                  </li>
                  <li className='nav-menu__item'>
                    <a href='#features' className='nav-menu__link'>
                      Features
                    </a>
                  </li>
                  <li className='nav-menu__item'>
                    <a href='#documentation' className='nav-menu__link'>
                      UI Elements
                    </a>
                  </li>
                </ul>
              </div>

              {/* Header Right */}
              <div className='header-right flex-align'>
                <a
                  href='https://themeforest.net/user/wowtheme7'
                  className='btn btn-main btn-sm d-lg-flex d-none flex-align gap-8 py-9'
                >
                  <i className='ri-shopping-cart-line d-inline-flex text-md line-height-0'></i>
                  Purchase Now
                </a>
                <button
                  type='button'
                  className='toggle-mobileMenu d-lg-none ms-3 text-2xl d-flex line-height-1'
                  onClick={toggleMobileMenu}
                >
                  <i className='ri-bar-chart-horizontal-line'></i>
                </button>
              </div>
            </nav>
          </div>
        </header>

        {/* Overlay for Mobile Menu */}
        {isMobileMenuActive && (
          <div className='side-overlay show' onClick={toggleMobileMenu}></div>
        )}
      </div>
      {/* ==================== Header End Here ==================== */}
      <div className='overflow-hidden'>
        {/* ================================== Banner Section Start ================================= */}
        <section className='banner bg-img position-relative z-1' id='banner'>
          <div className='banner__inner position-relative'>
            <div className='tech-icon one animation-updown w-50 h-50 rounded-circle flex-center p-4 bg-white custom-shadow'>
              <img src='assets_demo/images/icons/icon-html.png' alt='' />
            </div>
            <div className='tech-icon two animation-updown w-50 h-50 rounded-circle flex-center p-4 bg-white custom-shadow'>
              <img src='assets_demo/images/icons/icon-boostrap.png' alt='' />
            </div>
            <div className='tech-icon three animation-updown w-50 h-50 rounded-circle flex-center p-4 bg-white custom-shadow'>
              <img src='assets_demo/images/icons/icon-jquery.png' alt='' />
            </div>
            <div className='tech-icon four animation-updown w-50 h-50 rounded-circle flex-center p-4 bg-white custom-shadow'>
              <img src='assets_demo/images/icons/icon-sass.png' alt='' />
            </div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-xl-8 col-lg-10'>
                  <div className='banner__content text-center'>
                    <h6 className='mb-16 wow bounceIn'>
                      The simplest &amp; fastest way to build web UI for your
                      Dashboard{" "}
                    </h6>
                    <h1 className='mb-24 wow bounceIn'>
                      WowDash React Vite Admin Dashboard Multipurpose Template{" "}
                    </h1>
                    <p className='max-w-772 ms-auto me-auto wow bounceInUp'>
                      Wowdash React Vite is a developer-friendly, ready-to-use
                      admin template designed for building attractive, scalable,
                      and high-performing web applications.
                    </p>
                    <div className='mt-32 flex-center flex-wrap gap-24'>
                      <a
                        href='#demos'
                        className='btn btn-outline-main flex-align gap-8 bg-white-color wow fadeInLeft'
                      >
                        Explore Demos
                        <i className='ri-arrow-right-s-line line-height-0 text-xl' />
                      </a>
                      <a
                        href='https://themeforest.net/user/wowtheme7'
                        className='btn btn-main flex-align gap-8 wow fadeInRight'
                      >
                        <i className='ri-shopping-cart-line d-inline-flex text-lg line-height-0' />
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='banner-thumbs banner-thumb-slider text-center'>
            <div>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className='banner-thumbs__img w-100 h-100'>
                    <a
                      href={image}
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox(image);
                      }}
                    >
                      <img
                        src={image}
                        alt={`banner-img-${index + 1}`}
                        className='rounded-12 box-shadow-3xl'
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        {/* ================================== Banner Section End ================================= */}
        {/* ================================ Counter Section Start ====================================== */}
        <section className='counter wow bounce'>
          <div className='container'>
            <div className='counter-item-wrapper rounded-16 border border-white border-2 bg-white overflow-hidden'>
              <div className='counter-item text-center py-24 px-8'>
                <span className='counter-item__icon mb-12'>
                  <img
                    src='assets_demo/images/icons/counter-icon1.png'
                    alt=''
                  />
                </span>
                <h5 className='mb-4 counter-number'>11</h5>
                <span className='counter-item__text'>Awesome Dashboard</span>
              </div>
              <div className='counter-item text-center py-24 px-8'>
                <span className='counter-item__icon mb-12'>
                  <img
                    src='assets_demo/images/icons/counter-icon2.png'
                    alt=''
                  />
                </span>
                <h5 className='mb-4 counter-number'>10+</h5>
                <span className='counter-item__text'>Application</span>
              </div>
              <div className='counter-item text-center py-24 px-8'>
                <span className='counter-item__icon mb-12'>
                  <img
                    src='assets_demo/images/icons/counter-icon3.png'
                    alt=''
                  />
                </span>
                <h5 className='mb-4 counter-number'>80+</h5>
                <span className='counter-item__text'>All Other Pages</span>
              </div>
              <div className='counter-item text-center py-24 px-8'>
                <span className='counter-item__icon mb-12'>
                  <img
                    src='assets_demo/images/icons/counter-icon4.png'
                    alt=''
                  />
                </span>
                <h5 className='mb-4 counter-number'>260+</h5>
                <span className='counter-item__text'>Reusable Components</span>
              </div>
            </div>
          </div>
        </section>
        {/* ================================ Counter Section End ====================================== */}
        {/* ================================== Feature Section Start =================================== */}
        <section className='feature py-120' id='features'>
          <div className='container'>
            <div className='section-heading'>
              <h4 className='mb-16 wow bounceIn'>
                WowDash React Vite Admin Template Main Features
              </h4>
              <p className='text-md wow bounceInUp'>
                Ready-to-use features are included with this template. Its
                abundance of pre-made features save developers a great deal of
                time.
              </p>
            </div>
            <div className='row gy-4'>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-1'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-1'>
                    <img
                      src='assets_demo/images/icons/feature-icon1.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Email
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-2'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-2'>
                    <img
                      src='assets_demo/images/icons/feature-icon2.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Chat
                  </span>
                </div>
              </div>

              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-4'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-4'>
                    <img
                      src='assets_demo/images/icons/feature-icon4.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Kanban
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-4'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-4'>
                    <img
                      src='assets_demo/images/icons/feature-icon5.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Tabs
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-5'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-5'>
                    <img
                      src='assets_demo/images/icons/feature-icon6.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Invoice
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-2'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-2'>
                    <img
                      src='assets_demo/images/icons/feature-icon7.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Icons
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-1'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-1'>
                    <img
                      src='assets_demo/images/icons/feature-icon8.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Typography
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-3'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-3'>
                    <img
                      src='assets_demo/images/icons/feature-icon9.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Scrollable
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-2'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-2'>
                    <img
                      src='assets_demo/images/icons/feature-icon10.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Notification
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-4'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-4'>
                    <img
                      src='assets_demo/images/icons/feature-icon11.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Progress
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-5'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-5'>
                    <img
                      src='assets_demo/images/icons/feature-icon12.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Avatar
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-1'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-1'>
                    <img
                      src='assets_demo/images/icons/feature-icon13.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Terms &amp; Conditions
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-5'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-5'>
                    <img
                      src='assets_demo/images/icons/feature-icon14.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Breadcrumb
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-2'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-2'>
                    <img
                      src='assets_demo/images/icons/feature-icon15.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Upload
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-3'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-3'>
                    <img
                      src='assets_demo/images/icons/feature-icon16.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Bookmark
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-3'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-3'>
                    <img
                      src='assets_demo/images/icons/feature-icon3.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Wel Documentation
                  </span>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <a
                href='#demos'
                className='btn btn-outline-main flex-align d-inline-flex gap-8 mt-40'
              >
                View More
                <i className='ri-arrow-down-s-line text-2xl line-height-0' />
              </a>
            </div>
          </div>
        </section>
        {/* ================================== Feature Section End =================================== */}
        {/* ============================= Demo Section Start ================================== */}
        <section className='demo-section py-120 bg-img' id='demos'>
          <div className='container'>
            <div className='section-heading'>
              <h1 className='section-heading__title'>7+</h1>
              <h4 className='mb-16 wow bounceIn'>Complete Demo Dashboards</h4>
              <p className='text-md wow bounceInUp'>
                WowDash React Vite admin template provides Outstanding workable
                dashboard layouts with dark mode, & Inner pages
              </p>
              <ul
                className='nav nav-pills justify-content-center mt-24 gap-24'
                id='pills-tab'
                role='tablist'
              >
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link text-main-600 fw-semibold rounded-8 border border-main-600 py-12 px-24 hover-bg-main-200 active'
                    id='pills-main-demo-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#pills-main-demo'
                    type='button'
                    role='tab'
                    aria-controls='pills-main-demo'
                    aria-selected='true'
                  >
                    Main Demos
                  </button>
                </li>
              </ul>
            </div>
            <div className='tab-content' id='pills-tabContent'>
              {/* Main Demos Start */}
              <div
                className='tab-pane fade show active'
                id='pills-main-demo'
                role='tabpanel'
                aria-labelledby='pills-main-demo-tab'
                tabIndex={0}
              >
                <div className='row gy-4 justify-content-center'>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-2'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img1.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link to='/index-1' className='btn btn-main btn-sm'>
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          to='/index-1'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          AI Dashboard
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-1'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img2.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link to='/index-2' className='btn btn-main btn-sm'>
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          to='/index-2'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          CRM Dashboard
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-2'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img3.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link to='/index-3' className='btn btn-main btn-sm'>
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          to='/index-3'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          eCommerce
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-1'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img4.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link to='/index-4' className='btn btn-main btn-sm'>
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          to='/index-4'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          Cryptocracy
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-2'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img5.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link to='/index-5' className='btn btn-main btn-sm'>
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          to='/index-5'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          Investment
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-2'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img6.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link to='/index-6' className='btn btn-main btn-sm'>
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          to='/index-6'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          LMS
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-2'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img7.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link to='/index-7' className='btn btn-main btn-sm'>
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          to='/index-7'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          NFT &amp; Gaming
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item  position-relative'>
                      <div className='demo-item__inner bg-light-gradient-1'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img8.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link to='/index-8' className='btn btn-main btn-sm'>
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <span className='text-heading fw-medium text-lg mt-12'>
                          Medical
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item upcoming-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-2'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img9.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link to='/index-9' className='btn btn-main btn-sm'>
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <span className='text-heading fw-medium text-lg mt-12'>
                          Analytics
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item upcoming-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-1'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img10.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link
                              to='/index-10'
                              className='btn btn-main btn-sm'
                            >
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <span className='text-heading fw-medium text-lg mt-12'>
                          POS &amp; Inventory
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item upcoming-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-1'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img11.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link
                              to='/index-11'
                              className='btn btn-main btn-sm'
                            >
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <span className='text-heading fw-medium text-lg mt-12'>
                          Finance & Banking
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Main Demos End */}
            </div>
          </div>
        </section>
        {/* ============================= Demo Section End ================================== */}
        {/* ============================= Application Section Start ================================== */}
        <section
          className='application py-120 bg-img'
          id='application'
          style={{
            backgroundImage: "url(assets_demo/images/bg/application-bg.png)",
          }}
        >
          <div className='container'>
            <div className='section-heading'>
              <h1 className='section-heading__title'>5+</h1>
              <h4 className='mb-16 wow bounceIn'>Ready Application</h4>
              <p className='text-md wow bounceInUp'>
                WowDash React Vite admin template provides excellent workable
                application and design of Other applications.
              </p>
            </div>
            <div className='row gy-4 justify-content-center'>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-2 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Email List
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img1.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-1 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Email Writing
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img2.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-2 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Chat Empty
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img3.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-1 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Message
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img4.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-2 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Calendar
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img5.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-1 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Kanban List
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img6.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-2 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Add New Kanban
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img7.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-1 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Invoice List
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img8.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-2 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Invoice Preview
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img9.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================= Application Section End ================================== */}

        {/* ======================================= UI Element Section Start ===================================== */}
        <section
          className='ui-element position-relative z-1 py-120 overflow-hidden bg-img'
          id='documentation'
          style={{
            backgroundImage: "url(assets_demo/images/bg/ui-element-bg.png)",
          }}
        >
          <div className='section-heading'>
            <h4 className='mb-16'>UI Elements</h4>
            <p className='text-md'>
              UI elements are the most integral part of product design.
            </p>
          </div>
          <div className='ui-element-one-slider'>
            <Marquee>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img1.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img2.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img4.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img5.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
            </Marquee>
          </div>
          <div className='ui-element-two-slider mt-16'>
            <Marquee direction='right'>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img1.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img2.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img4.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img5.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
            </Marquee>
          </div>
          <div className='ui-element-three-slider mt-16'>
            <Marquee>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img1.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img2.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img4.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img5.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
            </Marquee>
          </div>
        </section>
        {/* ======================================= UI Element Section End ===================================== */}
        {/* ================================== Footer Section Start ================================= */}
        <section
          className='footer py-120 bg-img'
          style={{
            backgroundImage: "url(assets_demo/images/bg/footer-bg.png)",
          }}
        >
          <div className='container'>
            <div className='footer-content'>
              <h5 className='mb-32 text-white text-30 fw-medium wow bounceInUp'>
                Purchase WowDash React Vite Template now &amp; make your project
                more excellent!
              </h5>
              <div className='mt-32 flex-center gap-24'>
                <a
                  href='#demos'
                  className='btn btn-outline-main bg-blue-color flex-align gap-8 wow fadeInRight'
                >
                  Explore Demos
                  <i className='ri-arrow-right-s-line line-height-0 text-xl' />
                </a>
                <a
                  href='https://themeforest.net/user/wowtheme7'
                  className='btn btn-main flex-align gap-8 wow fadeInLeft'
                >
                  Purchase Now
                  <i className='ri-send-plane-fill d-inline-flex text-lg line-height-0' />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ================================== Footer Section End ================================= */}
      </div>

      {/* Custom Lightbox */}
      {isOpen && (
        <div className='lightbox-overlay' onClick={closeLightbox}>
          <div
            className='lightbox-content'
            onClick={(e) => e.stopPropagation()}
          >
            <span className='close' onClick={closeLightbox}>
              &times;
            </span>
            <img src={currentImage} alt='Lightbox' className='lightbox-image' />
          </div>
        </div>
      )}
    </section>
  );
};

export default Demo;
