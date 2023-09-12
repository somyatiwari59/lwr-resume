import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./flow_alt.css";

import _implicitScopedStylesheets from "./flow_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M42.3 4.9H30.4C29.6 3.2 27.9 2 26 2c-2.6 0-4.8 2.2-4.8 4.8s2.2 4.8 4.8 4.8c2 0 3.7-1.2 4.4-2.9h11.9c2.1 0 3.8 1.7 3.8 3.8v7.7c0 2.1-1.7 3.8-3.8 3.8h-5.8v-5.8c0-1.6-1.3-2.9-2.9-2.9H18.3c-1.6 0-2.9 1.3-2.9 2.9V24H9.7C5.5 24 2 27.4 2 31.7v7.7c0 4.2 3.4 7.7 7.7 7.7h11.9C22.3 48.8 24 50 26 50c2.6 0 4.8-2.2 4.8-4.8 0-2.6-2.2-4.8-4.8-4.8-2 0-3.7 1.2-4.4 2.9H9.7c-2.1 0-3.8-1.7-3.8-3.8v-7.7c0-2.1 1.7-3.8 3.8-3.8h5.8v5.8c0 1.6 1.3 2.9 2.9 2.9h15.4c1.6 0 2.9-1.3 2.9-2.9V28h5.8c4.2 0 7.7-3.4 7.7-7.7v-7.7c-.2-4.3-3.7-7.7-7.9-7.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ocb3efuevf";
freezeTemplate(tmpl);
