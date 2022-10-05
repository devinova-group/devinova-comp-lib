import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toast } from "./Toast";
import ToastPortal from "./ToastPortal";
import { Testing } from "./testingToast";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Toast",
  component: Testing,
} as ComponentMeta<typeof Testing>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Testing> = (args) => (
  <>
    <Testing {...args} />
  </>
);

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  content: "This is a success toast",
  variant: "success",
  position: "top-right",
  autoClose: true,
  autoCloseTime: 5000,
};
export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  content: "This is a error toast",
  variant: "error",
  position: "bottom-right",
  autoClose: true,
  autoCloseTime: 5000,
};
export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  content: "This is a warning toast",
  variant: "warning",
  position: "bottom-center",
  autoClose: true,
  autoCloseTime: 5000,
};
export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  content: "This is a info toast",
  variant: "info",
  position: "bottom-left",
  autoClose: true,
  autoCloseTime: 5000,
};
