# Batect Architecture Diagrams

This is an easy way for you to set up Storybook storyshots as visual regression tests.
 
You can use it like this:
 
`batect.yml`
```yml
include:
  - type: git
    repo: git@github.com:compoze-labs/batect-storyshots.git
    ref: 1.0.0 # or other tagged version in the repo
```
> You will need to have an SSH identity set up for cloning this repo in `compoze-labs` organization 

And then in your terminal:
```bash
# if using npm
./batect storyshots-init --npm

# if using pnpm
./batect storyshots-init --pnpm
```
 
 This will dump the following files:
 ```bash
src/storyshots.test.ts
 ```

 And install the following packages:
 ```
@storybook/addon-storyshots
@storybook/addon-storyshots-puppeteer
 ```

## What is batect?
https://batect.dev/docs/

## How to include batect in your project
```
wget https://github.com/batect/batect/releases/download/<version>/batect 
chmod +x batect
touch batect.yml
```
