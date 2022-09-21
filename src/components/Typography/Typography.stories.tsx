import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./typography.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Testing</Text>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  as: "h1",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  as: "h2",
};
