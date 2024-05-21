FROM openjdk:21 AS base

FROM maven:3.8.4-openjdk-17 AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean install

FROM openjdk:21 AS runtime

COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 4000

CMD ["java", "-jar", "/app/app.jar"]
