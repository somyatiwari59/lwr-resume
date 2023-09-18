import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./qualifications.css";

import _implicitScopedStylesheets from "./qualifications.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M18.37 35.92a.4.4 0 01-.31.19h-1.45a.39.39 0 01-.33-.19.35.35 0 010-.37L26.7 16.43a.42.42 0 01.31-.18h1.55a.38.38 0 01.18.51zM16.32 19.24a2.1 2.1 0 11-2.09 2.09 2.09 2.09 0 012.09-2.09m0-2.79a4.88 4.88 0 104.87 4.89 4.89 4.89 0 00-4.87-4.89zM47.15 26a1.34 1.34 0 00-1 .43L32.62 41.36a.44.44 0 01-.33.15.43.43 0 01-.31-.13l-4.67-4.6a1.33 1.33 0 00-1.86 0l-1.84 1.87a1.3 1.3 0 000 1.85l7.27 7.16a2.2 2.2 0 003.15-.09L50.06 30a1.3 1.3 0 00-.06-1.89l-2-1.77a1.3 1.3 0 00-.85-.34z"${3}/><path d="M43.27 24.43l-1.65 1.81-1-1.2-.34-.41-2-2.35a7.35 7.35 0 01-1.7-4.28l-.25-3.42a1.83 1.83 0 00-1.64-1.69l-3-.24a8.88 8.88 0 01-5.13-2.17l-2.28-2A1.78 1.78 0 0023.13 8a1.83 1.83 0 00-1.13.45l-2.5 2.09a8.31 8.31 0 01-4.76 1.94l-3.22.22a1.77 1.77 0 00-1.67 1.63l-.24 2.92a8.93 8.93 0 01-2.17 5.16l-2 2.26a1.79 1.79 0 000 2.34l2.15 2.58a7.94 7.94 0 011.82 4.57l.24 3.29a1.79 1.79 0 001.64 1.68l3 .26a8.93 8.93 0 015.09 2.18l2.27 2 .12.09 2.7 2.65a4.38 4.38 0 01-1.63.32 4.43 4.43 0 01-2.91-1.08l-2.28-2A6.15 6.15 0 0014.07 42l-3-.27a4.42 4.42 0 01-4-4.1l-.23-3.3a5.41 5.41 0 00-1.23-3.07l-2.17-2.57A4.39 4.39 0 013.49 23l2-2.28A6.36 6.36 0 007 17l.24-2.93a4.4 4.4 0 014.1-4l3.21-.23a5.65 5.65 0 003.25-1.31l2.48-2.08A4.41 4.41 0 0126 6.5l2.28 2a6.35 6.35 0 003.64 1.5l3 .23a4.42 4.42 0 014 4.11l.25 3.43a4.81 4.81 0 001.13 2.79l2.24 2.69a4 4 0 01.73 1.18z"${3}/><path d="M26.39 32.91a4.78 4.78 0 013.37 1.38L31 35.47a4.88 4.88 0 002.76-4.39 4.87 4.87 0 00-4.87-4.87A4.89 4.89 0 0024 31.08a4.81 4.81 0 00.54 2.21 4.83 4.83 0 011.85-.38zm.37-1.84a2.1 2.1 0 112.1 2.1 2.08 2.08 0 01-2.1-2.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5m5sj02geo6";
freezeTemplate(tmpl);
