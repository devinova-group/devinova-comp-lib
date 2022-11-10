import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DialogTest } from "./DialogTesting";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Dialog",
  component: DialogTest,
} as ComponentMeta<typeof DialogTest>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DialogTest> = () => <DialogTest />;

export const Original = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Original.args = {};
