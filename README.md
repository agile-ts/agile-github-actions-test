# Wished Workflow

- **1** Edit Packages in Branch develop
- **2** Create Issue wich represent the Version increase
- **3** Entter a comment in the before created issue like '/create release [branch]' 
     - **3.1** Increases the Version count in the packages that have updated
     - **3.2** Creates new branch from [branch] and creates a Pull Request called after the new Version
     - **3.3** Tests the whole Project
- **4** Merge the Pull Request into master
     - **4.1** Checks if Tag with version exists, if so exit
     - **4.2** Creates new Release and Tag called after the version
     - **4.3** Puplishes Packages to npm that version has changed compared on the last release
   
# Options

## [Changeset][1]
- **1** Edit Packages in Branch develop
- **2** Type Command 'yarn changeset' in the wished [branch]
     - **2.1** It does list all branches in the cmd and shows which branches have changed
     - **2.2** Select the branches whose version has to be updated
     - **2.3** It gives you the option of (major, minor, patch) version bumps
     - **2.4** Enter a summory
     - **2.5** Confirm selection
     - This creates a file in the '.changeset' folder that includes all the changes wished version changes
- **3** Merge the [branch] into the master
     - **3.1** Creates new branch based called 'changesets/release'
     - **3.2** Updates the version based on the generated file in '.changeset'
     - **3.3** Creates pull request back into the master
     - **3.4** 

[1]: https://github.com/changesets/action



