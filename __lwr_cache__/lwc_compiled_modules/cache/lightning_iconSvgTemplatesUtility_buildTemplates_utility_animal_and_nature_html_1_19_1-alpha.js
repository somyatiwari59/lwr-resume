import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./animal_and_nature.css";

import _implicitScopedStylesheets from "./animal_and_nature.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M17.39 4.603c2.698-1.014 5.568-1.52 8.61-1.52s5.912.506 8.61 1.52a5 5 0 018.84 4.678C44.69 10.32 45.54 13.56 46 19c.394 3.008 2.987 12.067 3 14 .052 7.96-7.614 13.626-23 17-15.333-3.294-23-8.96-23-17 .047-2.053 2.5-10.9 3-14 .603-5.289 1.47-8.495 2.602-9.619a5 5 0 018.787-4.778zm3.578 18.092a4 4 0 00-2.795 4.066l.39 6.253a7.451 7.451 0 0014.874 0l.382-6.119A4 4 0 0031 22.822 18.168 18.168 0 0025.646 22c-1.641 0-3.2.232-4.678.695zM36 23c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4zm-20 0c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4zm13.074 4.709c-1.768 2.03-4.624 2.022-6.347-.018-1.723-2.04-.277-3.7 3.214-3.691 3.49.01 4.9 1.679 3.133 3.709z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4s9cjbd3fon";
freezeTemplate(tmpl);
