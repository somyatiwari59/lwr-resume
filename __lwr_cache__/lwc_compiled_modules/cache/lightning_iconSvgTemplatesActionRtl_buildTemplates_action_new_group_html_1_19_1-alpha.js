import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_group.css";

import _implicitScopedStylesheets from "./new_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M15.8 28c-1.4-2.1-2.1-4.5-2.1-7.2 0-4.6 1.9-8.4 4.9-10.7-1-1.8-3-3.1-5.6-3.1-4.4 0-6.9 3.6-6.9 7.7 0 2.2.7 4.1 2.2 5.4.8.8 1.5 1.8 1.5 2.8 0 1-.4 2-2.9 3.1-3.6 1.6-6.9 3.8-7 7.1C0 35.3 1.4 37 3.5 37h3.3c.5 0 1-.3 1.3-.8 1.6-2.9 4.6-4.7 7.1-6 .9-.4 1.1-1.5.6-2.2zM45 26c-2.5-1.1-2.9-2-2.9-3.1s.7-2.1 1.5-2.8c1.5-1.4 2.2-3.2 2.2-5.4 0-4.1-2.4-7.7-6.9-7.7-2.6 0-4.6 1.3-5.7 3.1 3 2.3 4.9 6.1 4.9 10.7 0 2.7-.7 5.1-2.1 7.2-.5.8-.2 1.8.6 2.2 2.5 1.2 5.5 3.1 7.1 6 .3.5.8.8 1.3.8h3.3c2.1 0 3.5-1.7 3.5-3.9.1-3.3-3.2-5.5-6.8-7.1z"${3}/><path d="M32.6 33.3c-2.7-1.2-3.2-2.3-3.2-3.4 0-1.2.8-2.3 1.7-3.1 1.6-1.5 2.5-3.6 2.5-6 0-4.5-2.7-8.4-7.6-8.4-4.9 0-7.6 3.9-7.6 8.4 0 2.4.9 4.5 2.5 6 .9.9 1.7 2 1.7 3.1 0 1.2-.4 2.2-3.2 3.4-4 1.7-7.8 3.6-7.9 7.2 0 2.4 1.8 4.4 4.1 4.4h20.8c2.3 0 4.1-2 4.1-4.4-.1-3.6-3.9-5.4-7.9-7.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-1d5d0k75vho";
freezeTemplate(tmpl);