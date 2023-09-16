import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quip.css";

import _implicitScopedStylesheets from "./quip.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.1 20.1c-14.9.9-27.1 13.1-28 28C19 65.5 32.8 80 50 80h30V50c0-17.2-14.5-31-31.9-29.9zM35.8 37c0-1.1.9-2 2-2h24.5c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H37.8c-1.1 0-2-.9-2-2v-2zm28.5 26c0 1.1-.9 2-2 2H37.8c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h24.5c1.1 0 2 .9 2 2v2zm7.5-12c0 1.1-.9 2-2 2H30.2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h39.6c1.1 0 2 .9 2 2v2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3c0q72fmv5p";
freezeTemplate(tmpl);
