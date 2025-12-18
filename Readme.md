## Web DevOps Foundations

This project demonstrates a complete DevOps workflow for a static web application.
It includes CI validation, artifact packaging, automated deployment to GitHub Pages,
and Docker image build & push to GitHub Container Registry (GHCR), all gated by CI.

The pipeline ensures only validated code is deployed and produces immutable Docker
images for reliable rollback and future production deployments.
