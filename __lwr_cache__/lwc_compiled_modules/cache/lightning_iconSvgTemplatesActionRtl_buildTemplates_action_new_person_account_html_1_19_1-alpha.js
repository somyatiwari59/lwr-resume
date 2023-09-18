import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_person_account.css";

import _implicitScopedStylesheets from "./new_person_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M41.7 33.2c-2.9-1.2-3.4-2.3-3.4-3.5 0-1.2.8-2.3 1.8-3.2 1.7-1.5 2.6-3.7 2.6-6.2 0-4.6-3-8.7-8.2-8.7s-8.2 4-8.2 8.7c0 2.6 1 4.6 2.6 6.2 1 .9 1.8 2 1.8 3.2 0 1.2-.5 2.3-3.4 3.5-4.3 1.8-8.3 4-8.4 7.8 0 2.5 1.9 5 4.3 5h22.4c2.5 0 4.3-2.5 4.3-5 .2-3.7-3.9-6-8.2-7.8z"${3}/><path d="M23.4 27.1c-.3-.4-1.9-2.4-1.8-7.8.1-5.3 2.4-6.6 2.4-6.6V7.5c0-.9-.9-1.5-1.5-1.5h-19C2.8 6 2 6.7 2 7.6v34.9h10.8C13.1 33.6 23.3 30 23.3 30c1.5-.8.4-2.5.1-2.9zm-12.8 11c0 .9-.7 1.6-1.6 1.6H7.4c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H9c.9 0 1.6.7 1.6 1.6v1.6zm0-7.9c0 .9-.7 1.6-1.6 1.6H7.4c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H9c.9 0 1.6.7 1.6 1.6v1.6zm0-8c0 .9-.7 1.6-1.6 1.6H7.4c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H9c.9 0 1.6.7 1.6 1.6v1.6zm0-7.9c0 .9-.7 1.6-1.6 1.6H7.4c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H9c.9 0 1.6.7 1.6 1.6v1.6zm9 15.9c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H18c.9 0 1.6.7 1.6 1.6v1.6zm0-8c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H18c.9 0 1.6.7 1.6 1.6v1.6zm0-7.9c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H18c.9 0 1.6.7 1.6 1.6v1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3l3cush2vdq";
freezeTemplate(tmpl);
