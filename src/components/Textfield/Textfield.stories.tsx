import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Textfield from "./Textfield";

export default {
  title: "ReactComp/Textfield",
  component: Textfield,
} as ComponentMeta<typeof Textfield>;

const Template: ComponentStory<typeof Textfield> = (args) => <Textfield {...args} />;

export const textfield = Template.bind({});
textfield.args = {
  variant:"primary",
  inputSize: "medium",
  type: 'text'
};
export const disabled = Template.bind({});
disabled.args = {
  variant:"primary",
  inputSize: "medium",
  type: 'text',
  disabled: true
};
export const search = Template.bind({});
search.args = {
  variant:"primary",
  inputSize: "medium",
  type: 'search',
};
export const textarea = Template.bind({});
textarea.args = {
  variant:"textarea",
  inputSize: "medium",
  as: "textarea"
};
