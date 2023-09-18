import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_transfer.css";

import _implicitScopedStylesheets from "./product_transfer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M30.87 2.42a1.37 1.37 0 00-2 0l-2 1.8a1.28 1.28 0 000 1.94l3.37 3.26a.89.89 0 01-.61 1.58H11.38a1.53 1.53 0 00-1.46 1.38v2.78a1.47 1.47 0 001.46 1.38h18.25a.9.9 0 01.66 1.46l-3.37 3.26a1.28 1.28 0 000 1.94l2 1.94a1.37 1.37 0 002 0l10.77-10.4a1.3 1.3 0 000-1.94zm-9.75 24.42a1.38 1.38 0 012 0l2 1.8a1.3 1.3 0 010 1.94l-3.37 3.26a.88.88 0 00.66 1.53h18.2a1.54 1.54 0 011.47 1.38v2.78a1.49 1.49 0 01-1.47 1.39H22.37a.89.89 0 00-.66 1.52l3.37 3.26a1.3 1.3 0 010 1.94l-2 1.94a1.38 1.38 0 01-2 0l-10.72-10.4a1.28 1.28 0 010-1.94z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6884vsrptur";
freezeTemplate(tmpl);
