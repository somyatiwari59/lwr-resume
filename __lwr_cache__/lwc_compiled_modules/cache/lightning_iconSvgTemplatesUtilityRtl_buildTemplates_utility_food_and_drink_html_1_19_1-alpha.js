import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./food_and_drink.css";

import _implicitScopedStylesheets from "./food_and_drink.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M40.881 24C39.937 31.865 33.526 37 28 37H16.002c-5.997 0-13-5.99-13-15V8a2 2 0 012-2H44a6 6 0 016 6v6a6 6 0 01-6 6h-3.119zM39 6zm1.593 34c.74 0 1.407.675 1.407 1.425v.075c0 2.475-2 4.5-4.444 4.5H6.444C4 46 2 43.975 2 41.5v-.075C2 40.675 2.667 40 3.407 40h37.186zM41 11v8h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-342s69396j2";
freezeTemplate(tmpl);
