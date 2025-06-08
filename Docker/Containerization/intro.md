#containerization: it means, we will build a specification and we will build from that specifications.
## Resources:
https://docs.docker.com/reference/dockerfile

## Dockerfile: 
a text document that contains all the commands a user could call on the command line to assemble an image.

# .dockerignore: for ignoring certain files

**Format Of Dockerfile**:
# Comment
INSTRUCTION arguments    //the instruction is not case-sensitive. However, convention is for them to be UPPERCASE to distinguish them from arguments more easily.

Docker runs instructions in a **Dockerfile** in order. A Dockerfile must begin with a **FROM** instruction. 
the **FROM** instruction specifies the base image from which you are building. **FROM** may only be preceded by one or more **ARG**  instructions, which declare arguments that are used in **FROM** lines in the Dockerfile.


## Environment variables are supported by the following list of instructions in the Dockerfile:
1. ADD
2. COPY
3. ENV
4. EXPOSE
5. FROM
6. LABEL
7. VOLUME
8. WORKDIR


## ARG and FROM interact:

**FROM** instructions support variables that are declared by any **ARG** instructions that occur before the first FROM.


## Containers are ephemerous and stateless
    > 

