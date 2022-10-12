import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./SvgIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  iconName:"plus",
  color:"green"
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  color:"green"
};
