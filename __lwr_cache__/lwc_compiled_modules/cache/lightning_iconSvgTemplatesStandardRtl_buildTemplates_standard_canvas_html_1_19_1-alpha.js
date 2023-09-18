import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./canvas.css";

import _implicitScopedStylesheets from "./canvas.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M73.9 65.9c-.2 3.4-.6 7.1-1.2 10.6-.2 1.1-1.2 2.1-2.3 2.2-6.8.9-13.6 1.3-20.4 1.3-6.7 0-13.5-.4-20.2-1.3-1.1-.1-2.1-1.2-2.3-2.2-1-5.6-1.5-11.3-1.5-16.9 0-5.7.5-11.4 1.4-16.9.2-1.1 1.2-2.1 2.3-2.3 4.1-.5 8.2-.8 12.2-1 0 0 3.3-.2 3.1-3.2-.2-2.8-5-4.6-5-9.4 0-3.8 3.8-6.8 9.9-6.8 6.1 0 9.9 3.1 9.9 6.8 0 4.7-4.7 6.6-4.9 9.4-.2 3.1 3 3.2 3 3.2 4.1.2 8.3.5 12.4 1 1.1.2 2.1 1.2 2.3 2.3.7 3.9 1.1 7.4 1.3 11.2.1 1.1-.9 2-2.1 2-.4 0-.7-.1-1.1-.1-1.2 0-2.9-.7-3.7-1.6 0 0-2.7-2.7-5.5-2.7-4.6-.1-8.2 4.1-8.2 8.5s3.5 8.6 8.1 8.5c2.8-.1 5.5-2.9 5.5-2.9.9-.8 2.5-1.6 3.7-1.6.4-.1.7-.1 1.1-.1 1.4.1 2.3 1 2.2 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-763lnth7vpa";
freezeTemplate(tmpl);
