import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead_insights.css";

import _implicitScopedStylesheets from "./lead_insights.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 22c-15.5 0-28 12.6-28 28s12.6 28 28 28c15.5 0 28-12.6 28-28S65.5 22 50 22zm0 52.7c-13.6 0-24.7-11-24.7-24.7 0-13.6 11-24.7 24.7-24.7 13.6 0 24.7 11 24.7 24.7 0 13.6-11.1 24.7-24.7 24.7z"${3}/><g${3}><path d="M49 49.2c0 2.4-.5 4.5-1.4 6.2-.9 1.7-2.3 3-4.1 4-1.8.9-4 1.4-6.6 1.4v-2c2.9 0 5.2-.7 6.9-2s2.6-3.2 2.8-5.6c-1.6 1.6-3.5 2.4-5.7 2.4-1.2 0-2.3-.3-3.3-.8s-1.7-1.2-2.3-2.2c-.6-1-.8-2.1-.8-3.4 0-1.3.3-2.5.9-3.6.6-1.1 1.4-1.9 2.5-2.5 1.1-.6 2.4-.9 3.9-.9 2.4 0 4.3.8 5.5 2.4s1.7 3.6 1.7 6.6zm-2.4-.4c0-2.3-.4-4-1.1-5.1-.7-1.1-2-1.7-3.7-1.7-1.5 0-2.7.4-3.6 1.3-.8.9-1.2 2.1-1.2 3.6s.4 2.6 1.2 3.4c.8.8 1.9 1.2 3.3 1.2 1.1 0 2-.2 2.9-.7s1.5-1.2 2.2-2zM66.1 49.2c0 2.4-.5 4.5-1.4 6.2-.9 1.7-2.3 3-4.1 4-1.8.9-4 1.4-6.6 1.4v-2c2.9 0 5.2-.7 6.9-2s2.6-3.2 2.8-5.6c-1.6 1.6-3.5 2.4-5.7 2.4-1.2 0-2.3-.3-3.3-.8s-1.7-1.2-2.3-2.2c-.6-1-.8-2.1-.8-3.4 0-1.3.3-2.5.9-3.6.6-1.1 1.4-1.9 2.5-2.5 1.1-.6 2.4-.9 3.9-.9 2.4 0 4.3.8 5.5 2.4s1.7 3.6 1.7 6.6zm-2.5-.4c0-2.3-.4-4-1.1-5.1-.7-1.1-2-1.7-3.7-1.7-1.5 0-2.7.4-3.6 1.3-.8.9-1.2 2.1-1.2 3.6s.4 2.6 1.2 3.4c.8.8 1.9 1.2 3.3 1.2 1.1 0 2-.2 2.9-.7s1.6-1.2 2.2-2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-79v98a1jgtq";
freezeTemplate(tmpl);
