import React from 'react';
import {Meta, Story} from '@storybook/react';
import HW12 from './HW12'
import {StoreProviderDecorator} from './StoreProviderDecorator';


export default {
  title: 'Homeworks/HW12',
  component: HW12,
  decorators: [StoreProviderDecorator]
} as Meta;


const Template: Story<{}> = (args) => <HW12/>


export const ColorThemes = Template.bind({});
ColorThemes.args = {
};