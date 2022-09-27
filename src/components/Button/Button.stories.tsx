import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant:"primary",
  children:"Button",
  size:"medium"
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  size:"large",
};
