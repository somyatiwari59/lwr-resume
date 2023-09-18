import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cancel_transfer.css";

import _implicitScopedStylesheets from "./cancel_transfer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M25.1 12.3v-3c4 0 7.2 3.2 7.2 7.2h-3l4.6 5.7c.3.3.7.3.9 0l4.6-5.7h-3c0-6.3-5.2-11.4-11.4-11.4v-3l-5.7 4.6c-.3.3-.2.7.1.9l5.7 4.7zM26.3 33.6c-1.2-1.6-3.5-2.7-5.8-3.8-2.4-1-2.7-2-2.7-3s.6-2.1 1.4-2.8c1.3-1.3 2.1-3.2 2.1-5.3 0-4-2.4-7.5-6.5-7.5h-.4c-4.1 0-6.5 3.5-6.5 7.5 0 2.2.7 4 2.1 5.3.8.7 1.4 1.7 1.4 2.8 0 1-.3 2-2.7 3-3.4 1.5-6.6 3.1-6.7 6.3.3 2.3 1.8 3.9 3.8 3.9h17.9c.3 0 .7-.1 1-.2.1-2.2.6-4.3 1.6-6.2zM31.8 34.6l6 6-6 6c-.6.6-.6 1.6 0 2.1l.7.7c.6.6 1.6.6 2.1 0l6-6 6 6c.6.6 1.6.6 2.1 0l.7-.7c.6-.6.6-1.6 0-2.1l-6-6 6-6c.6-.6.6-1.6 0-2.1l-.7-.7c-.6-.6-1.6-.6-2.1 0l-6 6-6-6c-.6-.6-1.6-.6-2.1 0l-.7.7c-.6.5-.6 1.5 0 2.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6an7pftpkf8";
freezeTemplate(tmpl);
