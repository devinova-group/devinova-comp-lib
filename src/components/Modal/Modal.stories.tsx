import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Modal} from "./Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = () => <Modal> testing</Modal>;

export const Original = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Original.args = {};
