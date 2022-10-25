import React, {useState} from "react";
import {Card} from "./Card";
import {CardContent} from "./CardContent";
import {CardHeader} from "./CardHeader";
import {CardMedia} from "./CardMedia";
import {Collapse} from "./Collapse";

const image = {
  src: "/components/Cards/CardMedia/testing.jpg",
};

interface testprops {
  dark: boolean;
  raised: boolean;
}

export const CardTest = ({dark, raised}: testprops) => {
  const [open, setOpen] = useState(false);

  return (
    <Card raised={raised} dark={dark}>
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
        <Collapse
          width={250}
          title={"Testing Title Testing Title Testing Title"}
          open={open}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae non
          perspiciatis, voluptatibus necessitatibus obcaecati sed recusandae
        </Collapse>
      </CardContent>
    </Card>
  );
};
