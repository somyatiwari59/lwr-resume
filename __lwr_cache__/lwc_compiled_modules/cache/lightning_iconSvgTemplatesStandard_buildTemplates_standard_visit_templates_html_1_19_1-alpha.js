import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./visit_templates.css";

import _implicitScopedStylesheets from "./visit_templates.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M30 58c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h20c.5 0 .9.2 1.3.5C54.5 49 59 46.6 64 46.1V26c0-3.3-2.7-6-6-6H26c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h20c0-2.8.6-5.5 1.7-8H30zm-2-28c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2v-2zm0 12c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2v-2z"${3}/><path d="M66 52c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm7.9 10.5L65 72.2c-.4.4-.8.6-1.4.6-.5 0-1-.2-1.4-.6l-4.8-4.7c-.4-.4-.4-1 0-1.3l1.4-1.3c.4-.4 1-.4 1.4 0l3.4 3.4 7.5-8.4c.4-.4 1-.4 1.4 0l1.4 1.3c.3.3.3 1 0 1.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1g61d25u5vs";
freezeTemplate(tmpl);
