import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icons } from './Icons';

export default {
  title: 'Icons',
  component: Icons,
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const Default = Template.bind({});
Default.args = {};