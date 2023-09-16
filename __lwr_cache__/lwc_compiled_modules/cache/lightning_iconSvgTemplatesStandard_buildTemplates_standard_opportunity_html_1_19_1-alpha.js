import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./opportunity.css";

import _implicitScopedStylesheets from "./opportunity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M71.1 69H28.9c-1 0-1.9.9-1.9 1.9v.1c0 3.3 2.7 6 6 6h34c3.3 0 6-2.7 6-6v-.1c0-1-.9-1.9-1.9-1.9zM76 28c-3.3 0-6 2.7-6 6 0 1.8.8 3.5 2.1 4.6-1.7 3.9-5.6 6.6-10.2 6.4-5.3-.3-9.6-4.6-9.9-9.9 0-.9 0-1.7.2-2.5 2.2-.9 3.8-3 3.8-5.6 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.5 1.6 4.7 3.8 5.6.2.8.2 1.6.2 2.5-.3 5.3-4.6 9.6-9.9 9.9-4.6.3-8.6-2.5-10.2-6.4 1.3-1.1 2.1-2.8 2.1-4.6 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6l2.8 21.4c.1.9.9 1.6 1.9 1.6h42.6c.9 0 1.7-.7 1.9-1.6L76 40c3.3 0 6-2.7 6-6s-2.7-6-6-6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7nhd7ka3kgt";
freezeTemplate(tmpl);
