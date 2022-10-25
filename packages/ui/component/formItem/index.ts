import type { App, ExtractPropTypes, PropType } from "vue";
import FormItems from "./index.vue";
import type { RuleItem } from "async-validator";
export type Arrayable<T> = T | T[];
export interface FormItemRule extends RuleItem {
  // trigger?: string | string[];
  trigger?: Arrayable<string>;
}
export const formItemProps = {
  prop: String,
  label: String,
  rules: [Object, Array] as PropType<Arrayable<FormItemRule>>,
  showMessage: {
    type: Boolean,
    default: true,
  },
  // rules: [Object, Array] as PropType<FormItemRule | FormItemRule[]>,
} as const;
export const formValidateState = ["success", "error", ""] as const;
export type FormValidateState = typeof formValidateState[number];
export type FormItem = Partial<ExtractPropTypes<typeof formItemProps>>;
FormItems.install = (app: App) => {
  app.component("y-form-item", FormItems);
};

export default FormItems;

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
