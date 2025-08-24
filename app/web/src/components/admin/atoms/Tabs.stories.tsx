import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Admin/Atoms/Tabs',
    component: Tabs,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => (
        <Tabs defaultValue="tab1">
            <TabsList>
                <TabsTrigger value="tab1">Tab One</TabsTrigger>
                <TabsTrigger value="tab2">Tab Two</TabsTrigger>
                <TabsTrigger value="tab3">Tab Three</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">This is content for Tab One</TabsContent>
            <TabsContent value="tab2">This is content for Tab Two</TabsContent>
            <TabsContent value="tab3">This is content for Tab Three</TabsContent>
        </Tabs>
    ),
};
