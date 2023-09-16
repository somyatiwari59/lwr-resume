import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./queue.css";

import _implicitScopedStylesheets from "./queue.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M67.6 20.1c-2.9 0-5.4 2.1-6.4 5 3.8 1.7 6.7 5.4 7.7 9.9 3.1-.7 5.4-3.7 5.4-7.3 0-4.3-3-7.6-6.7-7.6zM73.8 37.9c-1.3 1.2-2.9 2-4.7 2.3-.3 2.7-1.3 5.2-2.8 7.2h11.1c1.4 0 2.5-1.1 2.5-2.5v-1.2c0-2.7-3-4.4-6.1-5.8zM63.2 50c-2 1.8-4.5 2.9-7.2 2.9-.2 3.1-1.1 5.9-2.5 8.3h14c1.6 0 3-1.3 3-3V57c-.1-3.3-3.7-5.3-7.3-7zM50.3 65.2c-2.8 2.8-6.6 4.4-10.6 4.4-4.1 0-7.9-1.7-10.7-4.6-4.6 2.2-9 5-9 9.1V76c0 2.2 1.8 3.9 3.9 3.9h31.3c2.2 0 3.9-1.8 3.9-3.9v-1.8c0-4.2-4.2-6.9-8.8-9z"${3}/><path d="M55.7 29.5c-3.7 0-6.8 2.7-7.7 6.5 3.7 2.4 6.4 6.5 7.5 11.2h.2c4.4 0 8-4 8-8.9.1-4.8-3.5-8.8-8-8.8z"${3}/><ellipse cx="39.6" cy="51.6" rx="10.7" ry="11.8"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3q9q8a7r4vf";
freezeTemplate(tmpl);
