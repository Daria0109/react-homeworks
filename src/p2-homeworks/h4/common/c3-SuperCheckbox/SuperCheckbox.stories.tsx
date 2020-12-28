import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import SuperCheckbox from './SuperCheckbox';
import {action} from '@storybook/addon-actions';


export default {
  title: 'Homeworks/SuperCheckbox',
  component: SuperCheckbox
} as Meta;

const Template: Story<{}> = (args) => <SuperCheckbox {...args}/>;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  children: 'checked SuperCheckbox'
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  children: 'unchecked SuperCheckbox'
};

export const Changed = Template.bind({});
Changed.args = {
  onChangeChecked: action('checkbox was changed')
};