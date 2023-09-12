import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./spinner.css";

import _implicitScopedStylesheets from "./spinner.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div part="backdrop"${3}></div>`;
const $fragment2 = parseFragment`<div part="dot-a" class="slds-spinner__dot-a${0}"${2}></div>`;
const $fragment3 = parseFragment`<div part="dot-b" class="slds-spinner__dot-b${0}"${2}></div>`;
const stc0 = {
  "role": "status",
  "part": "spinner"
};
const stc1 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_static_fragment($fragment1(), 1), api_element("div", {
    className: $cmp.computedClass,
    attrs: stc0,
    key: 2
  }, [$cmp.validAlternativeText ? api_element("span", stc1, [api_text(api_dynamic_text($cmp._altText))]) : null, api_static_fragment($fragment2(), 5), api_static_fragment($fragment3(), 7)])];
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
tmpl.stylesheetToken = "lwc-47dd688sbro";
freezeTemplate(tmpl);
