﻿/// <autosync enabled="true" />
/// <reference path="../app/app.js" />
/// <reference path="../app/components/home/homeController.js" />
/// <reference path="../app/components/home/rootcontroller.js" />
/// <reference path="../app/components/login/logincontroller.js" />
/// <reference path="../app/components/product_categories/productCategories.module.js" />
/// <reference path="../app/components/product_categories/productCategoryAddController.js" />
/// <reference path="../app/components/product_categories/productCategoryEditController.js" />
/// <reference path="../app/components/product_categories/productCategoryListController.js" />
/// <reference path="../app/components/products/productAddController.js" />
/// <reference path="../app/components/products/productEditController.js" />
/// <reference path="../app/components/products/productListController.js" />
/// <reference path="../app/components/products/products.module.js" />
/// <reference path="../app/shared/directives/pagerDirective.js" />
/// <reference path="../app/shared/filters/statusFilter.js" />
/// <reference path="../app/shared/modules/vinhshop.common.js" />
/// <reference path="../app/shared/services/apiService.js" />
/// <reference path="../app/shared/services/authdata.js" />
/// <reference path="../app/shared/services/authenticationservice.js" />
/// <reference path="../app/shared/services/authinterceptorservice.js" />
/// <reference path="../app/shared/services/commonService.js" />
/// <reference path="../app/shared/services/loginservice.js" />
/// <reference path="../app/shared/services/notificationService.js" />
/// <reference path="../Assets/admin/js/app.js" />
/// <reference path="../Assets/admin/js/demo.js" />
/// <reference path="../Assets/admin/js/pages/dashboard.js" />
/// <reference path="../Assets/admin/js/pages/dashboard2.js" />
/// <reference path="../Assets/admin/libs/angular/angular.js" />
/// <reference path="../assets/admin/libs/angular-loading-bar/build/loading-bar.js" />
/// <reference path="../assets/admin/libs/angular-local-storage/dist/angular-local-storage.js" />
/// <reference path="../Assets/admin/libs/angular-messages/angular-messages.js" />
/// <reference path="../Assets/admin/libs/angular-ui-router/release/angular-ui-router.js" />
/// <reference path="../Assets/admin/libs/bootbox/bootbox.js" />
/// <reference path="../Assets/admin/libs/bootstrap/dist/js/bootstrap.js" />
/// <reference path="../Assets/admin/libs/ckeditor/ckeditor.js" />
/// <reference path="../Assets/admin/libs/fastclick/lib/fastclick.js" />
/// <reference path="../Assets/admin/libs/jquery/dist/jquery.js" />
/// <reference path="../Assets/admin/libs/ngBootbox/dist/ngBootbox.js" />
/// <reference path="../Assets/admin/libs/ng-ckeditor/ng-ckeditor.js" />
/// <reference path="../Assets/admin/libs/slimScroll/jquery.slimscroll.js" />
/// <reference path="../Assets/admin/libs/tg-angular-validator/dist/angular-validator.js" />
/// <reference path="../Assets/admin/libs/toastr/toastr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/bootstrap/js/bootstrap.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/bootstrap/js/npm.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/dist/js/app.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/dist/js/demo.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/dist/js/pages/dashboard.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/dist/js/pages/dashboard2.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/documentation/docs.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/Gruntfile.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/bootstrap-slider/bootstrap-slider.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/chartjs/Chart.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/adapters/jquery.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/build-config.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/ckeditor.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/config.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/af.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/ar.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/bg.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/bn.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/bs.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/ca.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/cs.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/cy.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/da.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/de.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/el.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/en.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/en-au.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/en-ca.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/en-gb.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/eo.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/es.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/et.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/eu.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/fa.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/fi.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/fo.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/fr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/fr-ca.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/gl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/gu.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/he.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/hi.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/hr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/hu.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/id.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/is.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/it.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/ja.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/ka.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/km.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/ko.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/ku.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/lt.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/lv.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/mk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/mn.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/ms.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/nb.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/nl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/no.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/pl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/pt.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/pt-br.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/ro.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/ru.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/si.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/sk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/sl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/sq.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/sr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/sr-latn.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/sv.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/th.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/tr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/ug.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/uk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/vi.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/zh.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/lang/zh-cn.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/a11yhelp.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/ar.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/bg.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/ca.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/cs.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/cy.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/da.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/de.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/el.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/en.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/eo.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/es.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/et.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/fa.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/fi.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/fr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/fr-ca.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/gl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/gu.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/he.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/hi.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/hr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/hu.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/id.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/it.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/ja.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/km.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/ko.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/ku.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/lt.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/lv.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/mk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/mn.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/nb.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/nl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/no.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/pl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/pt.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/pt-br.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/ro.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/ru.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/si.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/sk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/sl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/sq.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/sr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/sr-latn.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/sv.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/th.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/tr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/ug.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/uk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/vi.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/zh.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/a11yhelp/dialogs/lang/zh-cn.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/about/dialogs/about.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/clipboard/dialogs/paste.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/dialog/dialogDefinition.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/image/dialogs/image.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/link/dialogs/anchor.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/link/dialogs/link.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/pastefromword/filter/default.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/scayt/dialogs/options.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/ar.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/bg.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/ca.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/cs.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/cy.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/de.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/el.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/en.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/eo.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/es.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/et.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/fa.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/fi.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/fr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/fr-ca.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/gl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/he.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/hr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/hu.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/id.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/it.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/ja.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/km.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/ku.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/lv.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/nb.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/nl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/no.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/pl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/pt.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/pt-br.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/ru.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/si.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/sk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/sl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/sq.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/sv.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/th.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/tr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/ug.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/uk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/vi.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/zh.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/lang/zh-cn.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/specialchar/dialogs/specialchar.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/table/dialogs/table.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/tabletools/dialogs/tableCell.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/wsc/dialogs/wsc.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/plugins/wsc/dialogs/wsc_ie.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ckeditor/styles.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/colorpicker/bootstrap-colorpicker.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/dataTables.bootstrap.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/extensions/AutoFill/js/dataTables.autoFill.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/extensions/ColReorder/js/dataTables.colReorder.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/extensions/ColVis/js/dataTables.colVis.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/extensions/FixedColumns/js/dataTables.fixedColumns.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/extensions/FixedHeader/js/dataTables.fixedHeader.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/extensions/KeyTable/js/dataTables.keyTable.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/extensions/Responsive/js/dataTables.responsive.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/extensions/Scroller/js/dataTables.scroller.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/extensions/TableTools/js/dataTables.tableTools.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datatables/jquery.dataTables.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/bootstrap-datepicker.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.ar.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.az.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.bg.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.ca.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.cs.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.cy.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.da.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.de.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.el.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.es.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.et.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.fa.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.fi.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.fr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.gl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.he.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.hr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.hu.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.id.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.is.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.it.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.ja.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.ka.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.kk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.kr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.lt.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.lv.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.mk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.ms.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.nb.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.nl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.nl-BE.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.no.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.pl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.pt.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.pt-BR.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.ro.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.rs.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.rs-latin.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.ru.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.sk.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.sl.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.sq.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.sv.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.sw.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.th.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.tr.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.ua.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.vi.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.zh-CN.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/datepicker/locales/bootstrap-datepicker.zh-TW.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/daterangepicker/daterangepicker.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/daterangepicker/moment.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/fastclick/fastclick.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/excanvas.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.colorhelpers.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.canvas.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.categories.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.crosshair.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.errorbars.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.fillbetween.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.image.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.navigate.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.pie.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.resize.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.selection.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.stack.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.symbol.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.threshold.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/flot/jquery.flot.time.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/fullcalendar/fullcalendar.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/iCheck/icheck.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/input-mask/jquery.inputmask.date.extensions.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/input-mask/jquery.inputmask.extensions.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/input-mask/jquery.inputmask.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/input-mask/jquery.inputmask.numeric.extensions.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/input-mask/jquery.inputmask.phone.extensions.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/input-mask/jquery.inputmask.regex.extensions.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/ionslider/ion.rangeSlider.min.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/jQuery/jQuery-2.1.4.min.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/jQueryUI/jquery-ui.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/jvectormap/jquery-jvectormap-world-mill-en.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/knob/jquery.knob.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/morris/morris.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/pace/pace.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/select2/select2.full.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/select2/select2.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/slimScroll/jquery.slimscroll.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/sparkline/jquery.sparkline.js" />
/// <reference path="../Resources/AdminLTE-2.3.0/plugins/timepicker/bootstrap-timepicker.js" />
/// <reference path="angular.js" />
/// <reference path="angular-mocks.js" />
