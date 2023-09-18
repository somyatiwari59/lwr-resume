import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./investment_account.css";

import _implicitScopedStylesheets from "./investment_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 33v34c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V33c0-3.3-2.7-6-6-6H26c-3.3 0-6 2.7-6 6zm11.1 21V40.1c0-1.1.8-2.1 1.9-2.1h14c.9 0 1.3 1.2.7 1.8l-4.2 3.8 6.5 7.5 6.4-6.4c1.1-1.2 3-1.2 4.2 0L71.8 60c.4.4.4 1 0 1.4l-.5.5c-.4.4-1 .4-1.4 0l-11.4-10-6.4 7.3c-1.1 1.2-3 1.2-4.2 0l-10.6-9.1-4.6 4.6c-.7.6-1.7.2-1.6-.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-sieida0dbu";
freezeTemplate(tmpl);
