import React, {useState} from "react";
import {Card} from "./Card";
import {CardContent} from "./CardContent";
import {CardHeader} from "./CardHeader";
import {Collapse} from "./Collapse";

interface testprops {
  dark: boolean;
  raised: boolean;
}

export const CardTest = ({dark, raised}: testprops) => {
  return (
    <Card raised={raised} dark={dark}>
      <CardHeader
        title="testing"
        subheader="123"
        titleTypographyProps="h1Neucha"
      />
      <CardContent>
        <Collapse
          width={250}
          title={"Testing Title Testing Title Testing Title"}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae non
          perspiciatis, voluptatibus necessitatibus obcaecati sed recusandae
        </Collapse>
      </CardContent>
    </Card>
  );
};
