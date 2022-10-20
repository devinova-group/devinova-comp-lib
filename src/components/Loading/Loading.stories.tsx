import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loader from "./Loader.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Loader",
  component: Loader,
  argTypes:{
    progress:{
     options:['success', 'error', ],
      control:  {type: 'radio'} 
    }
  }
} as ComponentMeta<typeof Loader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  progress:"success",
};


