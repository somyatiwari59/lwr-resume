import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./metrics.css";

import _implicitScopedStylesheets from "./metrics.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.9 2H7.1C4.3 2 2 4.3 2 7.1v37.7C2 47.7 4.3 50 7.1 50h37.7c2.8 0 5.1-2.3 5.1-5.1V7.1c.1-2.8-2.2-5.1-5-5.1zM15.7 39.7c0 .9-.8 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-9.4c0-.9.8-1.7 1.7-1.7H14c.9 0 1.7.8 1.7 1.7v9.4zm8.6 0c0 .9-.8 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7V17.4c0-.9.8-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v22.3zm8.6 0c0 .9-.8 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7V12.3c0-.9.8-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v27.4zm8.5 0c0 .9-.8 1.7-1.7 1.7H38c-.9 0-1.7-.8-1.7-1.7V23.4c0-.9.8-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v16.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2t8p1eq32e2";
freezeTemplate(tmpl);
