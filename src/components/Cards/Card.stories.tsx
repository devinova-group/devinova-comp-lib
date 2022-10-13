import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Toast",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <>
    <Card {...args} />
  </>
);

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  content: "This is a success toast",
  variant: "success",
};
export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  content: "This is a error toast",
  variant: "error",
};
export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  content: "This is a warning toast",
  variant: "warning",
};
export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  content: "This is a info toast",
  variant: "info",
};
