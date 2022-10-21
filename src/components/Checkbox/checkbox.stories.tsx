import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox, CheckboxProps } from './checkbox'





export default {
  argTypes: {
    description: {
      control: false,
    },
  },
  component: Checkbox,
  title: "ReactComp/Checkbox",
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (props) => (
  <Checkbox {...props} />
)

const MultipleItemsTemplate: ComponentStory<typeof Checkbox> = (props) => {
  function getProps(i: number): CheckboxProps {
    return {
      ...props,
    }
  }

  return (
    <>
      <Checkbox {...getProps(1)} />
      <Checkbox {...getProps(2)} />
      <Checkbox defaultChecked {...getProps(3)} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  id: undefined,

}

export const Checked = Template.bind({})
Checked.args = {
  id: undefined,
  defaultChecked: true,


}

export const Disabled = Template.bind({})
Disabled.storyName = 'Disabled, unchecked'
Disabled.args = {
  id: undefined,
  isDisabled: true,
}
export const DisabledChecked = Template.bind({})
DisabledChecked.storyName = 'Disabled, checked'
DisabledChecked.args = {
  id: undefined,
  isDisabled: true,
  defaultChecked: true,
}

