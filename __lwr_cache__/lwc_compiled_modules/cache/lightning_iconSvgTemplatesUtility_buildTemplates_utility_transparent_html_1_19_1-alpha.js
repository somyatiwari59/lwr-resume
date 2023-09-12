import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./transparent.css";

import _implicitScopedStylesheets from "./transparent.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.5 5.6l-2.1-2.1a1.67 1.67 0 00-2.4.3L32.59 15.21c-.77-1.3-1.51-2.61-2.21-4a36.5 36.5 0 01-3.15-8.36c-.13-.53-.39-.91-1-.89s-.86.4-1 .93c-.06.26-.11.51-.17.76A48.3 48.3 0 0121 13.7 97.47 97.47 0 0114.13 25a16 16 0 00-3 11.12c0 .14 0 .29.06.43L3.8 44a1.87 1.87 0 00-.3 2.4l2.1 2.1a1.67 1.67 0 002.4-.3L48.2 8a1.67 1.67 0 00.3-2.4zM38.42 23.79l-22 22.31a14.47 14.47 0 009.8 3.9 15.48 15.48 0 007-1.44c4.94-2.51 8.11-6.4 8.94-12A15.22 15.22 0 0039 24.66c-.13-.22-.42-.66-.58-.87z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ela2jmr7jd";
freezeTemplate(tmpl);
