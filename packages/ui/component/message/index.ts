import { h, render } from "vue";
import MessageCpn from "./index.vue";
const types = ["info", "success", "error", "warning"];
const instances = [] as any;

function Message(options: any) {
  let top = 20;
  instances.forEach((vm: any) => {
    console.log(vm);
    top += vm.el.offsetHeight + 16 || 16;
  });
  const container = document.createDocumentFragment();
  const vm = h(MessageCpn, {
    ...options,
    top,
    onClose() {
      close(vm);
    },
    onDestory() {
      render(null, container as any);
    },
  });
  render(vm, container as any);
  document.body.appendChild(container);
  instances.push(vm);
}
function close(vm: any) {
  const index = instances.findIndex((ins: any) => ins === vm);
  if (index === -1) return;
  instances.splice(index, 1);
  for (let start = index; start < instances.length; start++) {
    const cpn = instances[start].component;
    cpn.props.top -= vm.el.offsetHeight + 16;
  }
}
Object.values(types).forEach((type: any) => {
  Message[type] = (options: any) => {
    let obj = {} as any;
    if (typeof options === "string") {
      obj.message = options;
      obj.type = type;
    } else {
      obj = Object.assign(obj, options);
    }
    return Message(obj);
  };
});
export default Message;
