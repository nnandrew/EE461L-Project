# EE461L-Project

## Front-End
The front-end is a React app that utilizes a Docker container for development.
### Pre-requisites
You will need [Docker](https://www.docker.com/) installed on your local machine. While you can utilize Docker purely from the command line, I find that Docker Desktop is helpful in visualizing your containers and images.
### Usage
To launch the React Docker container, navigate to the `front-end` directory and launch the Docker container using `docker-compose`:
```bash
cd front-end
docker-compose up -d
``` 
When you are finished with the container, shut it down using the following:
```bash
docker-compose down
```