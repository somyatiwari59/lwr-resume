import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./swarm_request.css";

import _implicitScopedStylesheets from "./swarm_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><circle cx="41.37" cy="26.44" r="6.32"${3}/><circle cx="58.63" cy="26.43" r="6.32"${3}/><circle cx="28.4" cy="41.16" r="8"${3}/><circle cx="71.81" cy="41.16" r="8"${3}/><circle cx="50.11" cy="45.73" r="8"${3}/><path d="M59.14 80a4.18 4.18 0 003.2-1.37 4.57 4.57 0 001.37-3.2V65.15a6.88 6.88 0 00-6.86-6.86h-13.7a6.88 6.88 0 00-6.86 6.86v10.28A4.68 4.68 0 0040.86 80zM29.32 75.43V65.15a13.41 13.41 0 013.89-9.48 1.18 1.18 0 000-1.67 1.15 1.15 0 00-.77-.33h-11a6.88 6.88 0 00-6.86 6.86v10.33a4.68 4.68 0 004.57 4.57zM80.85 75.43a4.18 4.18 0 003.2-1.37 4.57 4.57 0 001.37-3.2V60.58a6.88 6.88 0 00-6.86-6.86h-11a1.14 1.14 0 00-.8 2 13.68 13.68 0 013.89 9.48v10.23z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6nep3v0ljoe";
freezeTemplate(tmpl);
