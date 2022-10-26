import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {RadioButton} from "./radio";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Radio = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Radio.args = {
  variant: "filled",
  label: "Default",
};
export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  variant: "disabled",
  label: "Default",
  disabled: true,
};
