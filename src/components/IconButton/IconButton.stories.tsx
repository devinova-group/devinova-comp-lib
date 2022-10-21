import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "./IconButton";
import { Plus } from "../../../IconAssets";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/IconButton",
  component: IconButton,
  argTypes:{
    variant:{
      options:['primary', 'error', 'positive'],
      control:  {type: 'radio'}
    },
  }
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton 
{...args} > 

</IconButton>
;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant:"primary",
  size:"medium",
  color:"white",

};

