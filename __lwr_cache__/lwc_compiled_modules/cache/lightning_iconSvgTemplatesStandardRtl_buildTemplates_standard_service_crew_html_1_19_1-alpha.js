import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_crew.css";

import _implicitScopedStylesheets from "./service_crew.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M60.1 51.3h-3.7v-4.4c0-5.9-3.3-11-8.1-13.5V41c0 4-3.2 7.2-7.2 7.2S33.9 45 33.9 41v-7.8c-4.9 2.6-8.3 7.7-8.3 13.6v4.4H22c-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1h38.1c1.2 0 2.1-.9 2.1-2.1s-.9-2-2.1-2z"${3}/><path d="M41.2 43.9c1.6 0 2.9-1.3 2.9-2.9v-9.2c-1-.2-2-.3-3-.3s-1.9.1-2.8.3V41c-.1 1.6 1.2 2.9 2.9 2.9z"${3}/></g><path d="M41.1 77.3c-8.9 0-16.1-7.9-16.1-17.6h4c0 7.5 5.4 13.6 12.1 13.6s12.1-6.1 12.1-13.6h4c-.1 9.7-7.3 17.6-16.1 17.6zM65.3 31.5c1.1 0 2.1-.9 2.1-2.1v-6.5c-.7-.1-1.4-.2-2.1-.2-.7 0-1.3.1-2 .2v6.5c-.1 1.1.9 2.1 2 2.1zM65.2 57.5v-4c4.3 0 7.9-4 7.9-8.9h4c0 7.1-5.3 12.9-11.9 12.9z"${3}/><path d="M78 36.1h-2v-2.6c0-4.1-2.3-7.7-5.7-9.5v5.4c0 2.8-2.3 5-5 5-2.8 0-5-2.3-5-5v-5.5C57 25.6 54.7 29 54.5 33c2.1 2.1 3.6 4.6 4.6 7.3H78c1.2 0 2.1-.9 2.1-2.1s-.9-2.1-2.1-2.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-amfapsmvun";
freezeTemplate(tmpl);
