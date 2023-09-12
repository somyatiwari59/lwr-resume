import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sort_policy.css";

import _implicitScopedStylesheets from "./sort_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M12.84 2H8a6 6 0 00-6 6v3.2a6 6 0 006 6h4.84a6 6 0 006-6V8a6 6 0 00-6-6zm-1.61 10.4h-1.6a2.8 2.8 0 010-5.6h1.6a2.8 2.8 0 010 5.6zM29.7 17.2h4.81a6 6 0 006-6V8a6 6 0 00-6-6H29.7a6 6 0 00-6 6v3.2a6 6 0 006 6zm1.6-10.4h1.61a2.8 2.8 0 110 5.6H31.3a2.8 2.8 0 010-5.6zM12.84 22H8a6 6 0 00-6 6v3.2a6 6 0 006 6h4.84a6 6 0 006-6V28a6 6 0 00-6-6zm-1.61 10.4h-1.6a2.8 2.8 0 010-5.6h1.6a2.8 2.8 0 010 5.6zM49.83 42.54l-1.17-1.13a.82.82 0 00-1.17 0l-2 1.92a.54.54 0 01-.76 0 .55.55 0 01-.16-.38V34a.87.87 0 00-.83-.83H42a.89.89 0 00-.84.83v8.9a.53.53 0 01-.51.55.54.54 0 01-.41-.17l-2-1.92a.82.82 0 00-1.16 0L36 42.49a.74.74 0 00-.08 1 .6.6 0 00.08.08l6.28 6.14a.82.82 0 001.16 0l6.33-6.14a.76.76 0 00.06-1.03zM36.63 30.65l1-1.13a.74.74 0 00.08-1l-.08-.08-6.28-6.14a.82.82 0 00-1.16 0l-6.28 6.14a.74.74 0 00-.08 1l.08.08 1.17 1.13a.82.82 0 001.16 0l2-1.92a.55.55 0 01.78 0 .58.58 0 01.14.34V38a.88.88 0 00.84.83h1.68a.88.88 0 00.83-.83v-8.9a.54.54 0 01.92-.38l2 1.92a.82.82 0 001.2.01z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3m03mn6vj0d";
freezeTemplate(tmpl);
