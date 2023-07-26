var express = require('express');
var router = express.Router();



const itemlist = [
  { 'id': 'ID', 'Term': 'Term', 'Description': 'Description', 'Reference': 'R'},
  { 'id': 1, 'Term': 'Continuous Integration (CI)', 'Description': 'Continuous Integration is a software development practice in which code changes are frequently and automatically integrated into a shared repository. Developers regularly merge their code into the main branch, triggering automated tests and build processes to detect integration issues early in the development cycle.', 'Reference': 'Martin Fowler. "Continuous Integration." Martin Fowlers website. URL:https://martinfowler.com/articles/continuousIntegration.html'},
  { 'id': 2, 'Term': 'Continuous Deployment (CD)', 'Description': 'Continuous Deployment is an extension of Continuous Integration, where code changes that pass all automated tests are automatically deployed to production environments. This practice aims to deliver software updates to users as soon as they are ready, ensuring a continuous flow of changes and improvements.', 'Reference': 'ThoughtWorks. "Continuous Deployment." ThoughtWorks Insights.URL: https://www.thoughtworks.com/continuous-deployment'},
  { 'id': 3, 'Term': 'Infrastructure as Code (IaC)', 'Description': 'Infrastructure as Code is a DevOps practice that involves managing and provisioning infrastructure resources (e.g., servers, networks, and storage) using machine-readable definition files. This approach allows developers to treat infrastructure configurations as code, enabling versioning, automated deployments, and consistency across environments.', 'Reference': 'HashiCorp. "Infrastructure as Code (IaC) - What, Why, and How." HashiCorp Learn.URL: https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code'},
  { 'id': 4, 'Term': 'Microservices', 'Description': 'Microservices is an architectural pattern where a software application is broken down into small, loosely-coupled, and independently deployable services. Each service focuses on a specific functionality and communicates with others through well-defined APIs. This approach promotes flexibility, scalability, and easier maintenance of complex systems.', 'Reference': 'Fowler, M. (2014). "Microservices: a definition of this new architectural term." Martin Fowlers website.URL: https://martinfowler.com/articles/microservices.html'},
  { 'id': 5, 'Term': 'Blue-Green Deployment:', 'Description': 'Blue-Green Deployment is a technique used for releasing new versions of an application with minimal downtime and risk. In this approach, two identical environments (blue and green) are set up. The current version of the application runs in one environment while the new version is deployed in the other. After successful testing, the traffic is switched from the old version to the new one, minimizing disruption.', 'Reference': 'Martin Fowler. "BlueGreenDeployment." Martin Fowlers website.URL: https://martinfowler.com/bliki/BlueGreenDeployment.html'},
  { 'id': 6, 'Term': 'Canary Deployment', 'Description': 'Canary Deployment is a deployment strategy that involves gradually rolling out a new version of the software to a subset of users or servers before releasing it to the entire user base. This allows for early detection of potential issues and reduces the impact of bugs or performance problems on the entire system.', 'Reference': 'Microsoft Azure. "Understanding canary deployment in Azure API Management." Microsoft Docs.URL: https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-canary-operations'},
  { 'id': 7, 'Term': 'Configuration Management', 'Description': 'Configuration Management is the process of maintaining and controlling the configuration of software systems and infrastructure throughout their lifecycle. It involves managing changes, ensuring consistency, and tracking configurations to prevent conflicts and maintain system stability.', 'Reference': 'Red Hat. "What is configuration management?" Red Hat Insights.URL: https://www.redhat.com/en/topics/automation/what-is-configuration-management'},
  { 'id': 8, 'Term': 'DevOps Culture', 'Description': 'DevOps Culture refers to a set of practices, values, and principles that emphasize collaboration, communication, and shared responsibility between software development and IT operations teams. The goal is to break down silos, foster a culture of trust, and align everyone towards the common objective of delivering high-quality software quickly and reliably.', 'Reference': 'Humble, J., & Farley, D. (2010). "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation." Addison-Wesley Professional.'},
  { 'id': 9, 'Term': 'Version Control System', 'Description': 'A Version Control System is a tool that helps developers track and manage changes to their codebase over time. It allows multiple developers to work on the same project simultaneously, providing features like branching, merging, and history tracking, which are essential for successful collaboration and code management.', 'Reference': 'Atlassian. "What is version control?" Atlassian Git Tutorial.URL: https://www.atlassian.com/git/tutorials/what-is-version-control'},
  { 'id': 10, 'Term': 'Incident Management', 'Description': 'Incident Management is the process of identifying, prioritizing, and resolving incidents or disruptions that occur in a software system or IT infrastructure. The aim is to restore normal operation as quickly as possible and minimize the impact on users, following predefined procedures and communication protocols.', 'Reference': 'ServiceNow. "Incident Management." ServiceNow Documentation.URL: https://docs.servicenow.com/bundle/paris-it-service-management/page/product/incident-management/concept/c_IncidentManagement.html'},
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', sub: 'my website showing a collection of DevOps terms and their brief Descriptions.',
   items: itemlist });
});

module.exports = router;