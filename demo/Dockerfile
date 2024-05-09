# Use an official OpenJDK runtime as a parent image
FROM openjdk:21

# Set the working directory in the container
WORKDIR /app

# Copy the application JAR file into the container at /usr/src/app
COPY /target/demo-0.0.1-SNAPSHOT.jar ./app.jar

EXPOSE 8080

# Specify the command to run your application
CMD ["java", "-jar", "app.jar"]
