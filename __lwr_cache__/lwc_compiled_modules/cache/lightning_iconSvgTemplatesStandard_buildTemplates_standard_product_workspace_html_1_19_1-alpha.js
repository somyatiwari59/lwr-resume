import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_workspace.css";

import _implicitScopedStylesheets from "./product_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M36.6 20.5a2.05 2.05 0 012.1 2.1V24a2.05 2.05 0 01-2.1 2.1h-6.3a4.19 4.19 0 00-4.2 4v39.6a4.19 4.19 0 004 4.2h39.6a4.19 4.19 0 004.2-4v-6.5a2.05 2.05 0 012.1-2.1h1.4a2.05 2.05 0 012.1 2.1v7.7a8.39 8.39 0 01-8.4 8.4H28.9a8.39 8.39 0 01-8.4-8.4V28.9a8.39 8.39 0 018.4-8.4z" fill-rule="evenodd"${3}/><path d="M67.8 49.2l3.8-3.8a1.3 1.3 0 000-1.9L56.2 28a1.3 1.3 0 00-1.9 0l-3.8 3.8a1.3 1.3 0 000 1.9L66 49.2a1.19 1.19 0 001.8 0zM76.5 40.5l1.9-1.9a1.3 1.3 0 000-1.9L63 21.2a1.3 1.3 0 00-1.9 0l-1.9 1.9a1.3 1.3 0 000 1.9l15.5 15.5a1.26 1.26 0 001.8 0zM63.4 53.6a1.23 1.23 0 00.1-1.9L48 36.2a1.3 1.3 0 00-1.9 0l-.1.1a1.3 1.3 0 000 1.9l15.5 15.5a1.31 1.31 0 001.9-.1zM57.9 59l.9-.9a1.3 1.3 0 000-1.9L43.4 40.7a1.3 1.3 0 00-1.9 0l-.9.9a1.3 1.3 0 000 1.9L56.1 59a1.12 1.12 0 001.8 0zM49.6 67.4l3.8-3.8a1.3 1.3 0 000-1.9L38 46.2a1.3 1.3 0 00-1.9 0L32.3 50a1.3 1.3 0 000 1.9l15.5 15.5a1.27 1.27 0 001.8 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5dvpdl3ei2k";
freezeTemplate(tmpl);