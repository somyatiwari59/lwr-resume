import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./knowledge.css";

import _implicitScopedStylesheets from "./knowledge.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M32 59h13c1.1 0 2-.9 2-2V27c0-2.2-2-4-4-4H32.3C31 23 30 24 30 25.3V57c0 1.1.9 2 2 2zm44-30v32c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4V29c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h19c1.1 0 2 .9 2 2s.9 2 2 2h6c1.1 0 2-.9 2-2s.9-2 2-2h19c3.3 0 6-2.7 6-6V35c0-3.3-2.7-6-6-6zM55 59h12.7c1.3 0 2.3-1 2.3-2.3V25c0-1.1-.9-2-2-2H57c-2 0-4 1.8-4 4v30c0 1.1.9 2 2 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7o9lcougbn5";
freezeTemplate(tmpl);
