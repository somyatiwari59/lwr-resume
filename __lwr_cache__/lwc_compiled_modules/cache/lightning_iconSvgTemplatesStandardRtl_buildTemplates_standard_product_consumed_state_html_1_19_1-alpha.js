import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_consumed_state.css";

import _implicitScopedStylesheets from "./product_consumed_state.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M47.06 61.56a1.59 1.59 0 01-1.18-.51l-15.2-15.17a1.67 1.67 0 01-.51-1.19 1.64 1.64 0 01.51-1.18L33.05 41a1.63 1.63 0 012.37 0l6.3 6.3a1.12 1.12 0 001.91-.79V22.69A1.73 1.73 0 0145.32 21h3.37a2 2 0 011.8 1.68v24a1.12 1.12 0 00.7 1 1.11 1.11 0 001.22-.24l6.3-6.3a1.63 1.63 0 011.18-.5 1.65 1.65 0 011.18.5l2.35 2.37a1.63 1.63 0 010 2.37L48.24 61.05a1.6 1.6 0 01-1.18.51zm5 6.65A15.84 15.84 0 0054.14 75H24.5a4.49 4.49 0 01-4.5-4.5V55.27a1.73 1.73 0 011.69-1.68h3.39a1.72 1.72 0 011.68 1.68v11.26a1.72 1.72 0 001.68 1.68zM56 67a12 12 0 1112 12 12 12 0 01-12-12zm19.52-2.81l-8.07 8.08a1.46 1.46 0 01-2.15 0l-3.9-3.91a.69.69 0 010-1.07l1.07-1.08a.71.71 0 011.08 0L66.37 69l6.93-6.93a.7.7 0 011.08 0l1.07 1.08a.66.66 0 01.07 1.04z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3rcu0274kt5";
freezeTemplate(tmpl);
