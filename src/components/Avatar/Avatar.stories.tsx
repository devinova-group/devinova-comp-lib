import React, {Children} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import Avatar from "./avatar.component";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Avatar",
  component: Avatar,
  argTypes: {
    variant: {
      options: [

      ],
      control: {type: "radio"},
    },
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

export const ClickMe = Template.bind({});
ClickMe.args = {};
