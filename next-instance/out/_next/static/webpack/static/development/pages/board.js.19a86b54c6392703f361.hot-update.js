webpackHotUpdate("static/development/pages/board.js",{

/***/ "./pages/board.tsx":
/*!*************************!*\
  !*** ./pages/board.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/list/style */ "./node_modules/antd/lib/list/style/index.js");
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/affix/style */ "./node_modules/antd/lib/affix/style/index.js");
/* harmony import */ var antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/affix */ "./node_modules/antd/lib/affix/index.js");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-canvas-draw */ "./node_modules/react-canvas-draw/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../actions */ "./actions/index.ts");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Post */ "./components/Post.tsx");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.tsx");
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../graphql/mutations */ "./graphql/mutations.ts");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../graphql/queries */ "./graphql/queries.ts");














function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var onlineUsers = [];

var Board =
/*#__PURE__*/
function (_Component) {
  _inherits(Board, _Component);

  function Board() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Board);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Board)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      modalVisible: false,
      modalLoading: false,
      formValid: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "unloadHandler", function () {
      _this.props.socket.emit("board disconnect", {
        boardId: _this.props.query.id,
        userName: _this.props.userName || ""
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showModal", function () {
      _this.setState({
        modalVisible: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "modalCancelHandler", function () {
      _this.setState({
        modalVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveFormRef", function (formRef) {
      _this.formRef = formRef;
    });

    return _this;
  }

  _createClass(Board, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var socket = this.props.socket;
      var id = this.props.query.id;
      var userName = this.props.userName;

      if (userName) {
        socket.on("connect", function () {
          socket.emit("board connect", {
            boardId: id,
            socketId: socket.id,
            userName: userName
          });
        });
      }

      window.addEventListener("beforeunload", this.unloadHandler);
      socket.emit("new board connection", {
        boardId: id
      });
      socket.on("fetch users", function (usersArray) {
        onlineUsers = usersArray;

        _this2.setState(_this2.state);
      });
      socket.on("user connect", function (incomingUser) {
        onlineUsers = incomingUser.onlineUsers;

        _this2.setState(_this2.state);

        antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default.a.info("User ".concat(incomingUser.userName, " is now seeing this board"));
      });
      socket.on("user disconnect", function (incomingUser) {
        onlineUsers = incomingUser.onlineUsers;

        _this2.setState(_this2.state);

        antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default.a.info("User ".concat(incomingUser.userName, " has disconnected"));
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.addEventListener("beforeunload", this.unloadHandler);
      this.props.socket.emit("board disconnect", {
        boardId: this.props.query.id,
        userName: this.props.userName || ""
      });
      this.props.socket.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var id = this.props.query.id;
      var listFooter = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_affix__WEBPACK_IMPORTED_MODULE_8___default.a, {
        offsetBottom: 10
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        type: "primary",
        onClick: this.showModal,
        htmlType: "button"
      }, "Publish new post"));
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_15__["Query"], {
        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_24__["SINGLE_BOARD_QUERY"],
        variables: {
          id: id
        }
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, "Error loading board with id: ", id, ". ", error.toString());
        if (loading) return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_18__["PacmanLoader"], {
          loading: loading,
          color: "black"
        });
        var posts = data.board.posts;
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("title", null, data.board.name)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_6___default.a, {
          footer: listFooter,
          itemLayout: "vertical",
          size: "large",
          dataSource: posts,
          renderItem: function renderItem(post) {
            return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, post, {
              key: post.id,
              author: post.author
            }));
          }
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, "Users seeing this board:", " ", onlineUsers.map(function (user, idx) {
          var separator = idx === onlineUsers.length - 1 ? "" : ", ";
          return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, {
            key: user
          }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
            type: "user"
          }), " ", "".concat(user).concat(separator));
        })));
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_15__["Mutation"], {
        mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_23__["CREATE_POST_MUTATION"],
        refetchQueries: [{
          query: _graphql_queries__WEBPACK_IMPORTED_MODULE_24__["SINGLE_BOARD_QUERY"],
          variables: {
            id: id,
            userName: this.props.userName
          }
        }]
      }, function (createPost, _ref2) {
        var loading = _ref2.loading;
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
          align: null,
          title: "Create new post",
          visible: _this3.state.modalVisible,
          confirmLoading: loading,
          destroyOnClose: true,
          onCancel: _this3.modalCancelHandler,
          onOk: function onOk(e) {
            e.preventDefault();
            var form = _this3.formRef.props.form;
            form.validateFields(
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(err, values) {
                var image;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (err) {
                          _context.next = 5;
                          break;
                        }

                        image = _this3.loadableCanvas.getSaveData();
                        _context.next = 4;
                        return createPost({
                          variables: {
                            title: values.postTitle,
                            content: values.postContent,
                            boardId: id,
                            image: image
                          }
                        });

                      case 4:
                        _this3.setState({
                          modalVisible: false
                        });

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x, _x2) {
                return _ref3.apply(this, arguments);
              };
            }());
          }
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_PostForm__WEBPACK_IMPORTED_MODULE_22__["default"], {
          wrappedComponentRef: _this3.saveFormRef
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_canvas_draw__WEBPACK_IMPORTED_MODULE_16__["default"], {
          ref: function ref(canvasDraw) {
            return _this3.loadableCanvas = canvasDraw;
          },
          canvasWidth: 472,
          canvasHeight: 250,
          imgSrc: "",
          disabled: loading
        })));
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(ctx) {
        var query, req;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = ctx.query, req = ctx.req;
                return _context2.abrupt("return", {
                  query: query,
                  userName: req.userName
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x3) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    onlineUsers: state.onlineUsers
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addOnlineUser: Object(redux__WEBPACK_IMPORTED_MODULE_19__["bindActionCreators"])(_actions__WEBPACK_IMPORTED_MODULE_20__["addOnlineUser"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])()(Board));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/board")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=board.js.19a86b54c6392703f361.hot-update.js.map