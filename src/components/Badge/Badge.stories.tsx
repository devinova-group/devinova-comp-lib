import React, { Children } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "./badge.component";
import { badgeVariant } from "./badge.component.styles";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Badge",
  component: Badge,
  argTypes:{
    variant:{
      options:['Active', 'InActive', 'Error', 'Disabled', 'Primary', 'Secondary', 'Default', 'Selected'],
      control:  {type: 'radio'}
    }
  }
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant:
   'Active'
  ,
  children:"children",
   
};

export const ClickMe = Template.bind({});
ClickMe.args = {

};
