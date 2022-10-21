import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardHeader } from "./CardHeader";
import { CardMedia } from "./CardMedia";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const image = {
  src: "/components/Cards/CardMedia/testing.jpg",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <CardHeader
      title="testing"
      subheader="123"
      titleTypographyProps="h1Neucha"
    />
    <CardMedia
      component="iframe"
      height={151}
      width={151}
      src={image.src}
      alt="Live from space album cover"
    />
    <CardContent>
      <div>test</div>
      <div>test</div>
    </CardContent>
  </Card>
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
