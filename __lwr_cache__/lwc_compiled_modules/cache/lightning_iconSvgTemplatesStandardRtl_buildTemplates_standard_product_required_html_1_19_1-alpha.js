import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_required.css";

import _implicitScopedStylesheets from "./product_required.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M56.1 70.3v4c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h32.1c1.1 0 2 .9 2 2z"${3}/><path fill-rule="evenodd" clip-rule="evenodd" d="M66 76.3c-1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4-.2zm0-17.9c-1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4-.2z"${3}/><path d="M56.1 52.4v4c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h32.1c1.1 0 2 .9 2 2zM50.1 34.6v4c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h26.1c1.1 0 2 .9 2 2z"${3}/><path fill-rule="evenodd" clip-rule="evenodd" d="M85.8 26.3l-2.1-2.1c-.5-.6-1.4-.6-2-.1l-.1.1-13.2 13.1-5.4-5.2c-.5-.6-1.4-.6-2-.1l-.1.1-2.1 2.1c-.6.5-.6 1.4-.1 2l.1.1 7.3 7.4c1.2 1.2 3.1 1.2 4.2.1l.1-.1 15.4-15.2c.5-.6.5-1.6 0-2.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-krkhk1mirb";
freezeTemplate(tmpl);