import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./global_constant.css";

import _implicitScopedStylesheets from "./global_constant.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M53.3 53.1c3.3-2.5 6.8-2.9 9.2-2.9l8.9-.1c.9 0 1.7 0 2.7-.1 1.1 0 2.2-.1 3.3-.1H80c0-16.5-13.5-30-30-30s-30 13.5-30 30c0 14.4 10.3 26.5 23.9 29.4-.2-1-.1-2 .1-3 .4-1.7 1.4-3.1 2.4-4.2-3.1-3.2-5.8-10.3-6.3-19.1H47v8c.2-.6.4-1.2.8-1.8 1.2-1.7 2.6-3.7 4.3-5.3.3-.3.6-.5.8-.7l.4-.1zm20.5-6h-7.9c-.3-7.1-1.9-13.3-4.3-18 6.6 3.7 11.2 10.3 12.2 18zM53 27.4c3.4 2.9 6.4 10.3 6.9 19.7H53V27.4zm-6 0v19.7h-6.9c.5-9.4 3.5-16.8 6.9-19.7zM26.2 53.1h7.9c.3 7.1 1.9 13.3 4.3 18-6.6-3.7-11.2-10.3-12.2-18zm7.9-6h-7.9c1-7.7 5.6-14.3 12.2-18-2.4 4.7-3.9 10.9-4.3 18z"${3}/><path d="M48.3 70.3c.4-.3.7-.7 1-.9.3-.4.7-.8 1-1.2-1.6-.7-2.8-2.1-3.3-3.8v7.2c.5-.6.9-1 1.3-1.3z"${3}/></g><path d="M79.7 55.3c-.2-.2-.4-.3-.6-.3-2.5-.1-5.1.1-7.6.1l-8.9.1c-2.7 0-4.9.6-7 2.5-1.3 1.2-2.6 2.9-3.6 4.4-.1.2-.2.4-.2.6 0 .6.5 1 1 1 .6 0 .7-.4 1-.8.3-.4.6-.8 1-1.2 1.4-1.3 3.3-2 5.1-1.8-1.6 4.4-3.8 9.4-7 12.9-1.3 1.4-3.6 2.9-4.1 4.9-.5 2.1 1.6 2.6 3.2 2 2-.8 3.2-2.9 4.3-4.6 1.2-2.2 2.4-4.5 3.3-6.8 1-2.3 2-4.6 2.9-6.9.6-1.4.8-1.4 2.2-1.4h3.9c-1.4 3.2-2.8 6.4-4.1 9.7-1 2.5-2.8 6.1-1.5 8.8 1.3 2.7 4.8 1.7 6.7.3 2-1.4 3.2-3.6 4.3-5.7.2-.4.4-.8.2-1.3-.2-.4-.5-.6-.9-.6-.9 0-1.1 1.1-1.4 1.7-.5 1.1-1.7 2.1-3 1.9-2.9-.4-.3-5.7.2-7.1.5-1.5 1.1-2.9 1.8-4.3.4-.8.7-1.7 1.1-2.5.5-1 .5-1 1.7-1.1 1 0 3.9.5 4.8-.1.7-.5 1.1-2.2 1.5-3.5 0-.3 0-.6-.3-.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7lm2024oodd";
freezeTemplate(tmpl);