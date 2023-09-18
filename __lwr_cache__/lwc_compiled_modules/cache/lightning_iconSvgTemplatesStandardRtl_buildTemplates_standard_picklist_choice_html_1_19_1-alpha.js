import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist_choice.css";

import _implicitScopedStylesheets from "./picklist_choice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M72.2 61.7v4c-.1 1 .7 1.9 1.8 2h4.2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2zM64.1 30v-4c0-1.1-.9-2-2-2H22.2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h39.9c1.1 0 2-.9 2-2zM64.1 47.9v-4c0-1.1-.9-2-2-2H22.2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h39.9c1.1 0 2-.9 2-2zM72.2 25.9v4c-.1 1 .7 1.9 1.8 2h4.2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2zM72.2 43.8v4c-.1 1 .7 1.9 1.8 2h4.2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2zM32.9 56.8c1-1 2.4-1.7 4-1.7 2.1 0 3.9 1.1 4.9 2.8.8-.3 1.8-.6 2.8-.6 3.7 0 6.8 3.1 6.8 6.7 0 3.7-3.1 6.7-6.8 6.7-.4 0-.9 0-1.3-.1-.8 1.5-2.5 2.5-4.3 2.5-.8 0-1.5-.2-2.2-.5-.9 2-2.9 3.4-5.2 3.4-2.5 0-4.5-1.5-5.3-3.6-.3 0-.7.1-1.1.1-2.9 0-5.3-2.3-5.3-5.2 0-1.9 1-3.6 2.6-4.5-.3-.7-.5-1.5-.5-2.4 0-3.3 2.8-6 6.1-6 1.9 0 3.7.9 4.8 2.4z"${3}/><path d="M28.1 54.4c1.9 0 3.7.9 4.8 2.4 1-1 2.4-1.7 4-1.7 2.1 0 3.9 1.1 4.9 2.8.8-.3 1.8-.6 2.8-.6 3.7 0 6.8 3.1 6.8 6.7 0 3.7-3.1 6.7-6.8 6.7-.4 0-.9 0-1.3-.1-.8 1.5-2.5 2.5-4.3 2.5-.8 0-1.5-.2-2.2-.5-.9 2-2.9 3.4-5.2 3.4-2.5 0-4.5-1.5-5.3-3.6-.3 0-.7.1-1.1.1-2.9 0-5.3-2.3-5.3-5.2 0-1.9 1-3.6 2.6-4.5-.3-.7-.5-1.5-.5-2.4 0-3.3 2.8-6 6.1-6M62.1 59.7h-6.6c.6 1.3.9 2.8.9 4.3 0 1.3-.2 2.5-.6 3.7h6.3c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2f43c3ljav2";
freezeTemplate(tmpl);
