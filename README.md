###`Install ReactJS Windows`

Install NodeJS and NPM
Install GIT
Open terminal and type:

git --version
Followed by:

node --version
Followed by:

npm --version
Each should give versions installed on Windows.
Install React from terminal:

npm install -g create-react-app
If successful, you should be able to get version:

create-react-app --version
Create react project:

create-react-app <projectname>
Run project:

cd <projectname>
npm start
Expected output in terminal (and should auto open browser to port 3000):

Compiled successfully!

You can now view <project_name> in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://<your_ip_address>:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.

