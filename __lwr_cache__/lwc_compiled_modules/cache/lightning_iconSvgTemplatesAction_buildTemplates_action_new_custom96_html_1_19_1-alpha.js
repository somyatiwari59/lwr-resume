import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom96.css";

import _implicitScopedStylesheets from "./new_custom96.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M49.5 9l-4.2-3.1c-.6-.4-1.2-.6-1.9-.6H29.2V3.6c0-.9-.7-1.6-1.6-1.6h-3.2c-.9 0-1.6.7-1.6 1.6v1.6h-16c-.9 0-1.6.7-1.6 1.6v6.4c0 .9.7 1.6 1.6 1.6H43.4c.7 0 1.4-.2 1.9-.6l4.2-3.1c.7-.6.7-1.6 0-2.1zM45.2 22.8h-16v-2.4c0-.5-.3-.8-.8-.8h-4.8c-.5 0-.8.3-.8.8v2.4H8.6c-.7 0-1.4.2-1.9.6l-4.2 3.1c-.7.5-.7 1.5 0 2.1l4.2 3.1c.6.4 1.2.6 1.9.6h36.6c.9 0 1.6-.7 1.6-1.6v-6.4c0-.8-.7-1.5-1.6-1.5zM29.2 43.3V38c0-.5-.3-.8-.8-.8h-4.8c-.5 0-.8.3-.8.8v5.3c-3.2.9-5 2.8-5.5 5.2-.2.7.4 1.5 1.2 1.5h15.1c.8 0 1.4-.7 1.2-1.5-.6-2.4-2.4-4.3-5.6-5.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-5d45u65kngi";
freezeTemplate(tmpl);