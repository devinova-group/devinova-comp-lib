import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Textfield from "./Textfield";

export default {
  title: "ReactComp/Textfield",
  component: Textfield,
} as ComponentMeta<typeof Textfield>;

const Template: ComponentStory<typeof Textfield> = (args) => <Textfield {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant:"primary",
  size: "medium",
};

export const Error = Template.bind({});
Error.args = {
  variant:"error",
  size: "small"
};

export const Border = Template.bind({});
Border.args = {
  variant:"border",
  size: "large"
};

export const Filled = Template.bind({});
Filled.args = {
  variant:"filled",
  size: "medium"
};