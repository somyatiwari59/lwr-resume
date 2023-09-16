import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./action_list_component.css";

import _implicitScopedStylesheets from "./action_list_component.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.2 63.9h29.9c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H48.2c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM48.2 46h29.9c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H48.2c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM48.2 28.2h29.9c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H48.2c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM29 28.2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM29 63.9c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM29 41c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 12c-1.7 0-3-1.4-3-3 0-1.7 1.4-3 3-3s3 1.4 3 3c0 1.7-1.3 3-3 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1hrfofdmrl7";
freezeTemplate(tmpl);
