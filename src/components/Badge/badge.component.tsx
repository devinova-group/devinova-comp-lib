import * as React from 'react';
import { BadgeProps } from './badge.component.types';
import { BadgeComponent } from './badge.component.styles';

  const Badge = ({
  variant,
  style,
  children
  }:  BadgeProps ) => {
	
	return(

  <BadgeComponent
  variant = {variant}
  style={style}
  >
   {children=variant}
  </BadgeComponent>

	);
  }
  
  export default Badge