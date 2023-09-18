import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_book_entries.css";

import _implicitScopedStylesheets from "./price_book_entries.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M25 2.3l11.7.2a5.51 5.51 0 012.5 1l4.6 4.6 4.6 4.6a3.55 3.55 0 011 2.5l.3 11.8a3.55 3.55 0 01-1 2.5L29.5 48.7a3.69 3.69 0 01-5 0L13.9 38.1 3.3 27.5a3.69 3.69 0 010-5L22.5 3.3a3.55 3.55 0 012.5-1zM18.6 21l-1.9 1.8a.85.85 0 000 1.3l11.2 11.2a.85.85 0 001.3 0l1.9-1.9a.85.85 0 000-1.3L19.7 21a.65.65 0 00-1.1 0zm5.3-5.4L22 17.5a.85.85 0 000 1.3L33.2 30a.85.85 0 001.3 0l1.9-1.9a.85.85 0 000-1.3L25.1 15.6a.91.91 0 00-1.2 0zM42 10a3.69 3.69 0 00-5 0 3.69 3.69 0 000 5 3.69 3.69 0 005 0 3.69 3.69 0 000-5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1eivei6nli3";
freezeTemplate(tmpl);
