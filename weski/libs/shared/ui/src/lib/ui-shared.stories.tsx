import { Story, Meta } from '@storybook/react';
import { UiShared, UiSharedProps } from './ui-shared';

export default {
  component: UiShared,
  title: 'UiShared',
} as Meta;

const Template: Story<UiSharedProps> = (args) => <UiShared {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
