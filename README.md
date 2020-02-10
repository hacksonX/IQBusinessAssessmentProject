# IQBusinessAssessment

Do the following to run the application

1. Clone the repository
2. Ensure you have maven 3+, java 8 and npm 6.11.3+ installed
3. Fire up a terminal of your choice

Data service

4. switch to the online-registration-service folder
5. run maven clean install (mvn clean instal [if maven is set up as recomended]) - this will build the application and create the jar which wasn't commited. It'll also run tests.
6. Run the jar using basic java commands ("java -jar target/online-registration-0.0.1-SNAPSHOT.jar")
7. Deal with any firewall issues if you're on windows
8. Application api documentation should now be accessible here http://localhost:8080/swagger-ui.html#/
9. The application in-memory db should be accessible here http://localhost:8080/h2-console/login.jsp 
   Set JDBC URL to jdbc:h2:mem:user-registration and connect

UI

10. On a new terminal switch to the same directory but this time go to online-registration-ui
11. The node modules needed for this project were not commited. So run "npm install"
12. run "ng serve"
13. Visit the application on http://localhost:4200
