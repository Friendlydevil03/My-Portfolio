# 🚀 DevOps CI/CD Pipeline – Portfolio Deployment (AWS)

This project demonstrates a fully automated CI/CD pipeline using:

- GitHub Actions
- Docker & DockerHub
- Ansible
- AWS EC2 (Ubuntu)
- Nginx

Every time code is pushed to the `AWS-EC2` branch, the pipeline runs:

✔ Build → Test → Docker → Deploy → Verify

---

## 📐 Architecture Overview

        Developer Push Code ──▶ GitHub Repository (AWS-EC2 Branch)
                                └▶ GitHub Actions CI/CD Pipeline
                                        ├─ Build & Test Application
                                        ├─ Build Docker Image
                                        ├─ Push Image to DockerHub
                                        └─ Ansible Remote Deploy
                                        └─ AWS EC2 Server
                                        └─ Application Served Live
---

## 🛠️ Technologies Used

| Component          | Technology |
|-------------------|------------|
| CI/CD             | GitHub Actions |
| Containerization  | Docker |
| Registry          | DockerHub |
| Provisioning      | Ansible |
| Cloud             | AWS EC2 |
| OS                | Ubuntu |
| Web Server        | Nginx |
| Version Control   | Git / GitHub |

---

## 🔄 CI/CD Workflow

Pipeline runs when pushing to:

AWS-EC2 branch

### Stages

1️⃣ **Build & Test**
- Install dependencies
- Run linter
- Build frontend

2️⃣ **Docker Build**
- Build image
- Tag with `SHA` & `latest`
- Push to DockerHub

3️⃣ **Deploy to AWS**
- SSH into EC2 using Ansible
- Pull latest Docker image
- Restart container
- Verify deployment

---

## 🌐 Live Deployment

👉 Running on your EC2 server:

http://3.108.65.218/


---

## 📦 Docker Image

Pull the latest image:

```bash
docker pull srivenkatesh03/my-portfolio:latest
```
🔐 GitHub Secrets Used
Secret Name	        Description

DOCKERHUB_USERNAME	        DockerHub Account

DOCKERHUB_TOKEN        	DockerHub Access Token

EC2_HOST	        EC2 Public DNS

EC2_USER	        ubuntu

EC2_SSH_PRIVATE_KEY	        Private key for SSH




<img width="1888" height="895" alt="image" src="https://github.com/user-attachments/assets/30427a74-1fdf-41c9-ad3e-6244f5333271" />
                                                  CI/CD pipeline run on GitHub Actions
                                                  
<img width="1905" height="907" alt="image" src="https://github.com/user-attachments/assets/4ac35ed5-c994-4093-bbd3-466405ff68a6" />
                                                      Ansible deployment on EC
<img width="1906" height="708" alt="image" src="https://github.com/user-attachments/assets/acc61bdd-09b0-4e52-9b41-f36ee3d40afd" />
                                                      Application running on EC2
<img width="1918" height="975" alt="image" src="https://github.com/user-attachments/assets/d41556d9-40be-4bd7-8f6d-15f1debb40ed" />



