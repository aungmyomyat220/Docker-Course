FROM openjdk:21 AS base

FROM maven:latest AS build

WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline

COPY . .

RUN mvn clean install

FROM openjdk:21 AS runtime

COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 4000

CMD ["java", "-jar", "app.jar"]
