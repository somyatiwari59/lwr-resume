import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_consumed_state.css";

import _implicitScopedStylesheets from "./product_consumed_state.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M23.65 35.45a1.32 1.32 0 01-.95-.45L10.55 22.9a1.32 1.32 0 01-.41-.95 1.29 1.29 0 01.41-.94l1.89-2a1.32 1.32 0 011-.41 1.29 1.29 0 01.94.41l5 5a.91.91 0 001.54-.64V4.35A1.38 1.38 0 0122.25 3H25a1.61 1.61 0 011.44 1.35v19.16a.91.91 0 001.54.63l5-5a1.3 1.3 0 011.88 0L36.74 21a1.31 1.31 0 010 1.9L24.59 35a1.29 1.29 0 01-.94.45zm4 5.32a12.7 12.7 0 001.67 5.43H5.6A3.6 3.6 0 012 42.6V30.42a1.39 1.39 0 011.35-1.35h2.71a1.38 1.38 0 011.35 1.35v9a1.38 1.38 0 001.34 1.35zm3.16-1a9.6 9.6 0 119.6 9.6 9.6 9.6 0 01-9.61-9.57zm15.62-2.24L40 44a1.15 1.15 0 01-.86.38 1.14 1.14 0 01-.86-.38l-3.12-3.12a.56.56 0 010-.86l.86-.86a.56.56 0 01.86 0l2.26 2.26 5.54-5.54a.56.56 0 01.86 0l.86.86a.55.55 0 01.02.82z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2pnrnpnnkde";
freezeTemplate(tmpl);
