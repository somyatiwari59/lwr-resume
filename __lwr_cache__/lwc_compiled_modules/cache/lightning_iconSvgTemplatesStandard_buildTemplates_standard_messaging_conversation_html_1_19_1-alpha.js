import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./messaging_conversation.css";

import _implicitScopedStylesheets from "./messaging_conversation.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M54.686 71.349c10.594-3.909 16.829-10.49 18.705-19.743C77.926 53.882 81 58.347 81 63.5c0 2.202-.564 4.243-1.544 6.086l1.689 5.37c.402 1.285-.803 2.41-2.089 2.009l-5.219-1.84C71.676 76.332 69.165 77 66.476 77c-4.869 0-9.167-2.227-11.79-5.651zM44.098 22c13.335 0 24.099 10.045 24.179 22.5 0 12.455-10.764 22.5-24.098 22.5-4.66 0-8.997-1.205-12.692-3.375a1.62 1.62 0 00-1.366-.16l-7.069 2.49c-1.285.402-2.49-.723-2.088-2.009l2.25-7.151c.16-.402.08-.884-.162-1.286C21.125 52.214 20 48.518 20 44.5 20 32.045 30.764 22 44.098 22zM32 37a2 2 0 00-2 2v2a2 2 0 002 2h26a2 2 0 002-2v-2a2 2 0 00-2-2H32zm0 11a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2H32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5mcs09bs6d8";
freezeTemplate(tmpl);
