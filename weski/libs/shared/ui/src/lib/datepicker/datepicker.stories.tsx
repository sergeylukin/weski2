import { Story, Meta } from '@storybook/react';
import { Datepicker, DatepickerProps } from './datepicker';

export default {
  component: Datepicker,
  title: 'Datepicker',
  argTypes: {
    onStartDateSelect: { action: 'onStartDateSelect executed!' },
    onEndDateSelect: { action: 'onEndDateSelect executed!' },
  },
} as Meta;

const Template: Story<DatepickerProps> = (args) => <Datepicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
