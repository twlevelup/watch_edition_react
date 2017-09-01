You can run the app and tests in a Docker container, and have your source
code changes synced into the container as you work. On Linux you could just
mount the project directory as a volume - but on OS X, the sync speed is slow
because it has to go via the hypervisor. To work around that, we use
[docker-sync]. Install that first:

```
gem install docker-sync
```

Then start the dev environment:

```
docker-sync start
docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml run --rm app
```

You can then use `./go-node` as usual in that environment.

[docker-sync]: https://github.com/EugenMayer/docker-sync
