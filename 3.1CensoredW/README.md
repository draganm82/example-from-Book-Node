This file is used to censored text with *** stars symbol 
Publishing a Node.js Packaged Module to the NPM
Registry
In the previous section you created a local Node.js Packaged Module using the
npm pack command. You can also publish that same module to the NPM
repository at http://npmjs.com/.
When modules are published to the NPM registry, they are accessible to
everyone using the NPM manager utility discussed earlier. This allows you to
distribute your modules and applications to others more easily.
The following steps describe the process of publishing the module to the NPM
registry. These steps assume that you have completed steps 1 through 5 from the
previous section:
1. Create a public repository to contain the code for the module. Then push
the contents of the .../censorify folder up to that location. The
following is an example of a Github repository URL:
https://github.com/username/projectname/directoryName/ch03/2. Create an account at https://npmjs.org/signup.
3. Use the npm adduser command from a console prompt to add the user
you created to the environment.
4. Type in the username, password, and email that you used to create the
account in step 2.
5. Modify the package.json file to include the new repository
information and any keywords that you want made available in the registry
search as shown in lines 7–14 in Listing 3.3.
Listing 3.3 package.json: Defining the Node.js module that includes the
repository and keywords information
6. Publish the module using the following command from the .../censor
folder in the console:
npm publish
Once the package has been published you can search for it on the NPM registry
and use the npm install command to install it into your environment.
To remove a package from the registry make sure that you have added a user
with rights to the module to the environment using npm adduser and then
execute the following command:
npm unpublish <project name>
For example, the following command unpublishes the censorify module:
npm unpublish censorify
In some instances you cannot unpublish the module without using the --force
option. This option forces the removal and deletion of the module from the
registry. For example:
npm unpublish censorify --force
