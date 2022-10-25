import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {
  Login,
  Logout,
  Eject,
  Audio,
  Badge,
  Bold,
  Bolt,
  Bookmark,
  Box,
  Brush,
  Delete,
  Dollar,
  ErrorLoading,
  Eye,
  Fire,
  Flag,
  Minus,
  Plus,
  SuccessLoading,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/newIcon",
  component: Eject,
} as ComponentMeta<typeof Eject>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Eject> = (args) => (
  <>
    <Logout />
    <Login {...args} />
    <Eject {...args} />
    <Audio {...args} />
    <Badge {...args} />
    <Bold {...args} />
    <Bolt {...args} />
    <Bookmark {...args} />
    <Box {...args} />
    <Brush {...args} />
    <Delete {...args} />
    <Dollar {...args} />
    <ErrorLoading {...args} />
    <Eye {...args} />
    <Fire {...args} />
    <Flag {...args} />
    <Minus {...args} />
    <Plus {...args} />
    <SuccessLoading {...args} />
    <ChevronDown {...args} />
    <ChevronLeft {...args} />
    <ChevronRight {...args} />
    <ChevronUp {...args} />
  </>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  fill: "green",
  width: 24,
};
