import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./read_receipts.css";

import _implicitScopedStylesheets from "./read_receipts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M48.9 43.4c.7.6 1.5.6 2.2 0l23-21.3c.4-.8.3-2.1-1.3-2.1l-45.6.1c-1.2 0-2.2 1.1-1.3 2.1l23 21.2z"${3}/><path d="M74.3 31.2c0-1.1-1.3-1.6-2-.9L54.4 46.9c-1.2 1.1-2.8 1.7-4.4 1.7-1.6 0-3.2-.6-4.4-1.7l-18-16.6c-.8-.7-2-.2-2 .9v21.2c0 2.7 2.2 4.9 4.9 4.9h23.9v-6.1c.2-3.3 2.8-6 6.2-6.2h.7c3.3.2 6 2.8 6.2 6.2v6.1h2.2c2.7 0 4.9-2.2 4.9-4.9-.3 0-.3-14.7-.3-21.2z"${3}/></g><path d="M71.1 63.7l-6.7-2.3c-.5-.2-.9-.7-.9-1.2v-8.9c0-1.4-1.1-2.4-2.5-2.4h-.2c-1.4 0-2.5 1.1-2.5 2.4v17.5c0 1.5-1.9 2.1-2.7.8L53.9 66c-.9-1.5-2.9-2-4.4-.9l-1.1.9L54 79.3c.2.6.8.9 1.5.9h14.7c.7 0 1.3-.5 1.5-1.1l2.6-9.3c.6-2.7-.8-5.2-3.2-6.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1fqf2sepebm";
freezeTemplate(tmpl);
