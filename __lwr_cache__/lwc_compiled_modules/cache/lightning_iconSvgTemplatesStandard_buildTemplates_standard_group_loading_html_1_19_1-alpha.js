import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./group_loading.css";

import _implicitScopedStylesheets from "./group_loading.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path opacity=".5" d="M36.7 52.4C35 49.7 34 46.5 34 43c0-5.9 2.5-10.9 6.5-13.9-1.5-2.5-4-4.1-7.5-4.1-5.8 0-9 4.6-9 10 0 2.9 1 5.3 2.9 7.1 1.1 1 2 2.3 2 3.7 0 1.4-.5 2.6-3.8 4-4.7 2.1-9 4.8-9.1 9.2 0 2.9 1.9 5 4.6 5h4.3c.7 0 1.4-.4 1.7-1 2.1-3.8 6-6.2 9.3-7.8 1.1-.5 1.5-1.8.8-2.8zM74.9 49.8c-3.3-1.4-3.8-2.7-3.8-4 0-1.4.9-2.7 2-3.7C75 40.3 76 37.9 76 35c0-5.4-3.2-10-9-10-3.5 0-6 1.6-7.5 4.1 4 3 6.5 7.9 6.5 13.9 0 3.5-.9 6.7-2.7 9.4-.7 1-.3 2.3.8 2.9 3.3 1.6 7.2 4 9.3 7.8.3.6 1 1 1.7 1h4.3c2.7 0 4.6-2.1 4.6-5-.1-4.4-4.4-7.2-9.1-9.3z"${3}/><path opacity=".5" d="M58.7 59.4c-3.6-1.5-4.1-2.9-4.1-4.4 0-1.5 1-3 2.2-4.1 2.1-1.9 3.3-4.7 3.3-7.9 0-5.9-3.6-11-10-11s-10 5.1-10 11c0 3.2 1.2 5.9 3.3 7.9 1.2 1.1 2.2 2.6 2.2 4.1 0 1.5-.6 2.9-4.1 4.4-5.4 2.2-10.4 4.8-10.5 9.6 0 3.2 2.3 6 5.3 6h27.4c3 0 5.3-2.8 5.3-6-.1-4.8-5.1-7.4-10.3-9.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-268bk1ohtvp";
freezeTemplate(tmpl);