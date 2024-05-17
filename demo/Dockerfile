# Base image with OpenJDK 21
FROM openjdk:21 AS base

# Maven build stage
FROM maven:latest AS build

# Set the working directory
WORKDIR /app

# Copy pom.xml and download dependencies only (this will be cached)
COPY pom.xml .

# Run dependency download step separately to leverage Docker cache
RUN mvn dependency:go-offline

# Copy the entire project source code
COPY . .

# Run the build (this will use cached dependencies if they haven't changed)
RUN mvn clean install

# Runtime stage
FROM openjdk:21 AS runtime

# Copy the built jar file from the build stage
COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port
EXPOSE 4000

# Command to run the application
CMD ["java", "-jar", "app.jar"]
