import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_opportunity.css";

import _implicitScopedStylesheets from "./new_opportunity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M41.8 41H10.2c-.8 0-1.4.7-1.4 1.4v.1c0 2.5 2 4.5 4.5 4.5h25.5c2.5 0 4.5-2 4.5-4.5v-.1c-.1-.7-.7-1.4-1.5-1.4zM45.5 10.2c-2.5 0-4.5 2-4.5 4.5 0 1.4.6 2.6 1.6 3.4-1.3 2.9-4.2 4.9-7.6 4.8-4-.2-7.2-3.4-7.4-7.4 0-.7 0-1.3.1-1.9 1.7-.7 2.9-2.2 2.9-4.2C30.5 7 28.5 5 26 5s-4.5 2-4.5 4.5c0 1.9 1.2 3.5 2.8 4.2.2.6.2 1.2.2 1.9-.2 4-3.4 7.2-7.4 7.4-3.4.2-6.4-1.9-7.7-4.8 1-.8 1.6-2.1 1.6-3.4 0-2.5-2-4.5-4.5-4.5S2 12.3 2 14.8s2 4.5 4.5 4.5l2.1 16c.1.7.7 1.2 1.4 1.2h32c.7 0 1.3-.5 1.4-1.2l2.1-16c2.5 0 4.5-2 4.5-4.5s-2-4.6-4.5-4.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-71ioshis0gb";
freezeTemplate(tmpl);
