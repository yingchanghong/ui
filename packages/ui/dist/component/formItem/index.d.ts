import type { ExtractPropTypes, PropType } from "vue";
import FormItems from "./index.vue";
import type { RuleItem } from "async-validator";
export declare type Arrayable<T> = T | T[];
export interface FormItemRule extends RuleItem {
    trigger?: Arrayable<string>;
}
export declare const formItemProps: {
    readonly prop: StringConstructor;
    readonly label: StringConstructor;
    readonly rules: PropType<Arrayable<FormItemRule>>;
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare const formValidateState: readonly ["success", "error", ""];
export declare type FormValidateState = typeof formValidateState[number];
export declare type FormItem = Partial<ExtractPropTypes<typeof formItemProps>>;
export default FormItems;
