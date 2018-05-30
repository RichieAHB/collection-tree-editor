'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var get = _interopDefault(require('lodash/fp/get'));
var set = _interopDefault(require('lodash/fp/set'));

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _next(value) {
        step("next", value);
      }

      function _throw(err) {
        step("throw", err);
      }

      _next();
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var pathSpec = function pathSpec(key, index) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    key: key,
    index: index,
    type: type
  };
};

var toPathStr = function toPathStr(path) {
  return path.map(function (_ref) {
    var key = _ref.key,
        index = _ref.index;
    return "".concat(key, "[").concat(index, "]");
  }).join('.');
};

var toPathStrAndIndex = function toPathStrAndIndex(path) {
  var prePath = path.slice();

  var _prePath$pop = prePath.pop(),
      key = _prePath$pop.key,
      index = _prePath$pop.index;

  var str = toPathStr(prePath);
  return ["".concat(str, ".").concat(key), index];
};

var isSubPath = function isSubPath(parent, sub) {
  return sub.length > parent.length && !parent.some(function (_ref2, i) {
    var kp = _ref2.key,
        ip = _ref2.index;

    var _ref3 = sub[i] || {},
        ks = _ref3.key,
        is = _ref3.index;

    return kp !== ks || ip !== is;
  });
};

var pathForMove = function pathForMove(source, target) {
  var newPath = [];

  for (var i = 0; i < target.length; i += 1) {
    var targetPathSpec = target[i];
    var kt = targetPathSpec.key,
        it = targetPathSpec.index,
        tt = targetPathSpec.type;

    var _ref4 = source[i] || {},
        ks = _ref4.key,
        is = _ref4.index;

    if (i < source.length - 1 && (ks !== kt || is !== it)) {
      return target;
    } else if (i === source.length - 1 && ks === kt && is < it) {
      newPath.push(pathSpec(kt, it - 1, tt));
    } else {
      newPath.push(targetPathSpec);
    }
  }

  return newPath;
};

var Node = function Node(_ref) {
  var node = _ref.node,
      path = _ref.path,
      attach = _ref.attach,
      detach = _ref.detach,
      schema = _ref.schema;
  var childrenKey = schema.childrenKey,
      type = schema.type,
      renderer = schema.renderer,
      childSchema = schema.childType;

  var _ref2 = childSchema || {},
      childType = _ref2.type,
      childIdKey = _ref2.idKey;

  var canDrag = path.length > 0;
  var canDrop = !!childrenKey;
  return renderer({
    node: node,
    getDragProps: function getDragProps() {
      return canDrag ? {
        draggable: true,
        onDragStart: detach(path, type, node)
      } : {};
    },
    getDropProps: function getDropProps(i) {
      return !!childrenKey ? {
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        },
        onDrop: attach(_toConsumableArray(path).concat([pathSpec(childrenKey, i, childType)]))
      } : {};
    },
    canDrag: canDrag,
    canDrop: canDrop,
    parentType: type,
    allowedType: childType,
    children: !!childrenKey && !!childSchema ? (get(childrenKey, node) || []).map(function (child, i) {
      return React.createElement(Node, {
        key: child[childIdKey] || i,
        node: child,
        path: _toConsumableArray(path).concat([pathSpec(childrenKey, i, childType)]),
        attach: attach,
        detach: detach,
        schema: childSchema
      });
    }) : []
  });
};

var EditTypes = {
  INSERT: 'INSERT',
  REMOVE: 'REMOVE',
  MOVE: 'MOVE'
};

var insert = function insert(id, type, data, parents, index) {
  return {
    type: EditTypes.INSERT,
    nodeType: type,
    payload: {
      id: id,
      data: data,
      type: type,
      parents: parents,
      index: index
    }
  };
};

var remove = function remove(id, type, parents) {
  return {
    type: EditTypes.REMOVE,
    nodeType: type,
    payload: {
      id: id,
      type: type,
      parents: parents
    }
  };
};

var move = function move(id, type, index, oldParents, newParents) {
  return {
    type: EditTypes.MOVE,
    nodeType: type,
    payload: {
      id: id,
      type: type,
      index: index,
      oldParents: oldParents,
      newParents: newParents
    }
  };
};

var buildTree = function buildTree(_entities, rootType, rootId, rootSchema) {
  var buildNode = function buildNode(entities, modelKey, nodeId) {
    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        childrenKey = _ref.childrenKey,
        type = _ref.type,
        schema = _ref.childType;

    var node = entities[modelKey][nodeId];

    if (!schema || !childrenKey) {
      return node;
    }

    var childType = schema.type;
    return set(childrenKey, (get(childrenKey, node) || []).map(function (childId) {
      return buildNode(entities, "".concat(childType, "s"), childId, schema);
    }), node);
  };

  return buildNode(_entities, rootType, rootId, rootSchema);
};

var defaults = {
  idKey: 'id'
};

var el = function el(type, renderer) {
  var childType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return _objectSpread({
    childrenKey: childType ? "".concat(childType.type, "s") : undefined
  }, _objectSpread({}, defaults, opts), {
    childType: childType,
    type: type,
    renderer: renderer
  });
};

var schemaAtDepth = function schemaAtDepth(schema, depth) {
  var newSchema = schema;

  for (var i = 0; i < depth; i += 1) {
    if (!newSchema) {
      return null;
    }

    newSchema = newSchema.childType;
  }

  return newSchema;
};

var getParents = function getParents(tree, schema, path) {
  var _path$reduce = path.reduce(function (_ref4, pathSpec$$1, i) {
    var _ref5 = _slicedToArray(_ref4, 3),
        curParents = _ref5[0],
        curPath = _ref5[1],
        curSchema = _ref5[2];

    var pathStr = toPathStr(curPath);
    return [_toConsumableArray(curParents || []).concat([{
      id: (pathStr ? get(pathStr, tree) : tree)[(curSchema || {}).idKey],
      type: (curSchema || {}).type
    }]), _toConsumableArray(curPath).concat([pathSpec$$1]), (curSchema || {}).childType];
  }, [[], [], schema]),
      _path$reduce2 = _slicedToArray(_path$reduce, 1),
      parents = _path$reduce2[0];

  return parents;
};

var getContext = function getContext(tree, schema, sourcePath, path) {
  var newPath = sourcePath ? pathForMove(sourcePath, path) : path;
  var parents = getParents(tree, schema, newPath);

  var _toPathStrAndIndex = toPathStrAndIndex(newPath),
      _toPathStrAndIndex2 = _slicedToArray(_toPathStrAndIndex, 2),
      pathStr = _toPathStrAndIndex2[0],
      index = _toPathStrAndIndex2[1];

  var _ref6 = schemaAtDepth(schema, newPath.length) || {},
      type = _ref6.type,
      idKey = _ref6.idKey;

  var children = get(pathStr, tree) || [];
  return {
    type: type,
    idKey: idKey,
    parents: parents,
    pathStr: pathStr,
    index: index,
    children: children
  };
};

var insert$1 = function insert$$1(tree, schema, sourcePath, path, data) {
  var _getContext = getContext(tree, schema, sourcePath, path),
      type = _getContext.type,
      idKey = _getContext.idKey,
      parents = _getContext.parents,
      pathStr = _getContext.pathStr,
      index = _getContext.index,
      children = _getContext.children;

  var newTree = set(pathStr, _toConsumableArray(children.slice(0, index)).concat([data], _toConsumableArray(children.slice(index))), tree);
  return [newTree, [insert(data[idKey], type, data, parents, index)]];
}; // will return an edit with undefined keys if id and type are missing


var remove$1 = function remove$$1(tree, schema, sourcePath, path, data) {
  var _getContext2 = getContext(tree, schema, sourcePath, path),
      type = _getContext2.type,
      idKey = _getContext2.idKey,
      parents = _getContext2.parents,
      pathStr = _getContext2.pathStr,
      index = _getContext2.index,
      children = _getContext2.children;

  var newTree = set(pathStr, _toConsumableArray(children.slice(0, index)).concat(_toConsumableArray(children.slice(index + 1))), tree);
  return [newTree, [remove(data[idKey], type, parents)]];
};

var mergeMoves = function mergeMoves(edits) {
  // this assumes we can't have moves with anything other than a REMOVE and INSERT
  if (edits.length !== 2) {
    return edits;
  }

  var _edits = _slicedToArray(edits, 2),
      edit1 = _edits[0],
      edit2 = _edits[1];

  if (edit1.type === EditTypes.REMOVE && edit2.type === EditTypes.INSERT) {
    var _edit1$payload = edit1.payload,
        id1 = _edit1$payload.id,
        type1 = _edit1$payload.type,
        parents1 = _edit1$payload.parents;
    var _edit2$payload = edit2.payload,
        id2 = _edit2$payload.id,
        type2 = _edit2$payload.type,
        parents2 = _edit2$payload.parents,
        index = _edit2$payload.index;

    if (id1 === id2 && type1 === type2) {
      return [move(id1, type1, index, parents1, parents2)];
    }
  }

  return edits;
};

var INTERNAL_TRANSFER_TYPE = '@@collection-transfer';

var Collection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Collection, _React$Component);

  function Collection(props) {
    var _this;

    _classCallCheck(this, Collection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collection).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDragEnd", function () {
      _this.setState({
        draftData: {
          tree: null,
          edits: null
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "detach", function (path, type, data) {
      return function (e) {
        var dataTransfer = e.dataTransfer;

        if (!dataTransfer || !dataTransfer.getData) {
          throw new Error('Data transfer issue');
        }

        var dropSpecString = JSON.stringify({
          data: data,
          type: type,
          path: path
        });
        dataTransfer.setData(INTERNAL_TRANSFER_TYPE, dropSpecString);

        try {
          var _remove = remove$1(_this.state.tree, _this.props.schema, null, path, data),
              _remove2 = _slicedToArray(_remove, 2),
              _tree = _remove2[0],
              _edits = _remove2[1];

          _this.setState({
            draftData: {
              tree: _tree,
              edits: _edits
            }
          });
        } catch (error) {
          console.log("Couldn't detach: ".concat(error.message));
        }
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runDrop",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(path, e) {
        var spec, _spec, data, sourcePath, type, allowedType, _insert, _insert2, _tree2, _edits2, combinedEdits;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.prev = 1;
                _context.next = 4;
                return _this.getDropData(e);

              case 4:
                spec = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", 'error parsing the drag data');

              case 10:
                if (spec) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", 'could not find a way to handle this drag event');

              case 12:
                // TODO: change this to `pathAtDepth` to get the type
                _spec = spec, data = _spec.data, sourcePath = _spec.path, type = _spec.type;

                if (!(sourcePath && isSubPath(sourcePath, path))) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("return", "can't drop into itself");

              case 15:
                // TODO: remove type from PathSpec and find the type from the structure?
                allowedType = path[path.length - 1].type;

                if (!(type !== allowedType)) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", "can't drop ".concat(type, ", expecting ").concat(allowedType || 'unknown'));

              case 18:
                _context.prev = 18;
                // this could probably just be draft tree
                _insert = insert$1(_this.state.draftData.tree || _this.state.tree, _this.props.schema, sourcePath, path, data), _insert2 = _slicedToArray(_insert, 2), _tree2 = _insert2[0], _edits2 = _insert2[1]; // dedupe

                combinedEdits = mergeMoves(_toConsumableArray(_this.state.draftData.edits || []).concat(_toConsumableArray(_edits2)));

                _this.setState({
                  draftData: {
                    tree: null,
                    edits: null
                  }
                });

                _edits2.forEach(function (edit) {
                  var typeEditors = _this.props.editHandlers[edit.type];

                  if (!typeEditors) {
                    return;
                  }

                  var nodeTypeEditor = typeEditors[edit.nodeType];

                  if (!nodeTypeEditor) {
                    return;
                  }

                  nodeTypeEditor(edit);
                });

                _this.props.onChange(_tree2, combinedEdits);

                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t1 = _context["catch"](18);
                return _context.abrupt("return", _context.t1.message);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7], [18, 26]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "attach", function (path) {
      return (
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(e) {
            var error;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this.runDrop(path, e);

                  case 2:
                    error = _context2.sent;

                    if (error) {
                      _this.props.onError(error);
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }()
      );
    });

    _this.state = {
      tree: _this.props.tree,
      draftData: {
        tree: null,
        edits: null
      }
    };
    return _this;
  }

  _createClass(Collection, [{
    key: "getDropData",
    value: function () {
      var _getDropData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(e) {
        var dataTransfer, dropMappers, type, mapper;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dataTransfer = e.dataTransfer;

                if (!(!dataTransfer || !dataTransfer.getData)) {
                  _context3.next = 3;
                  break;
                }

                throw new Error('Data transfer issue');

              case 3:
                dropMappers = this.dropMappers;
                type = Object.keys(dropMappers).find(function (key) {
                  return dataTransfer.getData(key);
                });

                if (type) {
                  _context3.next = 7;
                  break;
                }

                throw new Error('Unknown transfer type');

              case 7:
                mapper = dropMappers[type]; // listen for errors here??

                return _context3.abrupt("return", mapper(dataTransfer.getData(type)));

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getDropData(_x4) {
        return _getDropData.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var attach = this.attach,
          detach = this.detach,
          onDragEnd = this.onDragEnd;
      var schema = this.props.schema;
      var tree = this.state.tree;
      return React__default.createElement("div", {
        onDragEnd: onDragEnd
      }, React__default.createElement(Node, {
        node: tree,
        path: [],
        attach: attach,
        detach: detach,
        schema: schema
      }));
    }
  }, {
    key: "dropMappers",
    get: function get$$1() {
      return _objectSpread(_defineProperty({}, INTERNAL_TRANSFER_TYPE, function (data) {
        return JSON.parse(data);
      }), this.props.dropMappers);
    }
  }]);

  return Collection;
}(React__default.Component);

_defineProperty(Collection, "defaultProps", {
  dropMappers: {},
  onError: function onError(error) {
    return console.log(error);
  },
  onChange: function onChange() {},
  editHandlers: {}
});

_defineProperty(Collection, "getDerivedStateFromProps", function (_ref3) {
  var tree = _ref3.tree;
  return {
    tree: tree
  };
});

var DragZone = function DragZone(props) {
  return React.createElement("div", _extends({
    style: {
      background: 'white',
      color: '#221133',
      cursor: 'pointer',
      padding: '10px',
      margin: '5px 0'
    }
  }, props));
};

var DropZone = function DropZone(props) {
  return React.createElement("div", _extends({
    style: {
      border: '2px dashed white',
      margin: '5px 0',
      padding: '10px'
    }
  }, props));
};

var Indent = function Indent(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    style: {
      marginLeft: '10px'
    }
  }, children);
};

var RenderNode = function RenderNode(_ref2) {
  var node = _ref2.node,
      getDragProps = _ref2.getDragProps,
      getDropProps = _ref2.getDropProps,
      children = _ref2.children,
      canDrag = _ref2.canDrag,
      canDrop = _ref2.canDrop,
      parentType = _ref2.parentType,
      allowedType = _ref2.allowedType,
      _ref2$titleKey = _ref2.titleKey,
      titleKey = _ref2$titleKey === void 0 ? 'title' : _ref2$titleKey;
  return React.createElement("div", null, canDrag && React.createElement(DragZone, getDragProps(), React.createElement("h3", null, get(titleKey, node))), React.createElement(Indent, null, children.map(function (child, i) {
    return React.createElement(React.Fragment, {
      key: i
    }, canDrop && React.createElement(DropZone, getDropProps(i), "Drop ", allowedType, " in ", parentType, " at index: ", i), child);
  }), canDrop && React.createElement(DropZone, getDropProps(children.length), "Drop ", allowedType, " in ", parentType, " at index: ", children.length)));
};

exports.Collection = Collection;
exports.buildTree = buildTree;
exports.el = el;
exports.RenderNode = RenderNode;
