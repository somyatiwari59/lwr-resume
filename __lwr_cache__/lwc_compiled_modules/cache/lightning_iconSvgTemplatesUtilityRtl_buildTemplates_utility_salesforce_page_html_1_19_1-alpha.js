import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./salesforce_page.css";

import _implicitScopedStylesheets from "./salesforce_page.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M44.44 19H33.2a3.89 3.89 0 01-4.2-3.55 3.53 3.53 0 010-.65V3.6A1.58 1.58 0 0027.44 2H10.8A4.87 4.87 0 006 6.8v38.4a4.87 4.87 0 004.8 4.8h30.4a4.87 4.87 0 004.8-4.8V20.6a1.58 1.58 0 00-1.56-1.6zM33.59 39.35a3.92 3.92 0 01-1.08-.1 4.19 4.19 0 01-3.68 2.16A5.24 5.24 0 0127 41a4.88 4.88 0 01-4.43 2.91A4.72 4.72 0 0118 40.78c-.22 0-.65.11-1 .11a4.49 4.49 0 01-4.54-4.42 4.39 4.39 0 012.27-3.89 6.33 6.33 0 01-.44-2.06 5.26 5.26 0 015.19-5.18 5.92 5.92 0 014.06 2.14A4.79 4.79 0 0127 26.06a4.91 4.91 0 014.21 2.38 7.49 7.49 0 012.38-.54 5.93 5.93 0 015.83 5.73 5.85 5.85 0 01-5.83 5.72z"${3}/><path d="M36.4 15h8.5a1.2 1.2 0 001.1-1.2 1.4 1.4 0 00-.3-.9L35.1 2.3a1.4 1.4 0 00-.9-.3A1.2 1.2 0 0033 3.1v8.5a3.49 3.49 0 003.4 3.4z"${3}/></g></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-430oo9c3j7c";
freezeTemplate(tmpl);
