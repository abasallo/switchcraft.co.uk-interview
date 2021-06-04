# Switchcraft code test

## Requirements

- Node 14.17.0: https://nodejs.org/en/
- Yarn: `npm i -g yarn`
- The latest version of Docker to run the app: https://www.docker.com/products/docker-desktop

## Setup

- Create a new private repository on github
- Clone the interview repository locally: `git clone git@github.com:SwitchcraftUK/interview.git`
- Open the repository directory in your terminal
- Delete the git folder `rm -rf ./.git`
- Initialize git again `git init`
- Add the remote to your new private repository `git remote add origin git@github.com:{YOURNAME}/{REPONAME}.git`
- Stage the original code `git add .`
- Commit the original code `git commit -m "original code"`
- Push the existing code to your new private repository `git push origin master`
- Create a new branch `git checkout -b code-test`
- Install the dependencies: `yarn`
- Start the app: `yarn start`

## The task

This system shows energy deals to the user. The system is set up to work with one energy supplier, Big Green Energy, but we have recently got access to new deals from Shiny Yellow Energy. We want to let the user see these deals!

Your tasks are:
- Under the fixed duration label, add another feature label "Green Energy". This should only be shown if the deal is a green deal.
- The UI is only currently displaying deals for Big Green Energy. There is another collection in the database called "shinyYellowEnergyDeals". This contains deals provided by Shiny Yellow Energy. Your task is to change the system so these deals are shown on the frontend. The deals should be displayed with the cheapest first and most expensive last.

Once you've completed the task, open a pull request to the master branch with your changes. Then, open the GitHub repository in the GitHub UI, go to Settings -> Manage Access, and invite chrisberry4545 as a collaborator.

### Other useful scripts

- You can run the existing unit and integration tests with `yarn test`
- The existing end to end tests can be run with `yarn test:e2e` or `yarn test:e2e:docker`

### Hints

- Don't worry about the styling of the app, this is out of scope for these changes.
- If you're unsure on how to tackle a part you may find inspiration in other parts of the app.
- Feel free to google anything you're not sure about.
- Think about how you might validate what you've done is correct?
- Email chris.berry@switchcraft.co.uk if you get really stuck with something.
