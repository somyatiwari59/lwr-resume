import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recipe.css";

import _implicitScopedStylesheets from "./recipe.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M56.5 22.8a2.8 2.8 0 11-2.8-2.8 2.8 2.8 0 012.8 2.8zM46.24 33.2a3.75 3.75 0 10-3.75-3.75 3.75 3.75 0 003.75 3.75zM70.54 72L58 52.75V42.5a2.69 2.69 0 003-2.35 2.26 2.26 0 000-.45 2.49 2.49 0 00-2.25-2.7H41.5a2.5 2.5 0 00-2.5 2.48v.32a2.7 2.7 0 002.56 2.82 3.24 3.24 0 00.44 0V53L29.5 72a5.32 5.32 0 00-.3 5.3 4.88 4.88 0 004.4 2.7h32.7a4.88 4.88 0 004.4-2.7 5 5 0 00-.2-5.3zM47 54.45V43h6v11.6l5.9 9.4H41.1z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-73lhpftccuh";
freezeTemplate(tmpl);
