import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import BottomNav from "./BottomNav"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/BottomNav",
  component: BottomNav,

} as ComponentMeta<typeof BottomNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomNav> = (args) => <BottomNav {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  
};
