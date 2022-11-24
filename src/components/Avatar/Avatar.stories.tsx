import React, {Children} from "react";
import {ComponentStory, ComponentMeta, storiesOf} from "@storybook/react";

import {Avatar} from "./avatar.component.styles"
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComp/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Avatars: ComponentStory<typeof Avatar> = (args) => {
  return (
    <div className="story__avatar">
      <Avatar />
      <br></br>
      <Avatar
      userName="Ting Wang"
      {...args}
      />
      <br></br>
      <Avatar
        src="./fluffycat.jpg"
        {...args}
      />
    </div>
  );
};

export const Primary = Avatar.bind({});

Primary.args = {
userName: "Max TIm Niko",

}