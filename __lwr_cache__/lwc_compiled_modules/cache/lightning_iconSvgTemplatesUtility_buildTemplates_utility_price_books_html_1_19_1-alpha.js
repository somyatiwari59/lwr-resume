import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_books.css";

import _implicitScopedStylesheets from "./price_books.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M8.6 36.9V29H7a3.22 3.22 0 01-3.2-3.2 3.26 3.26 0 013-3.2h1.8v-7.9H7a3.22 3.22 0 01-3.2-3.2 3.26 3.26 0 013-3.2h1.8V6.8a4.79 4.79 0 014.6-4.6h30c2.6 0 4.9 1.65 5 4.15V44.6a5.39 5.39 0 01-4.8 5.2h-30A5.26 5.26 0 018.5 45v-1.7H7a3.22 3.22 0 01-3.2-3.2 3.26 3.26 0 013-3.2zm18.9-23.2a2 2 0 00-1.5.6L14.8 25.4a2.05 2.05 0 000 2.9l12.3 12.3a2.05 2.05 0 002.9 0l11.2-11.2a2 2 0 00.6-1.5l-.2-6.8a1.68 1.68 0 00-.6-1.4l-5.3-5.4a2.25 2.25 0 00-1.4-.6zm-3.9 10.8a.48.48 0 01.7 0l6.5 6.5a.48.48 0 010 .7l-1.1 1.1a.48.48 0 01-.7 0l-6.5-6.5a.48.48 0 010-.7zm3.2-3a.48.48 0 01.7 0L34 28a.48.48 0 010 .7l-1 1a.48.48 0 01-.7 0l-6.5-6.5a.48.48 0 010-.7zm10.5-3.3a2.05 2.05 0 11-2.9 0 2.05 2.05 0 012.9 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-75hj4crg5ub";
freezeTemplate(tmpl);
