import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom30.css";

import _implicitScopedStylesheets from "./new_custom30.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M43.2 8.8C38.8 4.4 32.9 2 26.8 2c-1.4 0-2.4 1-2.4 2.4s1 2.4 2.4 2.4c4.9 0 9.5 1.9 13.1 5.4 3.4 3.5 5.4 8.2 5.4 13.1 0 1.4 1 2.4 2.4 2.4s2.4-1 2.4-2.4c-.1-6.2-2.5-12.1-6.9-16.5z"${3}/><path d="M26.8 11.6c-1.4 0-2.4 1-2.4 2.4s1 2.4 2.4 2.4c2.3 0 4.6.9 6.3 2.6 1.7 1.7 2.6 3.8 2.6 6.3 0 1.4 1 2.4 2.4 2.4s2.4-1 2.4-2.4c0-3.6-1.4-7.1-4-9.6-2.7-2.6-6.1-4.1-9.7-4.1zM23.3 34.6l2.1-5.6c1.4.6 3 .2 4.2-.9 1.6-1.6 1.6-4.1 0-5.7-1.6-1.6-4.1-1.6-5.7 0-1.2 1.2-1.4 3-.8 4.5l-5.2 2.3-9.4-9.4c-.6-.6-1.8-.6-2.3.1-6 7.2-5.6 18 1.2 24.7 6.7 6.7 17.5 7.1 24.7 1.2.7-.6.7-1.7.1-2.3l-8.9-8.9z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-1cf0h9l29e8";
freezeTemplate(tmpl);