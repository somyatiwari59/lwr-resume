import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./events.css";

import _implicitScopedStylesheets from "./events.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M71.4 28.6C65.9 23.1 58.6 20 50.9 20c-1.7 0-3 1.3-3 3s1.3 3 3 3c6.1 0 11.9 2.4 16.3 6.7C71.5 37.2 74 43 74 49.1c0 1.7 1.3 3 3 3s3-1.3 3-3c0-7.7-3-15-8.6-20.5zm-20.5 3.5c-1.7 0-3 1.3-3 3s1.3 3 3 3c2.9 0 5.7 1.1 7.8 3.2 2.1 2.1 3.2 4.8 3.2 7.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-4.5-1.8-8.8-5-12s-7.5-5-12-5zm-4.3 28.7l2.6-7c1.8.7 3.8.3 5.3-1.1 2-2 2-5.1 0-7.1s-5.1-2-7.1 0c-1.5 1.5-1.8 3.7-1 5.6l-6.5 2.9-11.7-11.7c-.8-.8-2.2-.8-2.9.1-7.5 9-7 22.4 1.5 30.9 8.4 8.4 21.8 8.9 30.9 1.5.9-.7.9-2.1.1-2.9L46.6 60.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6c3jloatkku";
freezeTemplate(tmpl);
