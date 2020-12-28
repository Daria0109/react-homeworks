import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import SuperInputText from './SuperInputText';


export default {
  title: 'Homeworks/SuperInputText',
  component: SuperInputText,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<{}> = (args) => <SuperInputText {...args}/>;

export const Default = Template.bind({});
Default.args = {
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Error'
};
