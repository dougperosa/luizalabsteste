(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/oCc":function(t,e,r){"use strict";r.d(e,"b",function(){return c}),r.d(e,"a",function(){return o});var a=r("ofXK"),n=r("3Pt+"),i=r("fXoL"),s=function(){return function(){this.type="alfa",this.decimal=2,this.decimalCaracter=",",this.userCaracters=!1,this.numberAndTousand=!1,this.moneyInitHasInt=!0}}(),o=function(){function t(t,e){this.controlContainer=t,this.elementRef=e,this.brmasker=new s}return t.prototype.inputKeyup=function(t){var e=this.returnValue(t.target.value);this.setValueInFormControl(e)},t.prototype.onNgModelChange=function(t){var e=this.returnValue(t);e&&this.setValueInFormControl(e,!1)},t.prototype.ngOnInit=function(){this.brmasker.type||(this.brmasker.type="all"),this.brmasker.decimal||(this.brmasker.decimal=2),void 0===this.brmasker.moneyInitHasInt&&(this.brmasker.moneyInitHasInt=!0),this.brmasker.decimalCaracter||(this.brmasker.decimalCaracter=","),this.controlContainer?this.formControlName?this.brmasker.form=this.controlContainer.control.get(this.formControlName):console.warn("Missing FormControlName directive from host element of the component"):console.warn("Can't find parent FormGroup directive"),this.initialValue()},t.prototype.initialValue=function(){var t=this.returnValue(this.elementRef.nativeElement.value);this.setValueInFormControl(t)},t.prototype.verifyFormControl=function(){return this.brmasker.form instanceof n.a},t.prototype.setValueInFormControl=function(t,e){this.verifyFormControl()?(this.brmasker.form.setValue(t,{emitViewToModelChange:e}),this.brmasker.form.updateValueAndValidity()):this.elementRef.nativeElement.value=t},t.prototype.writeCreateValue=function(t,e){return void 0===e&&(e=new s),t&&e.phone?t.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi,"$1 ($2) $3-$4"):t&&e.phoneNotDDD?this.phoneNotDDDMask(t):t&&e.money?this.writeValueMoney(t,e):t&&e.person?this.writeValuePerson(t):t&&e.percent?this.writeValuePercent(t):this.brmasker.userCaracters?this.usingSpecialCharacters(t,this.brmasker.mask,this.brmasker.len):t&&e.mask?(this.brmasker.mask=e.mask,e.len&&(this.brmasker.len=e.len),this.onInput(t)):t},t.prototype.writeValuePercent=function(t){return t.replace(/\D/gi,""),t.replace(/%/gi,""),t.replace(/([0-9]{0})$/gi,"%$1")},t.prototype.writeValuePerson=function(t){return t.length<=11?t.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi,"$1.$2.$3-$4"):t.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi,"$1.$2.$3/$4-$5")},t.prototype.writeValueMoney=function(t,e){return void 0===e&&(e=new s),this.moneyMask(t,e)},t.prototype.returnValue=function(t){if(this.brmasker.mask||(this.brmasker.mask=""),t){var e=t;return"alfa"===this.brmasker.type&&(e=e.replace(/\d/gi,"")),"num"===this.brmasker.type&&(e=e.replace(/\D/gi,"")),this.brmasker.money?this.moneyMask(this.onInput(e),this.brmasker):this.brmasker.phone?this.phoneMask(e):this.brmasker.phoneNotDDD?this.phoneNotDDDMask(e):this.brmasker.person?this.peapollMask(e):this.brmasker.percent?this.percentMask(e):this.brmasker.numberAndTousand?this.thousand(e):this.brmasker.userCaracters?this.usingSpecialCharacters(e,this.brmasker.mask,this.brmasker.len):this.onInput(e)}return""},t.prototype.applyCpfMask=function(t){return(t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d{1,2})$/gi,"$1-$2")},t.prototype.applyCnpjMask=function(t){return(t=(t=(t=(t=(t=t.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1/$2")).replace(/(\d{4})(\d{1,4})$/gi,"$1-$2")).replace(/(\d{2})(\d{1,2})$/gi,"$1$2")},t.prototype.percentMask=function(t){return t.replace(/\D/gi,"").replace(/%/gi,"").replace(/([0-9]{0})$/gi,"%$1")},t.prototype.phoneMask=function(t){var e=t;return e.length>14||11===e.length?(this.brmasker.len=15,this.brmasker.mask="(99) 99999-9999",e=(e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1 $2")).replace(/(\d{5})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")):(this.brmasker.len=14,this.brmasker.mask="(99) 9999-9999",e=(e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1 $2")).replace(/(\d{4})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")),this.onInput(e)},t.prototype.phoneNotDDDMask=function(t){var e=t;return e.length>9?(this.brmasker.len=10,this.brmasker.mask="99999-9999",e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{5})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")):(this.brmasker.len=9,this.brmasker.mask="9999-9999",e=(e=(e=e.replace(/\D/gi,"")).replace(/(\d{4})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")),this.onInput(e)},t.prototype.peapollMask=function(t){var e=t;return e.length>=14?14===e.length&&e.indexOf("-")>0?(this.brmasker.len=14,this.brmasker.mask="999.999.999-99",e=this.applyCpfMask(e)):(this.brmasker.len=18,this.brmasker.mask="99.999.999/9999-99",e=this.applyCnpjMask(e)):(this.brmasker.len=14,this.brmasker.mask="999.999.999-99",e=this.applyCpfMask(e)),this.onInput(e)},t.prototype.moneyMask=function(t,e){var r=e.decimal||this.brmasker.decimal;if(1===(t=t.replace(/\D/gi,"").replace(new RegExp("([0-9]{"+r+"})$","g"),e.decimalCaracter+"$1")).length&&!this.brmasker.moneyInitHasInt){var a=Array(r-1).fill(0);return"0"+e.decimalCaracter+a.join("")+t}return t.length===r+1?"0"+t:t.length>r+2&&"0"===t.charAt(0)?t.substr(1):(e.thousand&&t.length>Number(4)+Number(e.decimal)&&(t=t.replace(new RegExp("([0-9]{3})"+e.decimalCaracter+"([0-9]{"+e.decimal+"}$)","g"),e.thousand+"$1"+e.decimalCaracter+"$2")),e.thousand&&t.length>Number(8)+Number(e.decimal)&&(t=t.replace(new RegExp("([0-9]{3})"+e.thousand+"([0-9]{3})"+e.decimalCaracter+"([0-9]{"+e.decimal+"}$)","g"),e.thousand+"$1"+e.thousand+"$2"+e.decimalCaracter+"$3")),t)},t.prototype.onInput=function(t){return this.formatField(t,this.brmasker.mask,this.brmasker.len)},t.prototype.usingSpecialCharacters=function(t,e,r){r||(r=99999999999);for(var a=t.toString().replace(/\-|\.|\,| /gi,""),n=0,i="",s=a.length,o=0;o<s;o++)o<r&&("-"===e.charAt(o)||"."===e.charAt(o)||","===e.charAt(o)?(i+=e.charAt(o),s++):(i+=a.charAt(n),n++));return i},t.prototype.thousand=function(t){var e=t.replace(/\D/gi,"").toString().split("").reverse().join("").match(/\d{1,3}/g);if(e)return e.join(""+(this.brmasker.thousand||".")).split("").reverse().join("")},t.prototype.formatField=function(t,e,r){r||(r=99999999999);for(var a=t.toString().replace(/\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi,""),n=0,i="",s=a.length,o=0;o<s;o++)o<r&&("-"===e.charAt(o)||"."===e.charAt(o)||"/"===e.charAt(o)||"_"===e.charAt(o)||"("===e.charAt(o)||")"===e.charAt(o)||" "===e.charAt(o)||","===e.charAt(o)||"*"===e.charAt(o)||"+"===e.charAt(o)||"@"===e.charAt(o)||"#"===e.charAt(o)||":"===e.charAt(o)||"$"===e.charAt(o)||"&"===e.charAt(o)||"%"===e.charAt(o)?(i+=e.charAt(o),s++):(i+=a.charAt(n),n++));return i},t.\u0275fac=function(e){return new(e||t)(i.Jb(n.b,13),i.Jb(i.m))},t.\u0275dir=i.Eb({type:t,selectors:[["","brmasker",""]],hostBindings:function(t,e){1&t&&i.Tb("keyup",function(t){return e.inputKeyup(t)})("ngModelChange",function(t){return e.onNgModelChange(t)})},inputs:{brmasker:"brmasker",formControlName:"formControlName"}}),t.\u0275prov=i.Fb({token:t,factory:function(e){return t.\u0275fac(e)}}),t}(),c=function(){function t(){}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[a.c]]}),t}()},Gdn9:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var a=r("lJxs"),n=r("fXoL"),i=r("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.api="https://newluizalabsapi.herokuapp.com/"}readProducts(){return this.http.get(`${this.api}products`).pipe(Object(a.a)(t=>t))}readProductsByAllFilters(t,e){return this.http.get(`${this.api}products/allfilters/${t}/${e}`).pipe(Object(a.a)(t=>t))}readProductsByCategory(t){return this.http.get(`${this.api}products/category/${t}`).pipe(Object(a.a)(t=>t))}readProductsByTitle(t){return this.http.get(`${this.api}products/title/${t}`).pipe(Object(a.a)(t=>t))}getDetails(t){return this.http.get(`${this.api}products/id/${t}`)}createProduct(t){return this.http.post(`${this.api}products`,t)}updateProduct(t){return this.http.put(`${this.api}products`,t)}deleteProduct(t){return this.http.delete(`${this.api}products/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(n.Pb(i.a))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},mrSG:function(t,e,r){"use strict";function a(t,e,r,a){return new(r||(r=Promise))(function(n,i){function s(t){try{c(a.next(t))}catch(e){i(e)}}function o(t){try{c(a.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(s,o)}c((a=a.apply(t,e||[])).next())})}r.d(e,"a",function(){return a})}}]);