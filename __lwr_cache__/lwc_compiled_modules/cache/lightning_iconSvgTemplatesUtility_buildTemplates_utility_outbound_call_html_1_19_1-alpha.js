import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outbound_call.css";

import _implicitScopedStylesheets from "./outbound_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M48.5 37.9L42.4 33c-1.4-1.1-3.4-1.2-4.8-.1l-5.2 3.8c-.6.5-1.5.4-2.1-.2l-7.8-7-7-7.8c-.6-.6-.6-1.4-.2-2.1l3.8-5.2c1.1-1.4 1-3.4-.1-4.8l-4.9-6.1c-1.5-1.8-4.2-2-5.9-.3L3 8.4c-.8.8-1.2 1.9-1.2 3 .5 10.2 5.1 19.9 11.9 26.7S30.2 49.5 40.4 50c1.1.1 2.2-.4 3-1.2l5.2-5.2c1.9-1.5 1.8-4.3-.1-5.7z"${3}/><path d="M48.4 2H33c-1 0-1.3 1.1-.5 1.9l4.9 5-9 9.1c-.5.5-.5 1.4 0 1.9l3.7 3.7c.5.5 1.3.5 1.9 0l9.1-9.1 5.1 4.9c.7.9 1.8.6 1.8-.4V3.7C50 3 49.1 2 48.4 2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-bitik911hm";
freezeTemplate(tmpl);
