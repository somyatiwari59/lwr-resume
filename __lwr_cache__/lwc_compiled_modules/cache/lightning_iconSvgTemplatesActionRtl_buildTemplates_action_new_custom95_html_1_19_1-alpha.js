import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom95.css";

import _implicitScopedStylesheets from "./new_custom95.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M28.4 10.2V6.8h.8c1.3 0 2.4-1 2.4-2.4 0-1.3-1-2.4-2.4-2.4h-6.4c-1.3 0-2.4 1-2.4 2.4 0 1.3 1 2.4 2.4 2.4h.8v3.4C13.7 11.4 6 19.8 6 30c0 11 9 20 20 20s20-9 20-20c0-10.2-7.7-18.6-17.6-19.8zm-2.4 35c-8.4 0-15.2-6.8-15.2-15.2S17.6 14.8 26 14.8 41.2 21.6 41.2 30 34.4 45.2 26 45.2z"${3}/><path d="M31.3 21.8l-3.7 3.7c-.5-.2-1-.3-1.6-.3-2.6 0-4.8 2.2-4.8 4.8s2.2 4.8 4.8 4.8 4.8-2.2 4.8-4.8c0-.6-.1-1.1-.3-1.6l3.7-3.7c.8-.8.8-2.1 0-2.9-.8-.8-2.1-.8-2.9 0z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-46u4rbqii0b";
freezeTemplate(tmpl);
