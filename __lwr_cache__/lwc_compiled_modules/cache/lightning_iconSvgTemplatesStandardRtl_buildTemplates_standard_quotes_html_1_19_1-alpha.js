import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quotes.css";

import _implicitScopedStylesheets from "./quotes.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M72 22H50.1c-1.4-.1-2.6.6-3.6 1.6L19.7 50.5c-2.3 2.3-2.3 6.1 0 8.5l21.2 21.2c2.3 2.3 6.1 2.3 8.5 0L76.5 53c1-1 1.6-2.6 1.5-4V28c0-3.3-2.7-6-6-6zM50.4 66L49 67.4c-.8.8-2 .8-2.8 0L32.6 53.8c-.8-.8-.8-2 0-2.8l1.4-1.4c.8-.8 2-.8 2.8 0l13.6 13.6c.8.8.8 2 0 2.8zm8-8L57 59.4c-.8.8-2 .8-2.8 0L40.6 45.8c-.8-.8-.8-2 0-2.8l1.4-1.4c.8-.8 2-.8 2.8 0l13.6 13.6c.8.8.8 2 0 2.8zM64 41c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ospf52ik9m";
freezeTemplate(tmpl);
