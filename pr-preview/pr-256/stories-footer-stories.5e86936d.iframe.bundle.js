"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[105],{"./node_modules/@tabler/icons-react/dist/esm/icons/IconExternalLink.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconExternalLink});var IconExternalLink=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]])},"./src/stories/footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_regels_overheid_nl_regels_overheid_nl_apps_web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_regels_overheid_nl_regels_overheid_nl_apps_web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Footer",component:__webpack_require__("./src/components/footer.tsx").$};var Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/footer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Footer});var react=__webpack_require__("./node_modules/react/index.js"),notification=__webpack_require__("./src/components/notification.tsx"),IconExternalLink=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconExternalLink.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);const package_namespaceObject_i8="1.21.0";var __jsx=react.createElement,FooterLink=function FooterLink(_ref){var children=_ref.children,href=_ref.href,isBlank=_ref.isBlank,LinkComponent=!href.startsWith("/")||isBlank?"a":link_default();return __jsx("li",{className:"first:mt-0 mt-4"},__jsx(LinkComponent,{href,className:"text-base flex gap-x-4 text-primary-dark items-center"},__jsx("span",null,">"),children,isBlank&&__jsx(IconExternalLink.Z,{size:18})))};FooterLink.displayName="FooterLink";var Footer=function Footer(){return __jsx("div",{className:"w-full bg-primary-lighter border-t-primary-light border-t-8 py-6 mt-auto"},__jsx("div",{className:"container"},__jsx("div",{className:"flex flex-col sm:flex-row-reverse sm:justify-between sm:items-start lg:flex-col lg:items-center lg:gap-y-6"},__jsx(notification.P,{severity:"warning",className:"mb-6 sm:w-[300px] lg:w-[664px]"},"Deze website heeft nog géén officiele status. Dit is work in progress. Heb je vragen of wil je met ons samenwerken? Neem dan contact met"," ",__jsx("a",{href:"mailto:steven.gort@ictu.nl",className:"underline"},"Steven Gort"),"."),__jsx("div",{className:"flex flex-col gap-y-12 lg:flex-row lg:justify-center lg:gap-x-20"},__jsx("ul",null,__jsx(FooterLink,{href:"/over"},"Over deze website"),__jsx(FooterLink,{href:"mailto:steven.gort@ictu.nl"},"Contact"),__jsx(FooterLink,{href:"https://github.com/MinBZK/regels.overheid.nl",isBlank:!0},"Github"),__jsx(FooterLink,{href:"https://regels.dexcat.nl/"},"Regelregister")),__jsx("ul",null,__jsx(FooterLink,{href:"https://regels.overheid.nl/docs"},"Documentatie "),__jsx(FooterLink,{href:"#"},"Privacy en cookies"),__jsx(FooterLink,{href:"#"},"Toegankelijkheid"),__jsx(FooterLink,{href:"/sitemap.xml"},"Sitemap")),__jsx("ul",null,__jsx(FooterLink,{href:"/methoden"},"Methoden"),__jsx(FooterLink,{href:"https://www.overheid.nl/"},"Overheid.nl"),__jsx(FooterLink,{href:"https://linkeddata.overheid.nl/front/portal/"},"Linked Data Overheid"),__jsx(FooterLink,{href:"https://puc.overheid.nl/mijno"},"PUC Open Data")),__jsx("ul",null,__jsx(FooterLink,{href:"https://mijn.overheid.nl/"},"MijnOverheid.nl"),__jsx(FooterLink,{href:"https://www.rijksoverheid.nl/",isBlank:!0},"Rijksoverheid.nl"),__jsx(FooterLink,{href:"https://ondernemersplein.kvk.nl/",isBlank:!0},"Ondernemersplein"),__jsx(FooterLink,{href:"https://www.werkenbijdeoverheid.nl/",isBlank:!0},"Werkenbijdeoverheid")))),__jsx("p",{className:"text-base text-center sm:w-100% mt-12 text-primary-dark lg:mt-8"},"Onze website is voortdurend in ontwikkeling. Laatste"," ",__jsx("a",{className:"underline font-bold",href:"https://github.com/MinBZK/regels.overheid.nl/releases"},"live-versie v",package_namespaceObject_i8))))};Footer.displayName="Footer",Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/footer.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"src/components/footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/notification.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Notification});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconInfoCircle.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconExclamationCircle.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconCircleCheck.js"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconAlertTriangle.js"),clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,notificationVariantsMapping={error:"bg-error-lighter border-error-light",info:"bg-primary-lighter border-primary-light",success:"bg-success-lighter border-success-light",warning:"bg-warning-lighter border-warning-light"},iconVariantsMapping={error:"text-error-dark",info:"text-primary-dark",success:"text-success-dark",warning:"text-warning-dark"},iconMapping={info:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.Z,error:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.Z,success:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.Z,warning:_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.Z},IconMapping=function IconMapping(_ref){var severity=_ref.severity,className=_ref.className;return __jsx(iconMapping[severity],{size:16,className})};IconMapping.displayName="IconMapping";var Notification=function Notification(_ref2){var _ref2$severity=_ref2.severity,severity=void 0===_ref2$severity?"info":_ref2$severity,children=_ref2.children,className=_ref2.className;return __jsx("div",{className:"".concat(notificationVariantsMapping[severity]," p-6 border-2 text-base flex ").concat((0,clsx__WEBPACK_IMPORTED_MODULE_5__.Z)(className))},__jsx("div",{className:"w-8 shrink-0"},__jsx(IconMapping,{severity,className:"".concat(iconVariantsMapping[severity]," text-xs mt-1")})),__jsx("div",null,children))};Notification.displayName="Notification",Notification.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{severity:{defaultValue:{value:"'info'",computed:!1},required:!1}}};try{Notification.displayName="Notification",Notification.__docgenInfo={description:"",displayName:"Notification",props:{severity:{defaultValue:{value:"info"},description:"",name:"severity",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/notification.tsx#Notification"]={docgenInfo:Notification.__docgenInfo,name:"Notification",path:"src/components/notification.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);