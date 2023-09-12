import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_template.css";

import _implicitScopedStylesheets from "./text_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20.1 37.2V37c.2-2.7 2.4-4.9 5.2-4.9H32c-1.1-1.9-.9-4.4.7-6.2l.2-.2 1.6-1.5c.9-1 2.2-1.5 3.4-1.6V6.1c0-2.2-1.8-4-4-4H6.1c-2.2 0-4 1.8-4 4V34c0 2.2 1.8 4 4 4H20v-.8zM8.1 8.3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2.8c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V8.3zm0 8.7c0-.6.4-1 1-1H31c.6 0 1 .4 1 1v2.8c0 .6-.4 1-1 1H9.2c-.6 0-1-.4-1-1L8.1 17zm0 11.6v-2.8c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2.8c0 .6-.4 1-1 1H9.2c-.7 0-1.1-.4-1.1-1z"${3}/><path d="M39.2 27c-.6-.5-1.3-.5-1.7 0l-1.7 1.6c-.4.5-.4 1.2 0 1.6l4.4 4.4c.2.2.2.3.2.6 0 .5-.3.8-.8.8H25.3c-.6 0-1.1.5-1.2 1.1v2.4c.1.6.6 1.1 1.2 1.3h14.3c.2 0 .3.1.4.2.3.2.4.8.2 1.1l-4.4 4.4c-.4.5-.4 1.2 0 1.6l1.6 1.7c.5.4 1.2.4 1.6 0l10.6-10.6c.4-.5.4-1.2 0-1.6L39.2 27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-tvm3l2djl";
freezeTemplate(tmpl);
