import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SuperButton from './SuperButton';
import {action} from '@storybook/addon-actions';


export default {
  title: 'Homeworks/SuperButton',
  component: SuperButton,
} as Meta;

const Template: Story<{}> = (args) => <SuperButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  onClick: action('Button was clicked')
};

export const WithStyle = Template.bind({});
WithStyle.args = {
  buttonStyle: true,
  children: 'Button',
  onClick: action('Button was clicked')
};
