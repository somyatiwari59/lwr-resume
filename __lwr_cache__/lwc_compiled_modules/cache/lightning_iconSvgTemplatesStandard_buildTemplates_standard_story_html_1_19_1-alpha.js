import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./story.css";

import _implicitScopedStylesheets from "./story.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.98 63.05c1.14 0 2.07-1.34 2.07-3s-.93-3-2.07-3-2.07 1.34-2.07 3 .93 3 2.07 3zM56.67 63.05c1.14 0 2.07-1.34 2.07-3s-.93-3-2.07-3-2.07 1.34-2.07 3 .93 3 2.07 3zM60.25 69.07c-1-.87-3.45-2.73-6.77-3.53-.54.82-1.64 1.39-2.92 1.39s-2.45-.6-2.97-1.46c-2.03.44-4.21 1.41-6.46 3.17-.56.44-.93 1.12-.93 1.86 0 4.89 5.06.94 10.12 1.02 5.17.08 10.6 3.49 10.6-.93.03-.58-.24-1.14-.66-1.51z"${3}/><path d="M42.14 73.38c-.59 0-1.09-.12-1.5-.44-.59-.46-.88-1.25-.88-2.44 0-.84.41-1.66 1.1-2.2 2.13-1.66 4.36-2.75 6.63-3.25.18-.04.36.04.46.2.46.76 1.48 1.26 2.6 1.26s2.09-.47 2.56-1.19c.1-.15.28-.22.46-.18 3.47.83 6.02 2.81 6.95 3.62.55.47.85 1.17.81 1.86 0 1-.27 1.72-.82 2.17-1.09.88-3.04.44-5.29-.07-1.53-.34-3.25-.73-4.92-.76-1.72-.03-3.44.43-4.97.83-1.24.32-2.31.61-3.2.61v-.02zm5.27-7.43c-2.05.49-4.07 1.51-6.01 3.02-.48.37-.77.94-.77 1.52 0 .9.18 1.48.54 1.77.69.54 2.2.14 3.95-.32 1.58-.41 3.37-.89 5.2-.86 1.75.03 3.53.43 5.09.78 2.04.46 3.79.85 4.56.23.34-.27.5-.77.5-1.52.02-.45-.17-.89-.52-1.19-.86-.75-3.18-2.54-6.32-3.36-.68.83-1.83 1.33-3.09 1.33s-2.49-.53-3.16-1.41h.03z"${3}/><path d="M35.63 70.62c-4.18 2.44-8 .36-9.45-.71 2.44-1.68 3.28-2.27 3.39-3.52-3.31.12-5.74-.16-8.94-5.58 3.33-.98 2.58-1.73 8.03-3.49-.15-.95-4.4-.33-5.9-1.85 1.3-.96 2.7-5.02 4.18-5.68-1.79.02-3.58.04-5.36.07 1.04-3.57 4.23-6.73 7.39-8.68-.49-.64-1.86-1.21-2.51-1.69 2.27-2.16 7.84-3.69 10.16-1.92-.36-5.69 4.37-7.23 4.33-11.32 2.42.74 5.97 3.96 6.51 6.44 1.57-1.96 6.61-3.92 9.69-4.7 1.14.55 1.87 1.71 2.2 2.93s.31 4.08.28 5.34c8.19-3.33 12.91.81 14.56 2.99-.46.85-1.95 2.18-2.76 2.77 3.1 1.73 4.91 3.58 5.76 6.7-1.99.58-3.26.79-5.28 1.59.93 1.19 3.05 1.75 4.55 2.36-.95 3.12-2.91 2.38-4.38 2.67 2.13 4.13 5 4.29 7.29 4.71-1.37 3.91-5.16 7.16-9.33 7.07.26.73 1.25 2.14 2.02 2.25-2.3 2.48-4.26 2.3-7.1 1.72 4.66-8.71.9-17.96-.84-20.36-.27.99-.71 1.92-2.18 2.08-2.22-3.65-8.34-6.81-12.5-7.73-.35 2.12.28 4.38 1.67 6.02-2.22-.03-7.24-1.77-8.91-3.25-6.04 4.6-11.52 10.01-6.57 22.76z"${3}/><path d="M31.56 72.4c-2.78 0-4.95-1.39-5.75-1.97-.16-.12-.26-.31-.26-.52s.1-.4.27-.51c1.73-1.19 2.54-1.77 2.89-2.35-3.04 0-5.57-.73-8.63-5.91a.596.596 0 01-.04-.55c.07-.18.22-.32.41-.37 1.43-.42 2.04-.78 2.82-1.24.75-.44 1.65-.97 3.49-1.66-.09 0-.19-.02-.27-.03-1.43-.17-3.2-.37-4.17-1.36a.613.613 0 01-.18-.5c.02-.18.11-.35.26-.46.48-.36 1.08-1.4 1.65-2.41.43-.76.85-1.5 1.29-2.1l-3.76.05c-.19 0-.39-.09-.51-.25s-.16-.37-.1-.56c.9-3.08 3.47-6.24 6.95-8.58-.27-.18-.6-.36-.88-.52-.35-.2-.69-.39-.95-.58a.627.627 0 01-.06-.97c2.07-1.96 6.99-3.6 9.95-2.52.13-2.72 1.38-4.47 2.51-6.05.99-1.38 1.84-2.58 1.83-4.21 0-.2.09-.39.25-.51s.37-.16.56-.1c2.3.71 5.46 3.38 6.59 5.89 2.22-1.87 6.66-3.5 9.26-4.15.14-.04.3-.02.43.04 1.19.58 2.12 1.79 2.54 3.34.27.99.33 2.9.32 4.59 8.57-3.04 13.18 1.89 14.42 3.53.15.2.17.47.05.69-.41.75-1.42 1.72-2.2 2.38 2.93 1.79 4.47 3.76 5.25 6.61.09.33-.1.68-.43.78-.65.19-1.21.34-1.76.48-.85.22-1.61.43-2.5.73.71.47 1.69.83 2.58 1.16.35.13.69.25 1 .38.3.12.46.46.37.77-.88 2.87-2.64 2.97-3.95 3.03 1.73 2.75 3.79 3.1 5.8 3.44.19.03.39.07.57.1s.34.15.43.3c.09.16.11.35.05.53-1.42 4.07-5.06 7.05-8.9 7.45.36.52.83 1 1.08 1.04.23.03.43.19.51.41.08.22.03.47-.13.64-2.52 2.72-4.78 2.5-7.69 1.91-.2-.04-.36-.17-.45-.35s-.08-.39.02-.57c4.1-7.66 1.43-15.58-.18-18.67-.41.65-1.06 1.18-2.22 1.31a.633.633 0 01-.61-.3c-1.96-3.22-7.28-6.18-11.42-7.27-.1 1.74.48 3.5 1.6 4.83a.63.63 0 01-.48 1.04c-2.14-.02-6.81-1.56-8.91-3.08-5.89 4.55-10.62 9.74-5.97 21.73.11.29 0 .62-.27.78-1.55.9-3.04 1.23-4.39 1.23h.02zm-4.24-2.5c1.47.87 4.35 2.02 7.53.43-4.72-12.69.85-18.31 6.97-22.97.24-.18.57-.17.8.03 1.29 1.15 4.83 2.47 7.16 2.93a8.186 8.186 0 01-.97-5.33c.03-.17.13-.32.27-.42.14-.1.32-.13.49-.09 2.23.49 4.84 1.55 7.16 2.91 1.76 1.03 4.11 2.67 5.51 4.74.75-.2 1.04-.72 1.27-1.55.06-.23.26-.41.5-.45s.48.05.62.25c2.12 2.94 5.25 11.96 1.27 20.27 2.14.38 3.54.3 5.1-1.1-.77-.63-1.39-1.7-1.56-2.2-.07-.2-.03-.41.09-.58.12-.17.31-.26.52-.26 3.45.07 6.9-2.39 8.44-5.95-2.23-.38-4.94-.95-6.98-4.91-.09-.18-.09-.39 0-.57s.25-.31.45-.35c.35-.07.72-.09 1.07-.1 1.11-.05 2-.09 2.62-1.58-.13-.05-.26-.1-.4-.15-1.4-.52-2.99-1.1-3.85-2.19a.655.655 0 01-.11-.56c.05-.19.19-.35.38-.42 1.41-.55 2.48-.83 3.61-1.13.36-.09.72-.19 1.11-.3-.81-2.44-2.34-4.08-5.28-5.71-.19-.1-.31-.3-.32-.52 0-.22.09-.43.26-.55.7-.51 1.81-1.5 2.35-2.22-1.48-1.75-5.81-5.58-13.55-2.44a.64.64 0 01-.6-.06.63.63 0 01-.27-.54c.05-2.49-.04-4.37-.26-5.17-.3-1.1-.9-1.97-1.68-2.42-3.44.9-7.82 2.81-9.11 4.42-.15.19-.4.27-.64.22a.624.624 0 01-.47-.48c-.37-1.7-2.92-4.56-5.32-5.68-.24 1.6-1.13 2.85-2 4.06-1.2 1.68-2.45 3.42-2.26 6.32.02.25-.12.48-.33.6-.22.12-.48.1-.68-.05-1.79-1.37-6.26-.4-8.69 1.34.03.02.07.04.1.06.7.39 1.42.8 1.82 1.32a.63.63 0 01-.17.92c-3.25 2.02-5.75 4.77-6.83 7.5l4.47-.06a.633.633 0 01.27 1.21c-.61.28-1.42 1.68-2.05 2.8-.48.83-.93 1.64-1.4 2.21.77.38 1.92.51 2.89.63 1.4.16 2.51.3 2.66 1.2.05.31-.13.61-.43.7-2.92.95-4 1.58-4.95 2.13-.67.39-1.26.74-2.33 1.11 2.8 4.44 4.9 4.71 7.96 4.59.18 0 .36.06.48.2.12.13.19.31.17.49-.12 1.39-.95 2.1-2.89 3.45v.02z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-fp7bvph4q0";
freezeTemplate(tmpl);