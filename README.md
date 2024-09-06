# To using Docker to develop web

- Code in local device, after complete use the command below to build new image
  docker build -t dukelw/manga-website-be:latest .

- After that use the command to push code to DockerHub
  docker push dukelw/manga-website-be:latest

- Sometimes you can forget to turn off the old Container, use
  docker ps

  and
  docker rm -f [CONTAINER_ID] to kill the container

- After that use the command below to run the container
  docker run --name manga-website-be -d -p 4000:4000 dukelw/manga-website-be:latest

- Finally, you can see logs when the container is running by the following command
  docker logs -f manga-website-be
