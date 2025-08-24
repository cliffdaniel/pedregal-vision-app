import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: ["../src/components/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook"
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {}
    },
    staticDirs: ["../public"],
    webpackFinal: async (config) => {
        if (config?.performance) {
            config.performance.hints = false;
            config.performance.maxEntrypointSize = 5120000;
            config.performance.maxAssetSize = 5120000;
        }
        return config;
    }
};

export default config;
