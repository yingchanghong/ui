import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, watch, createBlock, Transition, withCtx, createElementVNode, normalizeStyle, toDisplayString, createCommentVNode, ref, onMounted, withDirectives, vShow, h, render, useSlots, createVNode, nextTick, Fragment, renderList, createTextVNode, onUnmounted } from 'vue';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$a = ".y-button {\n  height: 32px;\n  font-size: 14px;\n  line-height: 1;\n  padding: 8px 15px;\n  outline: none;\n  cursor: pointer;\n  border: 1px solid #eee;\n  background-color: var(--y-bg-color-white);\n  color: var(--y-text-color-default);\n  border-radius: 4px;\n}\n.y-button:hover {\n  color: var(--y-text-color-primary);\n  background-color: var(--y-hover-bg-color-default);\n}\n.y-button--primary,\n.y-button--warn,\n.y-button--error {\n  color: var(--y-text-color-white);\n}\n.y-button--primary:hover,\n.y-button--warn:hover,\n.y-button--error:hover {\n  color: var(--y-text-color-white);\n}\n.y-button--primary {\n  background-color: var(--y-bg-color-primary);\n  border: 1px solid var(--y-border-color-primary);\n}\n.y-button--primary:hover {\n  background-color: var(--y-hover-bg-color-primary);\n}\n\n.y-button--warn {\n  background-color: var(--y-bg-color-warn);\n  border: 1px solid var(--y-border-color-warn);\n}\n.y-button--warn:hover {\n  background-color: var(--y-hover-bg-color-warn);\n  border: 1px solid var(--y-border-color-warn);\n}\n\n.y-button--error {\n  background-color: var(--y-bg-color-error);\n  border: 1px solid var(--y-border-color-error);\n}\n.y-button--error:hover {\n  background-color: var(--y-hover-bg-color-error);\n  border: 1px solid var(--y-hover-bg-color-error);\n}\n\n.y-button--small {\n  height: 24px;\n  font-size: 12px;\n  padding: 5px 11px;\n}\n\n.is--disabled {\n  cursor: not-allowed;\n  background-image: none;\n}\n.is--disabled-default.y-button {\n  background-color: var(--y-text-color-white);\n  border-color: var(--y-disable-bg-color-default);\n}\n/* .is--disabled.y-button:hover {\n  color: var(--y-text-color-default);\n} */\n.is--disabled.y-button--primary {\n  background-color: var(--y-disable-bg-color-primary);\n  border-color: var(--y-disable-bg-color-primary);\n}\n.is--disabled.y-button--warn {\n  background-color: var(--y-disable-bg-color-warn);\n  border-color: var(--y-disable-bg-color-warn);\n}\n.is--disabled.y-button--error {\n  background-color: var(--y-disable-bg-color-error);\n  border-color: var(--y-disable-bg-color-error);\n}\n.is--disabled.y-button.y-button--primary:hover\n  .is--disabled.y-button.y-button--warn:hover\n  .is--disabled.y-button.y-button--error:hover {\n  color: var(--y-text-color-white) !important;\n}\n";
styleInject(css_248z$a);

var css_248z$9 = ":root {\n  --y-text-color-default: #606266;\n  --y-text-color-white: #fff;\n  --y-text-color-black: #000;\n  --y-text-color-primary: #409eff;\n  --y-bg-color-white: #fff;\n  --y-bg-color-primary: #409eff;\n  --y-bg-color-warn: #e6a23c;\n  --y-bg-color-error: #f56c6c;\n  --y-border-color-default: #dcdfe6;\n  --y-border-color-primary: #409eff;\n  --y-border-color-warn: #e6a23c;\n  --y-border-color-error: #f56c6c;\n  --y-hover-bg-color-default: #ecf5ff;\n  --y-hover-bg-color-primary: #79bbff;\n  --y-hover-bg-color-warn: #eebe77;\n  --y-hover-bg-color-error: #f89898;\n  --y-disable-bg-color-default: #e4e7ed;\n  --y-disable-bg-color-primary: #a0cfff;\n  --y-disable-bg-color-warn: #a0cfff;\n  --y-disable-bg-color-error: #fab6b6;\n  --y-dialog-box-color: rgba(0, 0, 0, 0.5);\n  --y-border-radus-base: 4px;\n  --y-message-success-text-color: #67c23a;\n  --y-message-success-bg-color: #f0f9eb;\n  --y-message-error-text-color: #f56c6c;\n  --y-message-error-bg-color: #fef0f0;\n  --y-message-warning-text-color: #e6a23c;\n  --y-message-warning-bg-color: #fdf6ec;\n  --y-message-info-text-color: #909399;\n  --y-message-info-bg-color: #f4f4f5;\n}\n";
styleInject(css_248z$9);

var css_248z$8 = ".y-popup-body {\n  overflow: hidden;\n}\n.y-dialog {\n  z-index: 1999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: var(--y-dialog-box-color);\n}\n.y-dialog_box {\n  position: relative;\n  margin: 0 auto 50px;\n  border-radius: 2px;\n  background: #fff;\n}\n.y-dialog_header,\n.y-dialog_body {\n  position: relative;\n  padding: 20px 20px 10px;\n}\n.y-dialog_close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  cursor: pointer;\n}\n.y-dialog_close::after {\n  content: \"\\2A2F\";\n}\n.y-dialog_footer {\n  padding: 10px 20px 20px;\n  text-align: right;\n}\n.dialog-fade-enter-from,\n.dialog-fade-leave-to {\n  opacity: 0;\n}\n.dialog-fade-enter-to,\n.dialog-fade-leave-from {\n  opacity: 1;\n}\n\n.dialog-fade-enter-active,\n.dialog-fade-leave-active {\n  transition: all 0.3s ease-in;\n}\n";
styleInject(css_248z$8);

var css_248z$7 = ".y-rate {\n}\n.y-rate::after {\n  content: \"\\e717\";\n}\n";
styleInject(css_248z$7);

var css_248z$6 = ".y-message {\n  width: fit-content;\n  min-width: 320px;\n  max-width: calc(100% - 32px);\n  left: 50%;\n  transform: translateX(-50%);\n  position: fixed;\n  padding: 15px 15px 15px 20px;\n  box-sizing: border-box;\n  font-size: 16px;\n  border-radius: var(--y-border-radus-base);\n  background: #edf2fc;\n  z-index: 999;\n  transition: opacity 0.3s, transform 0.4s, top 0.4s;\n}\n\n.y-message--info {\n  color: var(--y-message-info-text-color);\n  background: var(--y-message-info-bg-color);\n}\n\n.y-message--success {\n  color: var(--y-message-success-text-color);\n  background: var(--y-message-success-bg-color);\n}\n\n.y-message--warning {\n  color: var(--y-message-warning-text-color);\n  background: var(--y-message-warning-bg-color);\n}\n.y-message--error {\n  color: var(--y-message-error-text-color);\n  background: var(--y-message-error-bg-color);\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: transform 0.4s, opacity 0.4s;\n}\n.fade-enter-from {\n  transform: translate(-50%, -50px);\n  opacity: 0;\n}\n.fade-leave-to {\n  transform: translate(-50%, -50px) !important;\n  opacity: 0;\n}\n.fade-enter-to,\n.fade-leave-from {\n  opacity: 1;\n}\n/* .fade-enter-from,\n.fade-leave-to {\n  transform: translateY(-150px);\n  opacity: 0;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: all 0.5s ease;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transform-origin: left center;\n  transition: all 0.5s, transform 0.5s;\n} */\n";
styleInject(css_248z$6);

var css_248z$5 = ".y-tab--list {\n  display: flex;\n  flex-wrap: nowrap;\n  position: relative;\n  border-bottom: 1px solid #eee;\n}\n.y-tab--item {\n  flex-shrink: 0;\n  padding-left: 36px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.y-tab--item:hover {\n  color: var(--y-text-color-primary);\n}\n.y-tab--item:first-child {\n  padding-left: 0;\n}\n.y-tab--content {\n  padding: 6px 0;\n}\n.y-tab--active {\n  color: var(--y-text-color-primary);\n}\n.y-tab--line {\n  position: absolute;\n  bottom: -1px;\n  height: 2px;\n  background: var(--y-text-color-primary);\n  transition: all 0.25s;\n}\n.y-tab--pain {\n  padding: 20px 0;\n}\n";
styleInject(css_248z$5);

var css_248z$4 = ".y-upload {\n}\n";
styleInject(css_248z$4);

var css_248z$3 = ".y-table {\n  order: 0;\n  border-radius: 3px;\n}\n.y-table-number {\n  max-width: 70px;\n}\n.y-table .y-table-header th {\n  padding: 12px;\n  background: #fafafa;\n  font-weight: 500;\n  color: rgb(31, 34, 37);\n}\n.y-table .y-table-body {\n  font-size: 14px;\n  color: #000000d9;\n}\n.y-table .y-table-body td {\n  padding: 8px;\n}\n\n.y-table-bottom td,\nth {\n  border-bottom: 1px solid rgba(239, 239, 245, 1) !important;\n}\n.y-table-border td {\n  border-right: 1px solid rgba(239, 239, 245, 1) !important;\n  border-bottom: 1px solid rgba(239, 239, 245, 1) !important;\n}\n.y-table-border th {\n  border-right: 1px solid rgba(239, 239, 245, 1) !important;\n  border-bottom: 1px solid rgba(239, 239, 245, 1) !important;\n}\n.y-table-border td:first-child {\n  border-left: 1px solid rgba(239, 239, 245, 1) !important;\n}\n.y-table-border th:first-child {\n  border-left: 1px solid rgba(239, 239, 245, 1) !important;\n}\n.y-table-border thead th {\n  border-top: 1px solid rgba(239, 239, 245, 1) !important;\n}\n.y-table-stripe:nth-child(2n) {\n  background: #f9f9f9 !important;\n}\n";
styleInject(css_248z$3);

var css_248z$2 = ".y-water {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  background-repeat: repeat;\n}\n.y-water--wraper {\n  position: relative;\n}\n";
styleInject(css_248z$2);

var css_248z$1 = ".y-carousel {\n  width: 100%;\n  height: 100%;\n  min-height: 150px;\n  position: relative;\n  overflow: hidden;\n}\n.y-carousel-body {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.y-carousel-item {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  flex-shrink: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition: opacity 0.5s linear;\n}\n.y-carousel-item--img {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.y-carousel:hover .y-carousel-btn {\n  opacity: 1 !important;\n}\n.activeImg {\n  opacity: 1;\n}\n.y-carousel-dote {\n  position: absolute;\n  left: 0;\n  bottom: 10px;\n  z-index: 2;\n  width: 100%;\n  text-align: center;\n}\n.y-carousel-dote--item {\n  width: 12px;\n  height: 12px;\n  margin-left: 10px;\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n  cursor: pointer;\n}\n.y-carousel-dote--active {\n  background: #fff;\n}\n.y-carousel-btn {\n  width: 44px;\n  height: 44px;\n  background: rgba(0, 0, 0, 0.2);\n  color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  text-align: center;\n  line-height: 44px;\n  opacity: 0;\n  font-family: serif;\n  text-decoration: none;\n  transition: all 0.5s;\n}\n.prev {\n  left: 20px;\n}\n.next {\n  right: 20px;\n}\n";
styleInject(css_248z$1);

var css_248z = "";
styleInject(css_248z);

const _hoisted_1$a = ["disabled"];
var script$b = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        type: {
            type: String,
            default: "",
        },
        size: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    setup(__props) {
        const props = __props;
        const classes = computed(() => {
            if (props.type) {
                return `y-button--${props.type}`;
            }
            return "";
        });
        const size = computed(() => {
            if (props.size) {
                return `y-button--${props.size}`;
            }
            return "";
        });
        const isDisabled = computed(() => {
            if (props.disabled) {
                return "is--disabled";
            }
        });
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("button", {
                class: normalizeClass(["y-button", [unref(classes), unref(size), unref(isDisabled)]]),
                disabled: __props.disabled
            }, [
                renderSlot(_ctx.$slots, "default")
            ], 10 /* CLASS, PROPS */, _hoisted_1$a));
        };
    }
});

script$b.__file = "component/button/index.vue";

script$b.install = (app) => {
    app.component("y-button", script$b);
};

const _hoisted_1$9 = {
    key: 0,
    class: "y-dialog"
};
const _hoisted_2$3 = { class: "y-dialog_header" };
const _hoisted_3$3 = { class: "y-dialog_title" };
const _hoisted_4$2 = { class: "y-dialog_body" };
const _hoisted_5 = { class: "y-dialog_footer" };
var script$a = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        title: {
            type: String,
            default: "",
        },
        top: {
            type: String,
            default: "30vh",
        },
        width: String,
        visible: {
            type: Boolean,
            default: false,
        },
        showClose: {
            type: Boolean,
            default: true,
        },
    },
    emits: ["close"],
    setup(__props, { emit }) {
        const props = __props;
        const style = computed(() => {
            const style = {};
            if (props.width) {
                style.width = props.width;
            }
            if (props.top) {
                style.top = props.top;
            }
            return style;
        });
        watch(() => props.visible, (news) => {
            if (news) {
                document.body.classList.add("y-popup-body");
            }
            else {
                document.body.classList.remove("y-popup-body");
            }
        });
        const onClose = () => {
            emit("close");
        };
        return (_ctx, _cache) => {
            return (openBlock(), createBlock(Transition, { name: "dialog-fade" }, {
                default: withCtx(() => [
                    (__props.visible)
                        ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
                            createElementVNode("div", {
                                class: "y-dialog_box",
                                style: normalizeStyle(unref(style))
                            }, [
                                createElementVNode("div", _hoisted_2$3, [
                                    createElementVNode("span", _hoisted_3$3, toDisplayString(__props.title), 1 /* TEXT */),
                                    (__props.showClose)
                                        ? (openBlock(), createElementBlock("i", {
                                            key: 0,
                                            class: "y-dialog_close",
                                            onClick: onClose
                                        }))
                                        : createCommentVNode("v-if", true)
                                ]),
                                createElementVNode("div", _hoisted_4$2, [
                                    renderSlot(_ctx.$slots, "default")
                                ]),
                                createElementVNode("div", _hoisted_5, [
                                    renderSlot(_ctx.$slots, "footer")
                                ])
                            ], 4 /* STYLE */)
                        ]))
                        : createCommentVNode("v-if", true)
                ]),
                _: 3 /* FORWARDED */
            }));
        };
    }
});

script$a.__file = "component/dialog/index.vue";

script$a.install = (app) => {
    app.component("y-dialog", script$a);
};

const _hoisted_1$8 = { class: "y-rate" };
var script$9 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        value: {
            type: Number,
            default: 0,
        },
    },
    setup(__props) {
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1$8));
        };
    }
});

script$9.__file = "component/rate/index.vue";

script$9.install = (app) => {
    app.component("y-rate", script$9);
};

var script$8 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        type: {
            type: String,
            default: "info",
        },
        top: {
            type: Number,
            default: 20,
        },
        message: {
            type: String,
            default: "",
        },
        duration: {
            type: Number,
            default: 3000,
        },
        onDestory: Function,
        onClose: Function,
    },
    setup(__props) {
        const props = __props;
        const visible = ref(false);
        const messageStyle = computed(() => `y-message--${props.type}`);
        const close = () => {
            visible.value = false;
            setTimeout(() => {
                props.onClose && props.onClose();
                props.onDestory && props.onDestory();
            }, props.duration);
        };
        onMounted(() => {
            visible.value = true;
        });
        setTimeout(() => {
            close();
        }, props.duration);
        return (_ctx, _cache) => {
            return (openBlock(), createBlock(Transition, {
                onBeforeLeave: __props.onClose,
                onAfterLeave: __props.onDestory,
                name: "fade",
                persisted: ""
            }, {
                default: withCtx(() => [
                    withDirectives(createElementVNode("div", {
                        class: normalizeClass(["y-message", unref(messageStyle)]),
                        style: normalizeStyle({ top: `${__props.top}px` })
                    }, [
                        createElementVNode("span", null, toDisplayString(__props.message), 1 /* TEXT */)
                    ], 6 /* CLASS, STYLE */), [
                        [vShow, visible.value]
                    ])
                ]),
                _: 1 /* STABLE */
            }, 8 /* PROPS */, ["onBeforeLeave", "onAfterLeave"]));
        };
    }
});

script$8.__file = "component/message/index.vue";

const types = ["info", "success", "error", "warning"];
const instances = [];
function Message(options) {
    let top = 20;
    instances.forEach((vm) => {
        console.log(vm);
        top += vm.el.offsetHeight + 16 || 16;
    });
    const container = document.createDocumentFragment();
    const vm = h(script$8, Object.assign(Object.assign({}, options), { top,
        onClose() {
            close(vm);
        },
        onDestory() {
            render(null, container);
        } }));
    render(vm, container);
    document.body.appendChild(container);
    instances.push(vm);
}
function close(vm) {
    const index = instances.findIndex((ins) => ins === vm);
    if (index === -1)
        return;
    instances.splice(index, 1);
    for (let start = index; start < instances.length; start++) {
        const cpn = instances[start].component;
        cpn.props.top -= vm.el.offsetHeight + 16;
    }
}
Object.values(types).forEach((type) => {
    Message[type] = (options) => {
        let obj = {};
        if (typeof options === "string") {
            obj.message = options;
            obj.type = type;
        }
        else {
            obj = Object.assign(obj, options);
        }
        return Message(obj);
    };
});

const _hoisted_1$7 = { class: "y-tabs" };
var script$7 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        value: {
            type: String,
            default: "",
        },
        name: String,
    },
    setup(__props) {
        const props = __props;
        const slot = useSlots();
        const renderButton = (name, tab, index) => [
            h("div", {
                name: props.name,
                value: name,
                class: ["y-tab--item", currentTab.value === tab ? "y-tab--active" : ""],
                onClick: () => {
                    currentTab.value = tab;
                },
            }, h("div", { class: "y-tab--content" }, name)),
        ];
        const renderTab = () => h("div", { class: "y-tab--list", ref: "yTab" }, [
            slot.default &&
                slot.default().map((item, index) => {
                    var _a, _b;
                    return renderButton((_a = item.props) === null || _a === void 0 ? void 0 : _a.name, (_b = item.props) === null || _b === void 0 ? void 0 : _b.tab);
                }),
            h("div", {
                class: "y-tab--line",
                style: `width:${tabWidth.value};transform:translate(${tabLeft.value}px);position:absolute;`,
            }),
        ]);
        // const renderTab = {
        //   render() {
        //     if (slot.default) {
        //       return slot.default().map((component) => {
        //         console.log(component.children.default());
        //         return h(component);
        //       });
        //     }
        //   },
        // };
        const tabWidth = ref("0px");
        const tabLeft = ref(0);
        const currentTab = ref(props.value || "");
        ref(null);
        const getWidth = () => {
            nextTick(() => {
                var _a;
                const name = document.querySelector(".y-tab--list");
                for (let i = 0; i < name.children.length; i++) {
                    if ((_a = name.children[i].getAttribute("class")) === null || _a === void 0 ? void 0 : _a.includes("y-tab--active")) {
                        tabWidth.value =
                            Number(window.getComputedStyle(name.children[i]).width.replace("px", "")) -
                                Number(window
                                    .getComputedStyle(name.children[i])
                                    .paddingLeft.replace("px", "")) +
                                "px";
                        tabLeft.value =
                            name.children[i].offsetLeft -
                                name.offsetLeft +
                                Number(window
                                    .getComputedStyle(name.children[i])
                                    .paddingLeft.replace("px", ""));
                    }
                }
            });
        };
        watch(currentTab, (val) => {
            getWidth();
        });
        const renderContent = () => {
            return (slot.default &&
                slot.default().find((item) => {
                    var _a;
                    // 未传默认值，以以第一个为准
                    if (currentTab.value === "") {
                        return true;
                    }
                    return ((_a = item.props) === null || _a === void 0 ? void 0 : _a.tab) === currentTab.value;
                }));
        };
        onMounted(() => {
            getWidth();
        });
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1$7, [
                createVNode(renderTab),
                createVNode(renderContent)
            ]));
        };
    }
});

script$7.__file = "component/tabs/index.vue";

script$7.install = (app) => {
    app.component("y-tabs", script$7);
};

const _hoisted_1$6 = { class: "y-tab--pain" };
var script$6 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        tab: String,
        name: String,
    },
    setup(__props) {
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1$6, [
                renderSlot(_ctx.$slots, "default")
            ]));
        };
    }
});

script$6.__file = "component/tabPain/index.vue";

script$6.install = (app) => {
    app.component("y-tab-pain", script$6);
};

const _hoisted_1$5 = { class: "y-upload" };
var script$5 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        limit: {
            type: Number,
            default: 1,
        },
    },
    setup(__props) {
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1$5));
        };
    }
});

script$5.__file = "component/upload/index.vue";

script$5.install = (app) => {
    app.component("y-upload", script$5);
};

const _hoisted_1$4 = { class: "y-table-header" };
const _hoisted_2$2 = {
    key: 0,
    class: "y-table-number"
};
const _hoisted_3$2 = { class: "y-table-body" };
const _hoisted_4$1 = { key: 0 };
var script$4 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        columns: {
            type: Array,
            default: () => [],
        },
        dataSource: {
            type: Array,
            default: () => [],
        },
        border: {
            type: Boolean,
            default: false,
        },
        showNum: {
            type: Boolean,
            default: false,
        },
        stripe: {
            type: Boolean,
            default: false,
        },
    },
    setup(__props) {
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("table", {
                class: normalizeClass(['y-table', __props.border ? 'y-table-border' : 'y-table-bottom']),
                cellpadding: "0",
                cellspacing: "0"
            }, [
                createElementVNode("thead", _hoisted_1$4, [
                    createElementVNode("tr", null, [
                        (__props.showNum)
                            ? (openBlock(), createElementBlock("th", _hoisted_2$2, "序号"))
                            : createCommentVNode("v-if", true),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (item) => {
                            return (openBlock(), createElementBlock("th", {
                                key: item.key
                            }, toDisplayString(item.title), 1 /* TEXT */));
                        }), 128 /* KEYED_FRAGMENT */))
                    ])
                ]),
                createElementVNode("tbody", _hoisted_3$2, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.dataSource, (dataItem, dataIndex) => {
                        return (openBlock(), createElementBlock("tr", {
                            key: dataIndex,
                            class: normalizeClass(__props.stripe ? 'y-table-stripe' : '')
                        }, [
                            (__props.showNum)
                                ? (openBlock(), createElementBlock("td", _hoisted_4$1, toDisplayString(dataIndex + 1), 1 /* TEXT */))
                                : createCommentVNode("v-if", true),
                            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (columnItem) => {
                                return (openBlock(), createElementBlock("td", {
                                    key: columnItem.key
                                }, [
                                    (!columnItem.slots)
                                        ? renderSlot(_ctx.$slots, "default", { key: 0 }, () => [
                                            createTextVNode(toDisplayString(dataItem[columnItem.key]), 1 /* TEXT */)
                                        ])
                                        : renderSlot(_ctx.$slots, columnItem.slots, {
                                            key: 1,
                                            rowData: dataItem
                                        })
                                ]));
                            }), 128 /* KEYED_FRAGMENT */))
                        ], 2 /* CLASS */));
                    }), 128 /* KEYED_FRAGMENT */))
                ])
            ], 2 /* CLASS */));
        };
    }
});

script$4.__file = "component/table/index.vue";

script$4.install = (app) => {
    app.component("y-table", script$4);
};

const _hoisted_1$3 = { class: "y-water--wraper" };
var script$3 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        title: {
            type: String,
            default: "水印",
        },
        fullscreen: {
            type: Boolean,
            default: false,
        },
        xOffset: {
            type: Number,
            default: 20,
        },
        yOffset: {
            type: Number,
            default: 20,
        },
    },
    setup(__props) {
        const props = __props;
        const waterMark = ref(null);
        const getSize = () => {
            if (props.fullscreen) {
                return [document.body.offsetWidth / 5, document.body.offsetHeight / 4];
            }
            else {
                return [waterMark.value.offsetWidth / 4, waterMark.value.offsetHeight / 2];
            }
        };
        function warter(txt) {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            const [width, height] = getSize();
            canvas.width = width;
            canvas.height = height;
            context.fillStyle = "#9999995c";
            context.font = "20px";
            context.rotate(-0.3);
            context.fillText(txt, props.xOffset, props.yOffset);
            const img = canvas.toDataURL("image/png");
            const style = `background-image:url(${img})`;
            if (props.fullscreen) {
                document.body.setAttribute("style", style);
            }
            else {
                waterMark.value.setAttribute("style", style);
            }
        }
        onMounted(() => {
            warter(props.title);
        });
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1$3, [
                renderSlot(_ctx.$slots, "default"),
                createElementVNode("div", {
                    ref_key: "waterMark",
                    ref: waterMark,
                    class: "y-water"
                }, null, 512 /* NEED_PATCH */)
            ]));
        };
    }
});

script$3.__file = "component/waterMark/index.vue";

script$3.install = (app) => {
    app.component("y-water-mark", script$3);
};

const _hoisted_1$2 = { class: "y-carousel-body" };
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = { class: "y-carousel-dote" };
const _hoisted_4 = ["onClick"];
var script$2 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        list: {
            type: Array,
            default: [],
        },
        imgValue: {
            type: String,
            default: "",
        },
        duration: {
            type: Number,
            default: 3,
        },
        autoPlay: {
            type: Boolean,
            default: false,
        },
    },
    setup(__props) {
        const props = __props;
        const curIndex = ref(0);
        let timer = null;
        const autoPlay = () => {
            clearInterval(timer);
            timer = setInterval(() => {
                curIndex.value++;
                if (curIndex.value >= props.list.length) {
                    curIndex.value = 0;
                }
            }, props.duration * 1000);
        };
        const stop = () => {
            if (timer)
                clearInterval(timer);
        };
        const start = () => {
            if (props.list.length && props.autoPlay) {
                autoPlay();
            }
        };
        const toggle = (step) => {
            curIndex.value += step;
            // 确定右侧临界值
            if (curIndex.value >= props.list.length) {
                curIndex.value = 0;
                return;
            }
            // 确定左侧临界值
            if (curIndex.value < 0) {
                curIndex.value = props.list.length - 1;
            }
        };
        onMounted(() => {
            if (props.autoPlay) {
                autoPlay();
            }
        });
        onUnmounted(() => {
            clearInterval(timer);
        });
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", {
                class: "y-carousel",
                onMouseenter: _cache[2] || (_cache[2] = ($event) => (stop())),
                onMouseleave: _cache[3] || (_cache[3] = ($event) => (start()))
            }, [
                createElementVNode("div", _hoisted_1$2, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item, index) => {
                        return (openBlock(), createElementBlock("div", {
                            class: normalizeClass(["y-carousel-item", unref(curIndex) === index ? 'activeImg' : '']),
                            key: index
                        }, [
                            createElementVNode("img", {
                                class: "y-carousel-item--img",
                                src: __props.imgValue ? item[__props.imgValue] : item.imgUrl
                            }, null, 8 /* PROPS */, _hoisted_2$1)
                        ], 2 /* CLASS */));
                    }), 128 /* KEYED_FRAGMENT */)),
                    createElementVNode("a", {
                        href: "javascript:;",
                        class: "y-carousel-btn prev",
                        onClick: _cache[0] || (_cache[0] = ($event) => (toggle(-1)))
                    }, "<"),
                    createElementVNode("a", {
                        href: "javascript:;",
                        class: "y-carousel-btn next",
                        onClick: _cache[1] || (_cache[1] = ($event) => (toggle(1)))
                    }, ">"),
                    createElementVNode("div", _hoisted_3$1, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item, index) => {
                            return (openBlock(), createElementBlock("span", {
                                class: normalizeClass(["y-carousel-dote--item", unref(curIndex) === index ? 'y-carousel-dote--active' : '']),
                                onClick: ($event) => (curIndex.value = index),
                                key: index
                            }, null, 10 /* CLASS, PROPS */, _hoisted_4));
                        }), 128 /* KEYED_FRAGMENT */))
                    ])
                ])
            ], 32 /* HYDRATE_EVENTS */));
        };
    }
});

script$2.__file = "component/carousel/index.vue";

script$2.install = (app) => {
    app.component("y-carousel", script$2);
};

const _hoisted_1$1 = { class: "y-form" };
var script$1 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {},
    setup(__props) {
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1$1, [
                renderSlot(_ctx.$slots, "default")
            ]));
        };
    }
});

script$1.__file = "component/form/index.vue";

script$1.install = (app) => {
    app.component("y-form", script$1);
};

const _hoisted_1 = /*#__PURE__*/ createElementVNode("label", { class: "y-form-item__label" }, null, -1 /* HOISTED */);
const _hoisted_2 = { class: "y-form-item__content" };
const _hoisted_3 = { class: "y-form-item__error" };
var script = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: formItemProps,
    setup(__props) {
        const validateState = ref("");
        const validateMessage = ref("校验失败");
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", {
                class: normalizeClass(["y-form-item",
                    validateState.value === 'success'
                        ? 'success'
                        : validateState.value === 'error'
                            ? 'error'
                            : ''
                ])
            }, [
                _hoisted_1,
                createElementVNode("div", _hoisted_2, [
                    renderSlot(_ctx.$slots, "default"),
                    createElementVNode("div", _hoisted_3, toDisplayString(validateMessage.value), 1 /* TEXT */)
                ])
            ], 2 /* CLASS */));
        };
    }
});

script.__file = "component/formItem/index.vue";

const formItemProps = {
    prop: String,
    label: String,
    rules: [Object, Array],
    showMessage: {
        type: Boolean,
        default: true,
    },
    // rules: [Object, Array] as PropType<FormItemRule | FormItemRule[]>,
};
script.install = (app) => {
    app.component("y-form-item", script);
};
// index2内容
// import FormItem from "./index.vue";
// function withInstall(form: any) {}
// const FormItem = withInstall(FormItem);
// export default FormItem;
// export type { formItemProps } from "./index.ts";
// declare module "vue" {
//   export interface GlobalComponents {
//     yFormItem: typeof FormItem;
//   }
// }

// const components = [yButton];
const install = (app) => {
    app.component("y-button", script$b);
    app.component("y-dialog", script$a);
    app.component("y-rate", script$9);
    app.component("y-tabs", script$7);
    app.component("y-tab-pane", script$6);
    app.component("y-upload", script$5);
    app.component("y-table", script$4);
    app.component("y-water-mark", script$3);
    app.component("y-carousel", script$2);
    app.component("y-form-item", script);
    app.component("y-form", script$1);
    app.component("y-message");
    // components.forEach((component) => {
    //   app.component("y-button", component);
    // });
};
var index = {
    install,
    "y-button": script$b,
    "y-dialog": script$a,
    "y-rate": script$9,
    YMessage: Message,
    YTabs: script$7,
    YUpload: script$5,
    YTabPane: script$6,
    YTable: script$4,
    YWaterMark: script$3,
    YCarousel: script$2,
    YForm: script$1,
    YFormItem: script,
};

export { script$2 as YCarousel, script$1 as YForm, script as YFormItem, Message as YMessage, script$6 as YTabPane, script$4 as YTable, script$5 as YUpload, script$3 as YWaterMark, index as default, install, script$b as yButton, script$a as yDialog, script$9 as yRate };
