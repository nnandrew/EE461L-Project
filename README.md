# EE461L-Project

## Front-End
The front-end is implemented using a React app that utilizes Docker containers for development and deployment.
### Pre-requisites
You will need [Docker](https://www.docker.com/) installed on your local machine. While you can utilize Docker purely from the command line, I find that Docker Desktop is helpful in visualizing your containers and images.
### Usage
To launch the React Docker container, navigate to the `front-end` directory and launch the Docker container using `docker-compose`:
```bash
cd front-end
docker-compose up -d
``` 
The app will start and it can be accessed at http://localhost:3001/. 

NOTE: Hot-reload is enabled, although there does appear to be some latency between saving of a file and the corresponding update on the app.

### Stop Container
When you are finished with the container, shut it down using the following:
```bash
docker-compose down
```