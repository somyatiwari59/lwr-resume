import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./environment_hub.css";

import _implicitScopedStylesheets from "./environment_hub.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.1 47c.4-4.2 1.6-8.3 3.6-11.8 3.3-5.7 8.6-9 15.8-9.2 1.2-3.5 4.6-6 8.5-6 5 0 9 4 9 9s-4 9-9 9c-3.9 0-7.2-2.5-8.5-6-8.1.3-12.5 6.6-13.4 15h13.4c1.2-3.5 4.6-6 8.5-6 5 0 9 4 9 9s-4 9-9 9c-3.9 0-7.3-2.5-8.5-6H49.1c.7 9 4.9 15.1 13.4 15 1.2-3.5 4.6-6 8.5-6 5 0 9 4 9 9s-4 9-9 9c-3.9 0-7.3-2.5-8.5-6-7.4.1-12.8-3.3-16.1-9.1-1.9-3.5-3-7.6-3.3-11.9h-5.6c-1.2 3.5-4.6 6-8.5 6-5 0-9-4-9-9s4-9 9-9c3.9 0 7.3 2.5 8.5 6h5.6zM71 32c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0 42c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-21c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-42 0c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2gqon2bkeeo";
freezeTemplate(tmpl);
