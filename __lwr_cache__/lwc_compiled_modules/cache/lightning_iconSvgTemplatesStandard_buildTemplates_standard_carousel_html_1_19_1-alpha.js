import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./carousel.css";

import _implicitScopedStylesheets from "./carousel.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M76.26 37.7h-2.69v26.93h2.69A3.75 3.75 0 0080 60.89V41.44a3.75 3.75 0 00-3.74-3.74zM20 41.44v19.45a3.75 3.75 0 003.74 3.74h2.69V37.7h-2.69A3.75 3.75 0 0020 41.44zM66.46 34.33H33.54a3.75 3.75 0 00-3.74 3.74v26.19A3.75 3.75 0 0033.54 68h32.92a3.75 3.75 0 003.74-3.74V38.07a3.75 3.75 0 00-3.74-3.74zm-5.57 26.94H37.77a1.21 1.21 0 01-1-1.83l7-12.19a.75.75 0 011.35 0l4.23 7.26a.81.81 0 001.35.07l3.44-4.94a.8.8 0 011.35 0l6.28 10a1 1 0 01-.88 1.63zm-.6-14.36a3.18 3.18 0 113.18-3.18 3.18 3.18 0 01-3.18 3.17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3hebvsf6ahe";
freezeTemplate(tmpl);
