import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_preference.css";

import _implicitScopedStylesheets from "./shift_preference.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M72 26h-5v-2a4 4 0 00-8 0v2H41v-2a4 4 0 00-8 0v2h-5a6 6 0 00-6 6v2a2 2 0 002 2h52a2 2 0 002-2v-2a6 6 0 00-6-6zm4 16H24a2 2 0 00-2 2v30a6 6 0 006 6h44a6 6 0 006-6V44a2 2 0 00-2-2zM50 75.9A14.9 14.9 0 1164.9 61 14.94 14.94 0 0150 75.9zm-6.8-8.7a1.71 1.71 0 01-1.9 1.6h-1.2a.67.67 0 01-.7-.6V59c0-.4.3-.6.7-.6h2.4a.67.67 0 01.7.6zm17.2-1.8c0 3.5-3.3 3.8-6.9 3.8-3.3 0-4.5-1.1-7.7-1.2a.65.65 0 01-.6-.6v-8c0-.4.3-.6.7-.6a4.18 4.18 0 004-4.2v-2.4c0-.4.3-.6.7-.6h1.2a1.71 1.71 0 011.9 1.6v4.1a1.71 1.71 0 001.9 1.6h2.8a1.78 1.78 0 011.9 1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7r4pcpeqg69";
freezeTemplate(tmpl);