import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./web_link.css";

import _implicitScopedStylesheets from "./web_link.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M27 2C13.7 2 3 12.7 3 26s10.7 24 24 24 24-10.7 24-24S40.3 2 27 2zm3 34.3c-1.5 1.5-2 4.4-2.6 6.4-.1.4-.4.8-.8 1l-1 .5c-.6.3-1.3.2-1.8-.3-1-.9-1.8-2.3-1.8-3.7 0-2.4-4-1.6-4-6.4 0-3.9-5-6.2-8.6-4.5-.3.1-.6.3-.9.3-.6.2-1.2-.2-1.3-.8C7.1 27.9 7 27 7 26c0-4.8 1.7-9.2 4.5-12.6 0-.1.1-.1.2-.1 2.4-2.8 5.5-5 9.1-6.2.9-.3 1.7.7 1.2 1.5-.4.6-.6 1.2-.6 1.7.1 2.1-1.9 3.4-2.8 3.1-.8-.3-3 1.1-1 2.1l1.1.5c.1 0 .2.1.2.1l.3.2c3.6 2.1 2.9 3.8 1.4 6.4-1.7 2.8-2.4 0-4.8-.8s-4.8.8-4 2.4c.8 1.6 3.2 0 4.8 1.6 1.6 1.6 1.6 4 6.4 2.4 4.8-1.6 5.6-.8 7.2.8 1.4 1.6 2.2 4.8-.2 7.2zm12.7-.2c-1.9-2.2 0-7.3-2.3-10.2-2.5-3.1-5.7.1-8.8-4.8-2.9-4.7.8-8.6 4.6-9.9 1-.4 2.1-.5 3.2-.5.2 0 .5.1.7.3 4.2 3.6 6.9 9 6.9 15 0 3.6-1 7-2.6 9.9-.4.6-1.2.7-1.7.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6r8nrf3o08q";
freezeTemplate(tmpl);
