import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_territory_location.css";

import _implicitScopedStylesheets from "./service_territory_location.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M66.3 59.5c-2.2 0-3.9-1.7-4-3.9 0-2.2 1.8-3.9 4-3.9s3.9 1.7 4 3.9c0 2.1-1.8 3.9-4 3.9zM47.4 59.5c-2.2 0-3.9-1.7-4-3.9 0-2.2 1.8-3.9 4-3.9s3.9 1.7 4 3.9c-.1 2.1-1.8 3.8-4 3.9zM56.8 59.5c-2.2 0-3.9-1.7-4-3.9 0-2.2 1.8-3.9 4-3.9s3.9 1.7 4 3.9c0 2.1-1.8 3.9-4 3.9z"${3}/><path d="M71.6 20.2H28.1c-4.4-.1-8.1 3.4-8.3 7.8v44.4c.2 4.4 3.8 7.9 8.2 7.8h24.4c-5.1-4.5-13.5-13.8-13.5-23.5 0-9.6 7.7-17.3 17.3-17.3 9.6 0 17.3 7.7 17.3 17.3 0 9.8-8.5 19-13.6 23.5h11.8c4.4 0 8-3.4 8.2-7.8V28c0-4.3-3.8-7.8-8.3-7.8zM47.3 33.5c-.1 1.5-1.3 2.7-2.8 2.8H30.4c-1.5 0-2.8-1.3-2.8-2.8v-2.8c.1-1.5 1.3-2.7 2.8-2.8h14.1c1.5 0 2.8 1.3 2.8 2.8v2.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6jfl2fd9a39";
freezeTemplate(tmpl);