import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./smiley_and_people.css";

import _implicitScopedStylesheets from "./smiley_and_people.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 26.1c0 13.3-10.755 24.1-24 24.1S2 39.4 2 26.1 12.755 2 26 2s24 10.8 24 24.1zM17 15c-1.674 0-3 1.767-3 4s1.326 4 3 4 3-1.767 3-4-1.326-4-3-4zm18 0c-1.674 0-3 1.767-3 4s1.326 4 3 4 3-1.767 3-4-1.326-4-3-4zM11 29c.632 7.644 6.158 14 14.921 14C34.685 43 40.368 36.644 41 29H11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6596qg8gead";
freezeTemplate(tmpl);
