## docker build -t [name:tag]  .  
    => Builds an image using a Dockerfile located in the same folder.

## docker build -t [name:tag] -f [fileName]
    => Builds an image using a Dockerfile located in a different folder (f flag means name of the folder).

## docker tag [imageName] [name:tag]
    => Tag an existing image


## Docker CLI -> Tagging:
    =>
      docker tag  =>  Create a target image
        name:tag
          myimage:v1

        repository/name:tag
          github.com:v1
