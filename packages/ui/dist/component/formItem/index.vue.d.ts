declare const _default: import("vue").DefineComponent<{
    readonly prop: StringConstructor;
    readonly label: StringConstructor;
    readonly rules: import("vue").PropType<import("./index").Arrayable<import("./index").FormItemRule>>;
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly prop: StringConstructor;
    readonly label: StringConstructor;
    readonly rules: import("vue").PropType<import("./index").Arrayable<import("./index").FormItemRule>>;
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly showMessage: boolean;
}>;
export default _default;
