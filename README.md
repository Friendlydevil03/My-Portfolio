🚀 Portfolio Application – CI/CD to AWS EC2

This project implements a complete DevOps pipeline to build and deploy a web application using:

GitHub Actions

Docker & DockerHub

Ansible

AWS EC2

Every time code is pushed to the AWS-EC2 branch, a fully automated pipeline runs:

✔ Build → Test → Docker → Deploy → Verify

📐 Architecture
Developer Push Code
        |
        v
GitHub Repository (AWS-EC2 Branch)
        |
        v
GitHub Actions CI/CD Pipeline
        |
        ├─ Build & Test Application
        ├─ Build Docker Image
        ├─ Push Image to DockerHub
        └─ Ansible Remote Deploy
                |
                v
          AWS EC2 Server (Docker)
                |
                v
           Nginx Serves Portfolio

🛠️ Technologies Used
Component	Technology
CI/CD	GitHub Actions
Containerization	Docker
Registry	DockerHub
Provisioning	Ansible
Cloud	AWS EC2 (Ubuntu)
Web Server	Nginx
Source Control	Git / GitHub
🔄 CI/CD Workflow
Trigger

Pipeline runs when pushing to:

AWS-EC2 branch

Stages

Build & Test

Install dependencies

Run linter & build

Docker Build

Build image

Tag image with SHA + latest

Push to DockerHub

Deploy to AWS

SSH into EC2

Pull latest image

Restart container

Verify service

📸 Screenshots
GitHub Actions – Successful Run

(Add screenshot here)

AWS EC2 Running Container

(Add screenshot here)

🌐 Live Demo

📍 Application is deployed at:

👉 http://<your-public-ip>

or

👉 http://ec2-3-108-65-218.ap-south-1.compute.amazonaws.com

🔐 Secrets Used (GitHub Actions)
Secret	Description
DOCKERHUB_USERNAME	DockerHub username
DOCKERHUB_TOKEN	DockerHub access token
EC2_HOST	EC2 public DNS
EC2_USER	ubuntu
EC2_SSH_PRIVATE_KEY	EC2 SSH private key
📦 Docker Registry

👉 Image is available on DockerHub:

docker pull srivenkatesh03/my-portfolio:latest

🧪 How to Deploy Manually

Run workflow:

GitHub → Actions → Deploy to AWS EC2 → Run workflow


Choose branch:

AWS-EC2

🏆 Final Result

✔ Fully automated deployment
✔ Zero manual steps
✔ Production-like DevOps pipeline
