import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./procedure.css";

import _implicitScopedStylesheets from "./procedure.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M72 25h-2a.94.94 0 00-1 1v4a8 8 0 01-8 8H39a8 8 0 01-8-8v-4a.94.94 0 00-1-1h-2a6 6 0 00-6 6v43a6 6 0 006 6h44a6 6 0 006-6V31a6 6 0 00-6-6zM28 53.86v-2.07a2.08 2.08 0 012.08-2.08h3.11V46.6a2.08 2.08 0 012.07-2.08h2.08a2.08 2.08 0 012.07 2.08v3.11h3.09a2.08 2.08 0 012.08 2.08v2.07a2.08 2.08 0 01-2.08 2.08h-3.11v3.11a2.07 2.07 0 01-2.07 2.07h-2.08a2.07 2.07 0 01-2.07-2.07v-3.11h-3.11A2.08 2.08 0 0128 53.86zm43.66 17.79A1.32 1.32 0 0170.33 73H29.41a1.33 1.33 0 01-1.33-1.33V69a1.34 1.34 0 011.33-1.33h40.92A1.33 1.33 0 0171.66 69zm0-11.62a1.33 1.33 0 01-1.33 1.33H50.22A1.34 1.34 0 0148.89 60v-2.63A1.34 1.34 0 0150.22 56h20.11a1.33 1.33 0 011.33 1.33zm0-11.63a1.33 1.33 0 01-1.33 1.33H50.41a1.34 1.34 0 01-1.33-1.33v-2.66a1.34 1.34 0 011.33-1.33h19.92a1.33 1.33 0 011.33 1.33z"${3}/><path d="M39 32h22a2 2 0 002-2v-4a6 6 0 00-6-6H43a6 6 0 00-6 6v4a2 2 0 002 2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6n65dg6ubia";
freezeTemplate(tmpl);
