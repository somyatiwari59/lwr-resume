import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_plan_rule.css";

import _implicitScopedStylesheets from "./work_plan_rule.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39.3 32.1h21.4a2 2 0 002-2v-4a6 6 0 00-5.8-6H43.3a5.91 5.91 0 00-5.8 6v4a1.74 1.74 0 001.8 2z"${3}/><path d="M71.4 25.2h-2a.94.94 0 00-1 1v4a7.9 7.9 0 01-7.8 7.9H39.3a7.9 7.9 0 01-7.8-7.9v-4a.94.94 0 00-1-1h-2a5.91 5.91 0 00-5.8 6v42.6a6 6 0 005.8 6h42.9a5.91 5.91 0 005.8-6V31.2a5.79 5.79 0 00-5.8-6zM68.7 73a1.49 1.49 0 01-1.2 1.2H56.3c-.7 0-1-.8-.3-1.3l3.6-3.8-7-7H32.4a1.07 1.07 0 01-1-1v-4.5a1.08 1.08 0 011-1h20.2l6.9-7-3.6-3.6c-.5-.6-.3-1.4.4-1.4h11.1a1.49 1.49 0 011.2 1.2v11.1c0 .7-.8 1-1.3.3l-3.6-3.5-6.2 6.2 6.2 6.1 3.6-3.6c.6-.5 1.4-.3 1.4.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ehijc1n5fa";
freezeTemplate(tmpl);
