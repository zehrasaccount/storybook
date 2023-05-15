import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
  
};
export const button_uploads: Story = {
  args: {
    backgroundColor: 'green',
    label: 'Uploads',
  },
  
};
export const button_update_forecasts: Story = {
  args: {
    backgroundColor: 'green',
    label: 'Update Forecasts',
  },
  
};
export const button_remove: Story = {
  args: {
    backgroundColor: 'red',
    label: 'Remove All Locks',
  },
  
};
export const button_save: Story = {
  args: {
    backgroundColor: 'green',
    label: 'Save İcon Here',
  },
  
};
export const button_lock: Story = {
  args: {
    backgroundColor: 'gray',
    label: 'Lock Icon Here',
    
  },
  
};


