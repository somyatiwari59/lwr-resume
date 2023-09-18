import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./offline_cached.css";

import _implicitScopedStylesheets from "./offline_cached.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38.6 20.4c-1-6.5-6.7-11.5-13.5-11.5-7.6 0-13.7 6.1-13.7 13.7 0 .3 0 .7.1 1-5 .4-8.9 4.6-8.9 9.6 0 5.4 4.3 9.7 9.7 9.7h11.5l-8.1-8.1c-.4-.4-.4-.9 0-1.3l1.3-1.3c.4-.4.9-.4 1.3 0l3.5 3.5c.4.4 1.1.1 1.1-.4V21.8c0-.4.5-.9 1-.9h1.9c.5 0 .9.4.9.9v13.4c0 .6.8.8 1.1.4l3.5-3.5c.4-.4.9-.4 1.3 0l1.3 1.3c.4.4.4.9 0 1.3L26 42.9h12.3c6.1-.1 11-5.1 11-11.3.1-6.1-4.7-11-10.7-11.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-hiclphq3lq";
freezeTemplate(tmpl);
