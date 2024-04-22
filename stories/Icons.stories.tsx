import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icons } from './Icons';

export default {
  title: 'Icons',
  component: Icons,
} satisfies Meta<typeof Icons>;

type Story = StoryObj<typeof Icons>;

export const Default: Story = {};
