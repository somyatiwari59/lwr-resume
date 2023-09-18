import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./approval.css";

import _implicitScopedStylesheets from "./approval.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74 54H63c-3.3 0-6-2.7-6-6 .5-8.9 4.6-9.4 5-15.1.4-6-3.4-11.4-9.3-12.7C44.9 18.6 38 24.5 38 32c0 6.6 4.5 6.6 5 16 0 3.3-2.7 6-6 6H26c-3.3 0-6 2.7-6 6v4c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2v-4c0-3.3-2.7-6-6-6zM74.1 72H25.9c-1.1 0-1.9.9-1.9 1.9v.1c0 3.3 2.7 6 6 6h40.1c3.3 0 5.9-2.7 5.9-6v-.1c0-1-.9-1.9-1.9-1.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6sprb84giql";
freezeTemplate(tmpl);
