## Interview question for spring-boot/mvc/security etc.
**References:**

1. https://www.geeksforgeeks.org/spring-boot-interview-questions-and-answers/
2. https://www.interviewbit.com/spring-boot-interview-questions/
3. https://medium.com/@sharmapraveen91/30-advanced-spring-boot-interview-questions-for-experienced-professionals-3574173472c1



1. **How do you optimize the startup time of a spring boot applicatino in a production env?**
   =>
   1. **Lazy Initialization**: Use **spring.main.lazy-initialization=true** to delay bean initialization until needed.
   2. **Profile-Specific Configuration**: Separate configurations per env to avoid unnecessary loading.
   3. **Component Scanning**: Restrict the scope of component scanning using **@ComponentScan** to only include essential packages.
   4. **Reduce Bean Creation**: Avoid creating unnecessary beans during startup, especially for time-intensive services.

