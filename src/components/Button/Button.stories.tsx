import React, {Children} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Button from "./Button.component"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["contained", "text", "outlined"],
      control: {type: "radio"},
    },
    size: {
      options: ["small", "medium", "large"],
      control: {type: "radio"},
    },
    color: {
      options: ["primary", "positive", "error"],
      control: {type: "radio"},
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "outlined",
  color: "positive",
  children: "button",
  size: "medium",
  disabled: false,
  isHover: false,
};

