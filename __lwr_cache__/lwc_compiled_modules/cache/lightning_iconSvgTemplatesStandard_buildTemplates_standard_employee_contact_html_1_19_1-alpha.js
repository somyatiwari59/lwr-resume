import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_contact.css";

import _implicitScopedStylesheets from "./employee_contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M73.8 29.7H26.3a6 6 0 00-6 6v28.6a6 6 0 006 6h47.4a6 6 0 006-6V35.7a6.13 6.13 0 00-5.9-6zm-34.9 5.4a7.6 7.6 0 11-7.6 7.6 7.66 7.66 0 017.6-7.6zm9.8 28.3H29.2c-1.7 0-2-1.1-2-1.6a11.45 11.45 0 0111.4-9.9h.4a11.45 11.45 0 0111.4 9.9c.3.5 0 1.6-1.7 1.6zm23.1-6.9a2 2 0 01-2 2H61a2 2 0 01-2-2v-3a2 2 0 012-2h8.8a2 2 0 012 2zm0-11a2 2 0 01-2 2H55a2 2 0 01-2-2v-3a2 2 0 012-2h14.8a2 2 0 012 2z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-3nsd3c8ecr3";
freezeTemplate(tmpl);
