import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./endorsement.css";

import _implicitScopedStylesheets from "./endorsement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M27.9 42H22c-1.1 0-2 .9-2 2v32.3c0 1.1.9 1.7 2 1.7h2c3.3 0 6-2.7 6-6V44.1c0-1.2-.9-2.1-2.1-2.1zM72 43h-6c-3.3 0-6-2.7-6-6V25c0-3.3-2.7-6-6-6h-4c-1.1 0-2 .9-2 2v8c0 7-3.6 14-10 14-1.1 0-2 .9-2 2v28c0 1.1.8 1.9 1.9 2 8.9.5 14.8 3.9 24.1 3.9 10 0 18-3.2 18-12.7V51c0-4.4-3.6-8-8-8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2nl6v3erste";
freezeTemplate(tmpl);
