ARG VARIANT=1-22-bookworm
FROM mcr.microsoft.com/devcontainers/typescript-node:${VARIANT}
RUN apt-get update
RUN su node -c "npm install -g npm@10.7.0"
RUN su node -c "npm install -g @angular/cli@18.0.4"
EXPOSE 4200
CMD ["ng", "ng serve", "--host", "0.0.0.0"]