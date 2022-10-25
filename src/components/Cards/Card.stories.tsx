import React, {useRef} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {CardTest} from "./CardTest";
import {Card} from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardTest> = (args) => (
  <CardTest {...args} />
);

export const Raised = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Raised.args = {
  raised: true,
  dark: false,
};
export const UnRaised = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnRaised.args = {
  raised: false,
  dark: true,
};
