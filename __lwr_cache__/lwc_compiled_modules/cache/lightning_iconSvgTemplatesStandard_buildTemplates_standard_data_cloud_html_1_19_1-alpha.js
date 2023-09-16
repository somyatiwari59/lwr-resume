import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_cloud.css";

import _implicitScopedStylesheets from "./data_cloud.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79.97 29.13c-.15-1.81-1-4.49-4.17-7.01-2.73-2.17-7.04-2.35-9.27-1.94-.55.1-2.97.76-4.82 2.14-3.57 2.65-5.22 6.14-6.36 9.19-1.04 2.76-1.71 7.73-2.14 11.25-1.05-.17-2.12-.27-3.21-.27s-2.14.1-3.18.26c-.76-3.59-3.33-13.14-9.84-19.19-2.71-2.37-5.44-3.57-8.11-3.57-4.32 0-7.27 3.19-8.29 6.36-2.23 6.92 2.53 12.23 6.61 13.8 3.66 1.44 4.2 1.96 4.94 2.7.2.2.41.41.65.63 1.15 1.05 2.2 2.8 3.03 4.52-5.1 4.4-8.3 10.77-8.3 16.6 0 9.63 8.41 15.38 22.5 15.38s22.5-5.75 22.5-15.38c0-5.9-3.28-12.35-8.47-16.75l.48-1.02c1.85-3.27 3.97-6.83 5.56-9.36.95.13 1.79.14 2.58.04 2.45-.32 4.24-1.14 5.45-2.49 1.36-1.52 2.06-3.73 1.86-5.9zm-5.07 3.03c-.49.56-1.41.91-2.81 1.09-.46.06-.98.04-1.64-.06-.25-.04-.51-.1-.8-.18-.91-.27-1.89.1-2.4.89-1.7 2.62-4.26 6.89-6.52 10.88-.02.04-.05.09-.08.14l-.2.43c-.99-.57-2-1.05-3.07-1.47.02-.15.04-.35.07-.6.22-1.9.92-7.67 1.9-10.26 1.34-3.56 2.76-5.67 4.92-7.26 1.09-.81 2.72-1.3 3.04-1.36 1.71-.32 4.52.04 5.82 1.08 1.57 1.25 2.44 2.6 2.56 4.02.11 1.3-.45 2.29-.79 2.68h.01zM49.99 75.68c-4.27 0-18.21-.8-18.21-11.1 0-8.08 8.12-17.84 18.21-17.84S68.2 56.5 68.2 64.58c0 10.29-13.94 11.1-18.21 11.1zM35.63 40.3c-.19-.18-.35-.34-.51-.49-1.19-1.18-2.21-2.01-6.42-3.66-1.98-.76-5.57-3.82-4.07-8.48.5-1.56 1.91-3.39 4.22-3.39 1.59 0 3.42.87 5.25 2.46 5.68 5.27 7.95 14.2 8.56 17.12-1.16.44-2.27.97-3.33 1.61-.96-1.86-2.2-3.8-3.69-5.15h-.01z"${3}/><path d="M40.34 66.07c1.18 0 2.14-1.44 2.14-3.21s-.96-3.21-2.14-3.21-2.14 1.44-2.14 3.21.96 3.21 2.14 3.21zM59.63 66.07c1.18 0 2.14-1.44 2.14-3.21s-.96-3.21-2.14-3.21-2.14 1.44-2.14 3.21.96 3.21 2.14 3.21zM49.99 65c-1.48 0-2.68.96-2.68 2.14s1.2 2.14 2.68 2.14 2.68-.96 2.68-2.14S51.47 65 49.99 65z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-50sjfmt050r";
freezeTemplate(tmpl);