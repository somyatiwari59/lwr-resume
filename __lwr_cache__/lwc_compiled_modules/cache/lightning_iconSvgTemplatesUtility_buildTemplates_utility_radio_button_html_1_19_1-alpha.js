import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./radio_button.css";

import _implicitScopedStylesheets from "./radio_button.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M13.1 28.5C7.2 28.5 2.5 33.2 2.5 39s4.7 10.6 10.6 10.6c5.8 0 10.6-4.7 10.6-10.6-.1-5.8-4.8-10.5-10.6-10.5zm0 16.4c-3.2 0-5.9-2.6-5.9-5.9s2.6-5.9 5.9-5.9S19 35.7 19 39s-2.7 5.9-5.9 5.9zM38.9 28.5c-5.8 0-10.6 4.7-10.6 10.6 0 5.8 4.7 10.6 10.6 10.6 5.8 0 10.6-4.7 10.6-10.6 0-5.9-4.7-10.6-10.6-10.6zM13.1 2.5C7.2 2.5 2.5 7.2 2.5 13.1c0 5.8 4.7 10.6 10.6 10.6 5.8 0 10.6-4.7 10.6-10.6-.1-5.9-4.8-10.6-10.6-10.6zm0 16.4c-3.2 0-5.9-2.6-5.9-5.9s2.6-5.9 5.9-5.9S19 9.7 19 13s-2.7 5.9-5.9 5.9zM38.9 2.5c-5.8 0-10.6 4.7-10.6 10.6 0 5.8 4.7 10.6 10.6 10.6 5.8 0 10.6-4.7 10.6-10.6 0-5.9-4.7-10.6-10.6-10.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2emos90cpq7";
freezeTemplate(tmpl);
