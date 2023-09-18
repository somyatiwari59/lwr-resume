import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reply_text.css";

import _implicitScopedStylesheets from "./reply_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.7 50.9a1 1 0 00-.5 1.7l5.5 5.6a1.45 1.45 0 010 2.1l-2.1 2.1a1.45 1.45 0 01-2.1 0L36 48.9a1.45 1.45 0 010-2.1l13.5-13.5a1.45 1.45 0 012.1 0l2.1 2.2a1.45 1.45 0 010 2.1l-5.6 5.6c-.6.6.5 1.7.5 1.7a27.16 27.16 0 0125.8 20.3 26 26 0 005.3-15.6c-.1-15.5-13.5-27.7-30.1-27.7s-30 12.3-30 27.4a27.56 27.56 0 003.6 13.3 2.58 2.58 0 01.3 2.1l-3.9 10.7a1.25 1.25 0 001.6 1.6L32 72.9a2.33 2.33 0 012.1.3 32.38 32.38 0 0015.7 4 31.63 31.63 0 0019.5-6.9 21.68 21.68 0 00-20.6-19.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2mlsvj19v55";
freezeTemplate(tmpl);
