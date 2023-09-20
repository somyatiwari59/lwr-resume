import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./iot_context.css";

import _implicitScopedStylesheets from "./iot_context.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M73 43.5c-3.2 0-6 2.2-6.7 5.2h-4.9c-.8-5.6-5.6-10-11.5-10s-10.7 4.3-11.5 10h-4.9c-.8-3-3.5-5.2-6.7-5.2-3.8 0-7 3.1-7 7 0 3.8 3.1 7 7 7 3.2 0 6-2.2 6.7-5.2h4.9c.8 5 4.7 8.8 9.7 9.6v4.9c-3 .8-5.2 3.5-5.2 6.7 0 3.8 3.1 7 7 7s7-3.1 7-7c0-3.2-2.2-6-5.2-6.7v-4.9c5-.7 8.9-4.6 9.7-9.6h4.9c.8 3 3.5 5.2 6.7 5.2 3.8 0 7-3.1 7-7s-3.1-7-7-7zM53.5 73.4c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5z"${3}/><path d="M33.3 36c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0 7.4-7.4 19.4-7.4 26.8 0 .4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8-8.9-9-23.5-9-32.4 0z"${3}/><path d="M28.2 32.4C40 20.7 59 20.7 70.8 32.4c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8-13.3-13.3-34.9-13.3-48.2 0-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6385t5lrdqo";
freezeTemplate(tmpl);