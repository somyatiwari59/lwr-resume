import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./locker_service_console.css";

import _implicitScopedStylesheets from "./locker_service_console.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M47.7 9.1c-.9-2.2-2-4.2-3.3-6.1-.6-.8-1.7-.9-2.3-.2-1.9 1.8-4.6 2.8-7.4 2.8-3 0-5.7-1.2-7.7-3.2-.6-.6-1.6-.6-2.2 0-2 2-4.7 3.2-7.7 3.2-2.8 0-5.4-1-7.4-2.8-.7-.6-1.8-.5-2.3.2C6.1 4.8 5 6.9 4.1 9.1c0 0-2.4 4.9-2 13V22.9c0 .4.1.8.1 1.2v.1C3.6 37.6 13.5 48.3 26 50c12.6-1.8 22.4-12.5 23.8-25.9v-.3c0-.2 0-.5.1-.8.7-8.6-2.2-13.9-2.2-13.9zm-6.8 10.3L24.3 36.3c-.4.4-.9.4-1.3 0l-9.7-9.8c-.4-.4-.4-.9 0-1.3l1.3-1.3c.4-.4.9-.4 1.3 0l7.3 7.4c.2.2.6.2.9 0l14.3-14.4c.4-.4.9-.4 1.3 0l1.3 1.3c.3.3.3.9-.1 1.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4udvhmhobe2";
freezeTemplate(tmpl);
