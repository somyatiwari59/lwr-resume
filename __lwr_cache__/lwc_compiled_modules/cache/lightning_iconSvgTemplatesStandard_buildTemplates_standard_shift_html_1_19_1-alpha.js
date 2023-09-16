import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift.css";

import _implicitScopedStylesheets from "./shift.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M72 26h-5v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2H41v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-5c-3.3 0-6 2.7-6 6v2c0 1.1.9 2 2 2h52c1.1 0 2-.9 2-2v-2c0-3.3-2.7-6-6-6zM76 42H24c-1.1 0-2 .9-2 2v30c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V44c0-1.1-.9-2-2-2zM50 75.9c-8.2 0-14.9-6.7-14.9-14.9S41.8 46.1 50 46.1 64.9 52.8 64.9 61 58.2 75.9 50 75.9z"${3}/><path d="M47.7 67.1c-.4 0-.7-.2-1-.4l-5-5c-.2-.2-.2-.6 0-.9l1.1-1.1c.2-.2.6-.2.9 0l4 4 8.5-8.5c.2-.2.6-.2.9 0l1.1 1.1c.2.2.2.6 0 .9l-9.6 9.6c-.2.1-.5.3-.9.3z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6qhed84io10";
freezeTemplate(tmpl);