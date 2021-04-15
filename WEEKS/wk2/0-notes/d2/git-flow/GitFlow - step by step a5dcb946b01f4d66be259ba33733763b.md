# GitFlow - step by step

### Theses are the steps that you will be doing DAILY for your projects here at Lambda school.

1. Create YOUR OWN version of Repo —> (Fork)

    ![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Annotation_2020-07-21_164208.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Annotation_2020-07-21_164208.png)

    Click the Fork Button to fork the Repo

2. Your name should now be in front of the repo name before the slash '/' if forking is successful

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-2019-12-01-00_24_10.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-2019-12-01-00_24_10.png)

Notice it says 'forked from' and then has a link to the original Repo.

3. Clone your Repo using githubs 'Clone or download' button

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-2019-12-01-00_24_10%201.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-2019-12-01-00_24_10%201.png)

Click the button

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-2019-12-02-00_24_32.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-2019-12-02-00_24_32.png)

Here you can either highlight the link and copy the text OR click Clipboard icon on the right and that will copy the link as well.

4. Back inside your CLI, use the **cd** command to go to the directory where you are going to want to clone your forked Repo (i.e. The location where the repo should be saved on your computer)

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Untitled1.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Untitled1.png)

Notice I am in the directory **Documents/Git**, this could be different for you depending on where you want your repo to be cloned to.

5. Use the **git clone <link-to-repo>** command to clone the repo to the directory you are currently in.

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Untitled1%201.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Untitled1%201.png)

6. **cd** into the newly created repo using the **cd <repo-name>** command

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Untitled1%202.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Untitled1%202.png)

7. Use the **git checkout -b 'firstname-lastname'** command to create your own branch name for the repo (this is the branch that you will be doing your work on)

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Untitled1%203.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Untitled1%203.png)

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Untitled1%204.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/Untitled1%204.png)

notice how after I checkout the branch name changes from **master** to **Miley-Wright**

8. Now you can work on your repo and start getting the project assignment done.

9. To add and commit changes on your branch you can do the following

- **git add .** will add the repo changes and make them ready for committing
- **git commit -m "Your helpful commit message here"** will commit the changes with your specified commit message (commit message should explain what changes you've added to the repo that you are committing)

10. Push your changes back up to your Github repo

- **git push -u origin branch-name** will push all of your commits from your local machine up onto github
- Remember that **branch-name** here will be whatever name you specified when you did **git checkout -b** (in the case it should be your firstname-lastname)

11. Now that the changes are on github you can submit a PR (Pull Request)

12. Go back to your forked Project repo on github (make sure you are on YOUR FORKED copy NOT the original Lambda one)

- Click on the **Branch:master** button on the left side (see picture)

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-2019-12-01-00_24_10%202.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-2019-12-01-00_24_10%202.png)

- This will create a dropdown where you should be able to select your name-branch now
- Click your name-branch and then click the **New pull request** button to make a pull request on your name branch

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-tree-Miley-Wright-2019-12-02-01_39_48.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-tree-Miley-Wright-2019-12-02-01_39_48.png)

- After you click new pull request it should redirect you to the pull request page
- IT IS IMPORTANT THAT YOU DO NOT CLICK THE **Create pull request** BUTTON UNTIL AFTER YOU'VE COMPLETED THE NEXT STEP

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-LambdaSchool-Git-for-Web-Development-Project-compare-master-MileyWright-Miley-Wright-2019-12-02-01_46_10.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-LambdaSchool-Git-for-Web-Development-Project-compare-master-MileyWright-Miley-Wright-2019-12-02-01_46_10.png)

- When you get to the PR page, make sure to click the dropdown button that says **base repository** and CHANGE it to be your FORKED REPO instead of the original Lambda repo (when submitting PR it will default to the original Repo this is why it needs to be changed)

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-LambdaSchool-Git-for-Web-Development-Project-compare-master-MileyWright-Miley-Wright-2019-12-02-01_46_38.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-LambdaSchool-Git-for-Web-Development-Project-compare-master-MileyWright-Miley-Wright-2019-12-02-01_46_38.png)

Make sure to change to base repository before Creating the pull request

13. After changing the base repository it should look more like this

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-compare-master-MileyWright-Miley-Wright-2019-12-02-01_47_06.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-compare-master-MileyWright-Miley-Wright-2019-12-02-01_47_06.png)

[1](http://15.DO)4. Click Create Pull Request

![GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-pull-2-2019-12-02-07_55_16.png](GitFlow%20-%20step%20by%20step%20a5dcb946b01f4d66be259ba33733763b/screencapture-github-MileyWright-Git-for-Web-Development-Project-pull-2-2019-12-02-07_55_16.png)