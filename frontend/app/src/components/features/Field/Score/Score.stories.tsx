import type { Meta, StoryObj } from '@storybook/react';
import { Score, ScoreProps } from './Score';

const meta: Meta<typeof Score> = {
  component: Score,
};

export default meta;
type Story = StoryObj<typeof Score>;

export const Basic: Story = (args: ScoreProps) => {
  return <Score {...args} />;
};

Basic.args = {
  score: 12345,
};
