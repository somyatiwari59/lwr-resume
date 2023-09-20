import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer.css";

import _implicitScopedStylesheets from "./customer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><circle cx="30.58" cy="48.03" r="1.97"${3}/><circle cx="40.22" cy="48.03" r="1.97"${3}/><path d="M30.32 38.84h11.85c.37.02.69-.25.72-.62l2.14-7.61c.13-.4-.1-.83-.5-.95-.07-.02-.15-.03-.23-.04H26.01l-.27-1.15c-.16-.51-.63-.87-1.17-.89h-1.93c-.66 0-1.21.5-1.27 1.15-.06.63.4 1.2 1.03 1.26H23.68l1.04 3.49 2.69 9.19c.16.51.62.86 1.15.89h13.91c.64 0 1.18-.46 1.27-1.09.07-.63-.38-1.19-1.01-1.26H30.29c-.51 0-.98-.32-1.17-.8v-.09c-.18-.61.16-1.25.77-1.44.13-.04.26-.05.39-.05z"${3}/><path d="M21.39 34.56l-.35-1.27c-.77-.25-1.45-.72-1.97-1.34a4.738 4.738 0 01.48-6.69c.88-.77 2.02-1.18 3.19-1.16h1.86a4.82 4.82 0 013.94 1.99h5.07c-1.52-1-3.13-1.85-4.82-2.54-2.85-1.15-3.21-2.32-3.21-3.47.15-1.23.75-2.36 1.69-3.18a8.035 8.035 0 002.54-6.24c0-4.64-2.85-8.66-7.85-8.66s-7.85 4.02-7.85 8.66c-.03 2.34.89 4.58 2.54 6.24 1 .78 1.64 1.95 1.75 3.22 0 1.15-.44 2.32-3.21 3.47-4.29 1.7-8.22 3.8-8.3 7.61a4.5 4.5 0 004.2 4.73h10.52l-.22-1.37z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-61l99brqa7n";
freezeTemplate(tmpl);