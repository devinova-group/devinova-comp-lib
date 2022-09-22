import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "./typography.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>Testing</Typography>
);

export const h1Neucha = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
h1Neucha.args = {
  variant: "h1Neucha",
};

export const h2QS = Template.bind({});
h2QS.args = {
  variant: "h2QS",
};

export const NoVariantTest = Template.bind({});
NoVariantTest.args = {};
