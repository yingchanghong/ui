declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    width: StringConstructor;
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    width: StringConstructor;
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    top: string;
    visible: boolean;
    showClose: boolean;
}>;
export default _default;
