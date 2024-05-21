ARG MVN_VERSION=3.8.3
ARG JDK_VERSION=17

FROM maven:${MVN_VERSION}-openjdk-${JDK_VERSION}-slim as MAVEN_TOOL_CHAIN_CACHE
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:tree

COPY ./pom.xml /tmp/
COPY ./src /tmp/src/
WORKDIR /tmp/
RUN mvn clean install

FROM openjdk:17-alpine

COPY --from=MAVEN_TOOL_CHAIN_CACHE /tmp/target/demo-0.0.1-SNAPSHOT.jar /demo-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/demo-0.0.1-SNAPSHOT.jar"]