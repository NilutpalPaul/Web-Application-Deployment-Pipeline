# Web-Application-Deployment-Pipeline

This project is a basic web application deployment pipeline using Azure DevOps. It demonstrates how to build, test, and deploy a simple web application to Azure App Service.

# Technologies Used:

Programming Language: Node.js (you can choose any other programming language)

Source Control: Git (GitHub or Azure Repos)

Build: npm (Node Package Manager)

Test: Mocha and Chai (for unit testing)

Deployment: Azure App Service

# Azure DevOps Components:

Azure Repos: Git repository to store the source code.

Azure Pipelines: To create CI/CD pipelines.

Azure App Service: To host the web application.

# Source Code

index.js

![image](https://github.com/NilutpalPaul/Web-Application-Deployment-Pipeline/assets/85864155/1f0e1d99-aeb4-4eba-aa34-027e5e82904a)

app.js

![image](https://github.com/NilutpalPaul/Web-Application-Deployment-Pipeline/assets/85864155/893d4446-058b-4fdf-8b5e-4ad4d92c5d20)

test.js

![image](https://github.com/NilutpalPaul/Web-Application-Deployment-Pipeline/assets/85864155/7ff1f599-4519-4e18-bf9c-48c756ea36d8)

package.json

![image](https://github.com/NilutpalPaul/Web-Application-Deployment-Pipeline/assets/85864155/56ad3181-12b4-4cd1-8ff7-99cdc5efe1f2)


With this code, you can run the unit tests using Mocha and Chai with the following command:

bash-> "npm test"

And you can start the web application with:

sql-> "npm start"

Please make sure to run npm install first to install the necessary dependencies.

# YAML Pipeline

azure-pipeline.yml

![image](https://github.com/NilutpalPaul/Web-Application-Deployment-Pipeline/assets/85864155/1b44f6c3-ce95-480c-a9e3-7fec52ce5b3a)

# Output:

Upon triggering a new commit or pull request to the main branch, the pipeline will run the following steps:

-> Install Node.js.

-> Install project dependencies and run unit tests.

-> If the tests pass, create an artifact by archiving the source code.

-> Publish the artifact to Azure DevOps so it can be used for deployment.

The CI/CD pipeline in Azure DevOps will run these tests and deploy the application to Azure App Service.
