(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{216:function(a,e,n){"use strict";n.r(e);var s=n(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"空标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#空标签","aria-hidden":"true"}},[a._v("#")]),a._v(" 空标签")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\x3c!--动态获取用户的设置数据--\x3e\n<ng-container>\n    \n</ng-container>\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("h3",{attrs:{id:"父附件调用子组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#父附件调用子组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 父附件调用子组件")]),a._v(" "),n("p",[a._v("子组件")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("@Component({\n  selector: 'app-inventory-searchfrom',\n  templateUrl: './searchFrom.component.html',\n  styleUrls: ['./searchFrom.component.scss']\n})\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("p",[a._v("父组件")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('@ViewChild(\'searchForm2\') searchForm2\nthis.searchForm2.searchCustomProduct(data)\n\n<app-inventory-searchfrom #searchForm2 (submitHandler)="submitFormCampus($event)" [type]="\'campus\'" (downloadFn)="download()" (deliveryFn)="deliveryHandler($event)" (initFn)="initHandler($event)" (submitValueHandler)="getValueHandler($event)" (editFn)="editHandler()"></app-inventory-searchfrom>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("h3",{attrs:{id:"ant-zooro-时间日期选择器-时间范围-0-7版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ant-zooro-时间日期选择器-时间范围-0-7版本","aria-hidden":"true"}},[a._v("#")]),a._v(" ant zooro 时间日期选择器-时间范围 0.7版本")]),a._v(" "),n("p",[a._v("把日期选择器修改为两个单独的日期选择器，进行时间绑定控制另个一个选择器的可选范围~")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<nz-form-control>\n  \x3c!-- <nz-input-group>\n    <span class="form-label">创建日期：</span><nz-range-picker [nzFormat]="dateFormat" formControlName="starttime"  (ngModelChange)="changeTimeFn($event)"></nz-range-picker>\n  </nz-input-group> --\x3e\n  <nz-input-group>\n    <span class="form-label">创建日期：</span><nz-date-picker\n    formControlName="starttime"\n    [nzAllowClear]="false"\n    [nzDisabledDate]="disabledStartDateSearch"\n    nzFormat="yyyy-MM-dd"\n    [(ngModel)]="startTimeValueSearch"\n    nzPlaceHolder="开始日期"\n    (ngModelChange)="onStartChangeSearch($event)"\n  ></nz-date-picker>-<nz-date-picker\n  [nzDisabledDate]="disabledEndDateSearch"\n  formControlName="endtime"\n  [nzAllowClear]="false"\n  nzFormat="yyyy-MM-dd"\n  [(ngModel)]="endTimeValueSearch"\n  nzPlaceHolder="结束日期"\n  (ngModelChange)="onEndChangeSearch($event)"></nz-date-picker>\n  </nz-input-group>\n</nz-form-control>\n\ndisabledStartDateSearch = (startValue: Date): boolean => {\n  if (!startValue || !this.endTimeValueSearch) {\n    return false;\n  }\n  return ((startValue.getTime() < (this.endTimeValueSearch.getTime() - 60 * 24 * 60 * 60 * 1000 )) || (startValue.getTime() > this.endTimeValueSearch.getTime()));\n}\ndisabledEndDateSearch = (endValue: Date): boolean => {\n  if (!endValue || !this.startTimeValueSearch) {\n    return false;\n  }\n  return ((endValue.getTime() > (this.startTimeValueSearch.getTime() + 60 * 24 * 60 * 60 * 1000 )) || (endValue.getTime() <= this.startTimeValueSearch.getTime()));\n}\nonStartChangeSearch(date: Date): void {\n  console.log(\'这里有默认事件吗\')\n  this.startTimeValueSearch = date;\n  this.changeTimeFn(date, \'search\', \'start\')\n}\nonEndChangeSearch(date: Date): void {\n  this.endTimeValueSearch = date;\n  this.changeTimeFn(date, \'search\', \'end\')\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br"),n("span",{staticClass:"line-number"},[a._v("34")]),n("br"),n("span",{staticClass:"line-number"},[a._v("35")]),n("br"),n("span",{staticClass:"line-number"},[a._v("36")]),n("br"),n("span",{staticClass:"line-number"},[a._v("37")]),n("br"),n("span",{staticClass:"line-number"},[a._v("38")]),n("br"),n("span",{staticClass:"line-number"},[a._v("39")]),n("br"),n("span",{staticClass:"line-number"},[a._v("40")]),n("br"),n("span",{staticClass:"line-number"},[a._v("41")]),n("br"),n("span",{staticClass:"line-number"},[a._v("42")]),n("br"),n("span",{staticClass:"line-number"},[a._v("43")]),n("br"),n("span",{staticClass:"line-number"},[a._v("44")]),n("br"),n("span",{staticClass:"line-number"},[a._v("45")]),n("br")])]),n("h3",{attrs:{id:"ant-zooro-input-disabled-0-7版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ant-zooro-input-disabled-0-7版本","aria-hidden":"true"}},[a._v("#")]),a._v(" ant zooro input disabled 0.7版本")]),a._v(" "),n("p",[a._v("使用时发现 0.7版本zooro 的input无法通过 "),n("code",[a._v("[disabled]")]),a._v(" 进行设置 所以尝试通过 "),n("code",[a._v("*ngIf")]),a._v(" 及 原生 input 的属性替换，但这不是一个很好的解决方法")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<input maxlength="36" nz-input formControlName="productName" id="productName" *ngIf="!isDetail">\n<input maxlength="36" nz-input formControlName="productName" disabled id="productName" class="disabled" *ngIf="isDetail">\n\n.disabled {\n  background: rgb(242, 242, 242);\n  color: rgb(169, 169, 169);\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("h2",{attrs:{id:"路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由","aria-hidden":"true"}},[a._v("#")]),a._v(" 路由")]),a._v(" "),n("h3",{attrs:{id:"更改url-路由重定向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更改url-路由重定向","aria-hidden":"true"}},[a._v("#")]),a._v(" 更改url 路由重定向")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("this.router.navigate(['/home/warehouse'], {replaceUrl: false, queryParams: query})\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("replaceUrl: false  页面不刷新   true 页面重载")]),a._v(" "),n("h3",{attrs:{id:"新窗口打开，url传参"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新窗口打开，url传参","aria-hidden":"true"}},[a._v("#")]),a._v(" 新窗口打开，url传参")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("const params = `?batchid=${data.id}&detail=true&batcheno=${data.batcheNo}&statusflag=${data.statusFlag}&updatetime=${data.updateTime}`\nconst routerList = [\n  '', '/home/warehouse/stock', '/home/warehouse/delivery', '/home/warehouse/edit'\n]\nconst url = location.protocol + '//' + location.host + routerList[(data.operateType * 1)] + params\nconsole.log(url)\nwindow.open(url, '_blank')\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])])])}],!1,null,null,null);e.default=t.exports}}]);