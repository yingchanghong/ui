import FormItems from "./index.vue";
import type { RuleItem } from "async-validator";
export declare type Arrayable<T> = T | T[];
export interface FormItemRule extends RuleItem {
    trigger?: Arrayable<string>;
}
export declare const formValidateState: readonly ["success", "error", ""];
export declare type FormValidateState = typeof formValidateState[number];
export default FormItems;
