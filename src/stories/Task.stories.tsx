import React from "react";
import Task, { TaskProps } from "./Task";
import { Meta, Story } from "@storybook/react";

export default {
  component: Task,
  title: '组件task'
} as Meta;



const Template: Story<TaskProps> = (args) => {
  return <Task value={args?.value}/>
}

export const Default = Template.bind({});

Default.args = {
  value: 'zhangsan',
}
