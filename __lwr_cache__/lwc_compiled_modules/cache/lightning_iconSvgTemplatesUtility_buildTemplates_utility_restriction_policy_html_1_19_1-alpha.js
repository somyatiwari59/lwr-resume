import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./restriction_policy.css";

import _implicitScopedStylesheets from "./restriction_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M37.2 24.4A12.8 12.8 0 1050 37.2a12.8 12.8 0 00-12.8-12.8zm5.6 15.2H31.6a2.4 2.4 0 010-4.8h11.2a2.4 2.4 0 110 4.8zM13.6 2H8a6 6 0 00-6 6v4.8a6 6 0 006 6h5.6a6 6 0 006-6V8a6 6 0 00-6-6zm-2.4 12h-.8a3.6 3.6 0 010-7.2h.8a3.6 3.6 0 110 7.2zM30.4 18.8H36a6 6 0 006-6V8a6 6 0 00-6-6h-5.6a6 6 0 00-6 6v4.8a6 6 0 006 6zm2.4-12h.8a3.6 3.6 0 110 7.2h-.8a3.6 3.6 0 110-7.2zM13.6 23.6H8a6 6 0 00-6 6v4.8a6 6 0 006 6h5.6a6 6 0 006-6v-4.8a6 6 0 00-6-6zm-2.4 12h-.8a3.6 3.6 0 110-7.2h.8a3.6 3.6 0 110 7.2z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3uetek9eef4";
freezeTemplate(tmpl);
