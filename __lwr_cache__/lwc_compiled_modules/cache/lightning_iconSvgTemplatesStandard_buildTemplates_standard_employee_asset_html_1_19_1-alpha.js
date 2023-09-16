import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_asset.css";

import _implicitScopedStylesheets from "./employee_asset.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74.8 20.3H25.2a5 5 0 00-5 5v34.3a5 5 0 005 5h49.5a5 5 0 005-5V25.2a4.91 4.91 0 00-4.9-4.9zm-2.5 34.9a2 2 0 01-1.9 1.9H29.6a1.9 1.9 0 01-1.9-1.9V29.6a2 2 0 011.9-1.9h40.7a2 2 0 012 1.9zM41.3 72.3a5 5 0 00-5 5v.6a2 2 0 001.9 1.9h23.5a2 2 0 001.9-1.9v-.6a5 5 0 00-5-5z"${3}/><path d="M50.2 44.4h-.4a8.83 8.83 0 00-8.7 7.5c0 .4.1 1.2 1.5 1.2h14.9c1.4 0 1.5-.9 1.5-1.2a9 9 0 00-8.8-7.5z"${3}/><circle cx="50.1" cy="37.6" r="5.8"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4f07qgm8svc";
freezeTemplate(tmpl);
