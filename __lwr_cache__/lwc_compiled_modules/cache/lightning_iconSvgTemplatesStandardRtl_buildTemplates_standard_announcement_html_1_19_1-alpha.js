import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./announcement.css";

import _implicitScopedStylesheets from "./announcement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M46 74.3L44.4 73c-1.8-1.2-1.8-3.7-1.8-5v-3.6c0-1-.9-1.9-1.9-1.9h-7.5c-1 0-1.9.9-1.9 1.9V74c0 3.4 2 6 5.1 6h6.2c3.6 0 3.9-2.5 3.9-2.5s.6-2.2-.5-3.2zM74 40.1v-17-.1c0-3-3.8-3.9-5.8-1.9L57 31.6c-1.8 1.5-4 2.1-6.3 2.1h-19c-6.6.1-11.7 5.7-11.7 12.2v.2c0 6.5 5.1 11.4 11.7 11.4h19.1c2.4 0 4.6 1 6.4 2.5l11 10.7c2 2 5.8 1.2 5.8-1.7V52c3.8 0 6-2.6 6-6 0-3.3-2.3-5.9-6-5.9z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-31jhtknh73e";
freezeTemplate(tmpl);
