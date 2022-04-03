"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_factura_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/factura/Create.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/factura/Create.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./resources/js/store.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "create",
  data: function data() {
    return {
      factura: {
        numero_factura: "",
        fecha: "",
        nombre_emisor: "",
        nit_emisor: "",
        nombre_receptor: "",
        nit_receptor: "",
        producto: []
      },
      count: 0,
      sub_total: 0,
      iva: 0,
      arrayProducto: {
        id: '',
        nombre: '',
        descripcion: '',
        cantidad: '',
        valor_unitario: ''
      }
    };
  },
  methods: {
    crear: function crear() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.factura.numero_factura && _this.factura.fecha && _this.factura.nombre_emisor && _this.factura.nit_emisor && _this.factura.nombre_receptor && _this.factura.nit_receptor)) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return axios.post('/api/factura', _this.factura).then(function (response) {
                  console.log(response.data);

                  _this.$router.push('/factura');
                })["catch"](function (error) {
                  console.log(error.response.data);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    agregarProducto: function agregarProducto() {
      var arrayProducto = {
        nombre: this.factura.producto.nombre,
        descripcion: this.factura.producto.descripcion,
        cantidad: this.factura.producto.cantidad,
        valor_unitario: this.factura.producto.valor_unitario
      };

      if (arrayProducto.nombre && arrayProducto.descripcion && arrayProducto.cantidad && arrayProducto.valor_unitario) {
        this.count++;
        arrayProducto.id = this.count;
        this.sub_total = this.sub_total + arrayProducto.cantidad * arrayProducto.valor_unitario;
        this.iva = this.sub_total * 0.19;
        this.factura.producto.push(arrayProducto);
        this.factura.producto.nombre = '';
        this.factura.producto.descripcion = '';
        this.factura.producto.cantidad = '';
        this.factura.producto.valor_unitario = '';
        arrayProducto = null;
      }
    },
    removeProducto: function removeProducto(id) {
      var found = this.factura.producto.find(function (element) {
        return element.id === id;
      });
      console.log(found);
      this.factura.producto = this.factura.producto.filter(function (item) {
        return item.id !== id;
      });
      this.sub_total = this.sub_total - found.cantidad * found.valor_unitario;
      this.iva = this.sub_total * 0.19;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (_store__WEBPACK_IMPORTED_MODULE_1__.store.state.token !== '') {
      axios.post('/api/auth/checkToken', _store__WEBPACK_IMPORTED_MODULE_1__.store.state.token).then(function (res) {})["catch"](function (err) {
        _store__WEBPACK_IMPORTED_MODULE_1__.store.commit('clearToken');

        _this2.$router.push('/login');

        console.log(err.response.data);
      });
    } else {
      this.$router.push('/login');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/factura/Create.vue?vue&type=template&id=079ffd1e":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/factura/Create.vue?vue&type=template&id=079ffd1e ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-12"
};
var _hoisted_3 = {
  "class": "card"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Crear Factura")], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "card-body"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-12 mb-2"
};
var _hoisted_8 = {
  "class": "form-group"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "# Factura", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "row"
};
var _hoisted_11 = {
  "class": "col-12 mb-2"
};
var _hoisted_12 = {
  "class": "form-group"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Fecha", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "row"
};
var _hoisted_15 = {
  "class": "col-12 mb-2"
};
var _hoisted_16 = {
  "class": "form-group"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "nombre_emisor", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "row"
};
var _hoisted_19 = {
  "class": "col-12 mb-2"
};
var _hoisted_20 = {
  "class": "form-group"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "nit_emisor", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "row"
};
var _hoisted_23 = {
  "class": "col-12 mb-2"
};
var _hoisted_24 = {
  "class": "form-group"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "nombre_receptor", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "row"
};
var _hoisted_27 = {
  "class": "col-12 mb-2"
};
var _hoisted_28 = {
  "class": "form-group"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "nit_receptor", -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "row"
};
var _hoisted_31 = {
  "class": "col-3 mb-3"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "nombre", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "col-3 mb-3"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "descripcion", -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "col-3 mb-3"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "cantidad", -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "col-3 mb-3"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "valor_unitario", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "row"
};
var _hoisted_41 = {
  "class": "col-12 mb-12"
};
var _hoisted_42 = {
  type: "submit",
  "class": "btn btn-success text-center"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-plus-circle"
}, null, -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-plus-circle"
}, null, -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "row"
};
var _hoisted_47 = {
  "class": "col-12"
};
var _hoisted_48 = {
  "class": "table-responsive"
};
var _hoisted_49 = {
  "class": "table"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "ID"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Nombre"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Descripcion"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Cantidad"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Valor_unitario"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th")])], -1
/* HOISTED */
);

var _hoisted_51 = ["onClick"];

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times"
}, null, -1
/* HOISTED */
);

var _hoisted_53 = [_hoisted_52];

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Sub Total", -1
/* HOISTED */
);

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "IVA (19%)", -1
/* HOISTED */
);

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, null, -1
/* HOISTED */
);

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Total", -1
/* HOISTED */
);

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary"
}, "Guardar")])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_center = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("center");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.crear && $options.crear.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.factura.numero_factura = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.numero_factura]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.factura.fecha = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.fecha]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.factura.nombre_emisor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.nombre_emisor]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.factura.nit_emisor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.nit_emisor]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.factura.nombre_receptor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.nombre_receptor]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.factura.nit_receptor = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.nit_receptor]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.agregarProducto && $options.agregarProducto.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.factura.producto.nombre = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.producto.nombre]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.factura.producto.descripcion = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.producto.descripcion]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.factura.producto.cantidad = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.producto.cantidad]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.factura.producto.valor_unitario = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.producto.valor_unitario]])])]), _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_center, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Agregar Producto: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_this.factura.producto.length) + " ", 1
      /* TEXT */
      ), _hoisted_44])];
    }),
    _: 1
    /* STABLE */

  })])]), _hoisted_45], 32
  /* HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.factura.producto, function (fp) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: fp.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(fp.id), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(fp.nombre), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(fp.descripcion), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(fp.cantidad), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "$ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(fp.valor_unitario), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      type: "button",
      onClick: function onClick($event) {
        return $options.removeProducto(fp.id);
      },
      "class": "btn btn-danger"
    }, _hoisted_53, 8
    /* PROPS */
    , _hoisted_51)])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tfoot", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "$ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sub_total), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_58, _hoisted_59, _hoisted_60, _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "$ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.iva.toFixed(2)), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_62, _hoisted_63, _hoisted_64, _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "$ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(($data.sub_total + $data.iva).toFixed(2)), 1
  /* TEXT */
  )])])])])])]), _hoisted_66], 32
  /* HYDRATE_EVENTS */
  )])])])]);
}

/***/ }),

/***/ "./resources/js/components/factura/Create.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/factura/Create.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_079ffd1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=079ffd1e */ "./resources/js/components/factura/Create.vue?vue&type=template&id=079ffd1e");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/components/factura/Create.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_facturacion_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_facturacion_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_079ffd1e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/factura/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/factura/Create.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/factura/Create.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/factura/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/factura/Create.vue?vue&type=template&id=079ffd1e":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/factura/Create.vue?vue&type=template&id=079ffd1e ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_079ffd1e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_079ffd1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=079ffd1e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/factura/Create.vue?vue&type=template&id=079ffd1e");


/***/ })

}]);