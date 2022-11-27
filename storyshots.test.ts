import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

initStoryshots({ 
    suite: 'Puppeteer storyshots', 
    configPath: 'storybook-static',
    test: imageSnapshot({
        storybookUrl: "http://localhost:8080",
        setupTimeout: 60000,
        testTimeout: 60000,
    }) 
})