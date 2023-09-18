import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dynamic_record_choice.css";

import _implicitScopedStylesheets from "./dynamic_record_choice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20.8 43v-.3C13.7 40.4 8.5 33.9 8.5 26c0-9.6 7.9-17.5 17.5-17.5S43.5 16.4 43.5 26c0 1.6-.2 3.2-.6 4.7.2.2.5.3.7.5.3 0 .6-.1.9-.1 1.6 0 3.2.5 4.4 1.2.6-2 .9-4.1.9-6.3C49.7 12.8 39 2.1 25.9 2.1S2.1 12.8 2.1 25.9c0 12.6 9.8 22.9 22.2 23.7-2-1.4-3.5-3.9-3.5-6.6z"${3}/><path d="M31.3 28.8c1.5 0 2.9.4 4.2 1 .3-.1.6-.2 1-.2.4-1.1.6-2.3.6-3.6 0-6.1-4.9-11-11-11s-11 4.9-11 11c0 4.9 3.2 9 7.6 10.5.4-4.4 4.1-7.7 8.6-7.7z"${3}/><path d="M35.2 34.6c.8-.8 1.9-1.3 3.2-1.3 1.7 0 3.1.9 3.9 2.2.6-.2 1.4-.5 2.2-.5 2.9 0 5.4 2.5 5.4 5.3 0 2.9-2.5 5.3-5.4 5.3-.3 0-.7 0-1-.1-.6 1.2-2 2-3.4 2-.6 0-1.2-.2-1.7-.4-.7 1.6-2.3 2.7-4.1 2.7-2 0-3.6-1.2-4.2-2.9-.2 0-.6.1-.9.1-2.3 0-4.2-1.8-4.2-4.1 0-1.5.8-2.9 2.1-3.6-.2-.6-.4-1.2-.4-1.9 0-2.6 2.2-4.8 4.8-4.8 1.4.1 2.8.9 3.7 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2cin7ph9o1j";
freezeTemplate(tmpl);
