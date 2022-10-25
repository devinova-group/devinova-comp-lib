import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Plus } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/newIcon",
  component: Plus,
} as ComponentMeta<typeof Plus>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Plus> = (args) => <Plus {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  fill:"green",
  width:24,
};

