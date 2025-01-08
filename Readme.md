# Readme 

This repo demonstrates the breaking of nativeind when you turn on Expos (currently still unstable) bundle optimizations and tree shaking respectively, as mentioned in [this](https://github.com/nativewind/nativewind/issues/1372) issue.
https://docs.expo.dev/guides/tree-shaking/


```
EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH = 1
```

## How to replicate 

- fork the repo
- swap out configs in app.json and eas.json, commit to master, add an [EXPO_TOKEN to your repo](https://docs.expo.dev/eas-update/github-actions/#publish-previews-on-pull-requests).
- rebase the "changes" branch and create a new PR so the preview action kicks in.
- build a dev build and run in the simulator
- grab the URL from the comment on the PR
- see styles failing

## How to verify?

- revert the latest commit on "changes" or brach of from "style tweaks" with a new PR and it all works as expected.
