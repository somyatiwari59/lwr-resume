import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./display_rich_text.css";

import _implicitScopedStylesheets from "./display_rich_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M4.1 43.1H48c.9 0 1.6.7 1.6 1.6v3.1c0 .9-.7 1.6-1.6 1.6H4.1c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6zM4.1 29H48c.9 0 1.6.7 1.6 1.6v3.1c0 .9-.7 1.6-1.6 1.6H4.1c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6zM32 14.9h16c.9 0 1.6.7 1.6 1.6v3.1c0 .9-.7 1.6-1.6 1.6H32c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6zM24.1 21.6L16.7 3.3c-.2-.3-.5-.6-.9-.6h-5.7c-.3 0-.7.2-.8.6L2.5 21.6c-.1.3.1.8.5.8h3.6c.3 0 .7-.3.8-.6l1.4-3.9h8.7l1.5 3.9c.1.3.5.6.8.6h3.6c.5 0 .8-.4.7-.8zm-13.6-8.5l2.3-5.8h.5l2.5 5.8h-5.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-46mgagk60m0";
freezeTemplate(tmpl);
