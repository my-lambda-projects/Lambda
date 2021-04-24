# How to use Docker build secrets

It's common to need access to secret data to fully build an application from scratch. Commonly, builds pull sources or binaries from a private repository that requires authentication - private PyPI, npm, NuGet, etc. It's also common to use a Dockerfile to perform application build and packaging when deploying apps as containers, to take advantage of an isolated environment. This presents a challenge, as we don't want any secrets (files, environment variables, etc) to be captured in our image layers.

Docker 18.09 added some [nice build enhancements](https://docs.docker.com/develop/develop-images/build_enhancements/#new-docker-build-secret-information), including a feature called build secrets, that help us solve just this. The idea is simple: mount a volume at build time, use it in a `RUN` command, then don't include it in our final image.

## An example

This is an example of using build secrets with Python to pull from a private package repository. I'm using this [simple_package](https://github.com/Azure-Samples/azure-pipelines-python/tree/master/src/simple_package) and I'm also making the assumption that if you're reading this post, you have this problem and you already know how to build a Python package & upload it to a repository somewhere.

### TL;DR:

Run this, study the annotations as needed

```bash
# Pass the path to your pip.conf (secret) and build an image
DOCKER_BUILDKIT=1 docker build --secret id=pipconfig,src=/path/to/some/pip.conf -t myapp --progress=plain . 
docker run --rm -it -p 5000:5000 myapp
```

### Color commentary

#### Dockerfile

* It has to start with `# syntax = docker/dockerfile:1.0-experimental` to light up the ability to use the new syntax
* We reference a secret by `id`, in this case `pipconfig`. This should match the `id` you pass in during `docker build`
* We also set a destination to control where the mount lands. Otherwise it lands under `/run/secrets/{id}`

#### `docker build`

* BuildKit changes the output, so it can be hard to see what's going on. `--progress=plain` gives a more familiar "Oh look, pip is installing packages" experience