import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./steps.css";

import _implicitScopedStylesheets from "./steps.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.4 50.2h-7v-4.8h7v4.8zm0-2.3zm-14.1 2.3h-7v-4.8h7v4.8zm-14 0h-7v-4.8h7v4.8zm-9.4-5.9H2.1v-7h4.8v7zm43-1.7h-4.8v-7h4.8v7zm-43-12.3H2.1v-7h4.8v7zm43-1.7h-4.8v-7h4.8v7zm-43-12.3H2.1v-7h4.8v7zm43-1.6h-4.8v-7h4.8v7zm-7.3-8.1h-7V1.8h7v4.8zm-14 0h-7V1.8h7v4.8zm-13.9 0h-7V1.8h7v4.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5sd7krbmje5";
freezeTemplate(tmpl);
