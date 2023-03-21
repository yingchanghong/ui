import type { App, ExtractPropTypes, PropType } from "vue";
import FormItems from "./index.vue";
import type { RuleItem } from "async-validator";
export type Arrayable<T> = T | T[];
export interface FormItemRule extends RuleItem {
  // trigger?: string | string[];
  trigger?: Arrayable<string>;
}

export const formValidateState = ["success", "error", ""] as const;
export type FormValidateState = typeof formValidateState[number];
FormItems.install = (app: App) => {
  app.component("y-form-item", FormItems);
};

export default FormItems;

// index2内容
// import FormItem from "./index.vue";
// function withInstall(form: any) {}

// const FormItem = withInstall(FormItem);
// export default FormItem;

