import type { Meta, StoryObj } from "@storybook/react";
import { DarkModeToggle } from "./DarkModeToggle";

const meta: Meta<typeof DarkModeToggle> = {
  title: "Theme/DarkModeToggle",
  component: DarkModeToggle,
};
export default meta;

type Story = StoryObj<typeof DarkModeToggle>;

export const Default: Story = {
  args: {},
};
