import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_type_group.css";

import _implicitScopedStylesheets from "./work_type_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79.9 29.3c0-.3-.1-.6-.3-.9l-8.2-8.1c-.1-.2-.4-.3-.7-.3h-7.9-14.2c-2.9-.1-5.3 2.3-5.4 5.2v26.5c0 2.9 2.4 5.3 5.3 5.3h26.1c2.9.1 5.3-2.3 5.4-5.2V30.7l-.1-1.4zm-23.5 21c0 1.3-1 2.3-2.3 2.3h-4.5c-1.2 0-2.2-1.1-2.2-2.3v-4.5c0-1.3 1-2.3 2.3-2.3h4.5c1.3 0 2.3 1 2.3 2.3l-.1 4.5zm0-12.4c0 1.3-1 2.3-2.3 2.3h-4.5c-1.2 0-2.2-1.1-2.2-2.3v-4.5c0-1.3 1-2.3 2.3-2.3h4.5c1.3 0 2.3 1 2.3 2.3l-.1 4.5zm12.5 12.4c0 1.3-1 2.3-2.3 2.3h-4.5c-1.3 0-2.3-1-2.3-2.3v-4.5c0-1.3 1-2.3 2.3-2.3h4.5c1.3 0 2.3 1 2.3 2.3v4.5zm0-12.4c0 1.3-1 2.3-2.3 2.3h-4.5c-1.3 0-2.3-1-2.3-2.3v-4.5c0-1.3 1-2.3 2.3-2.3h4.5c1.3 0 2.3 1 2.3 2.3v4.5z"${3}/><path d="M42.8 62.7c-2.9 0-5.3-2.4-5.3-5.3v-5.1-22.2c-3.2 0-5.8 2.6-5.8 5.8v26.6c0 3.2 1.7 5.9 5.8 5.9h25c3.2 0 5.7-2.5 5.8-5.7H42.8z"${3}/><path d="M31.1 74.3c-2.9 0-5.3-2.4-5.3-5.3v-5-22.3c-3.2 0-5.8 2.6-5.8 5.8v26.6c0 3.2 1.7 5.9 5.8 5.9h25c3.2 0 5.7-2.5 5.8-5.7H31.1c.1 0 0 0 0 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-71t0h03niu2";
freezeTemplate(tmpl);
