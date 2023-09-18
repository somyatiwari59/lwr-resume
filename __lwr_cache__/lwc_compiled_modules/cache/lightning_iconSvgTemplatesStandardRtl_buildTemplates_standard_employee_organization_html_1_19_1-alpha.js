import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_organization.css";

import _implicitScopedStylesheets from "./employee_organization.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><circle cx="63.3" cy="47.6" r="10.7"${3}/><path d="M63.6 60.3h-.8a16.43 16.43 0 00-16.1 13.9c0 .7.2 2.4 2.7 2.4h27.2c2.5 0 2.7-1.5 2.7-2.4a15.65 15.65 0 00-15.7-13.9zM48.6 58.3c.4-.4.1-.7.1-.7a17.94 17.94 0 01-3.1-10 17.18 17.18 0 013.2-10.2.1.1 0 01.1-.1 1.76 1.76 0 00.4-1.1V25.4a2.15 2.15 0 00-2-2H22.5a2.18 2.18 0 00-2 2.1v46.2H40a24.12 24.12 0 018.6-13.4zm-17 7.7a2.18 2.18 0 01-2.1 2.1h-2.1a2.18 2.18 0 01-2.1-2.1v-2.1a2.18 2.18 0 012.1-2.1h2.1a2.18 2.18 0 012.1 2.1zm0-10.5a2.18 2.18 0 01-2.1 2.1h-2.1a2.18 2.18 0 01-2.1-2.1v-2.1a2.18 2.18 0 012.1-2.1h2.1a2.18 2.18 0 012.1 2.1zm0-10.5a2.18 2.18 0 01-2.1 2.1h-2.1a2.18 2.18 0 01-2.1-2.1v-2.1a2.18 2.18 0 012.1-2.1h2.1a2.18 2.18 0 012.1 2.1zm0-10.5a2.18 2.18 0 01-2.1 2.1h-2.1a2.18 2.18 0 01-2.1-2.1v-2.1a2.18 2.18 0 012.1-2.1h2.1a2.18 2.18 0 012.1 2.1zm11.9 21a2.18 2.18 0 01-2.1 2.1h-2.1a2.18 2.18 0 01-2.1-2.1v-2.1a2.18 2.18 0 012.1-2.1h2.1a2.18 2.18 0 012.1 2.1zm0-10.5a2.18 2.18 0 01-2.1 2.1h-2.1a2.18 2.18 0 01-2.1-2.1v-2.1a2.18 2.18 0 012.1-2.1h2.1a2.18 2.18 0 012.1 2.1zm0-10.5a2.18 2.18 0 01-2.1 2.1h-2.1a2.18 2.18 0 01-2.1-2.1v-2.1a2.18 2.18 0 012.1-2.1h2.1a2.18 2.18 0 012.1 2.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5gvvs9p5k0h";
freezeTemplate(tmpl);
