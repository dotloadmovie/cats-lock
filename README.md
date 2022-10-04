# cats-lock

Solves the problem of quickly enabling/disabling your keyboard while cats are wandering around and you're trying to watch a video/stream/do a conf call. This is a Cinnamon system extension for Mint which invokes the input status call.

## To use

Click on Milo to deactivate keyboard. Click on Terry to activate. Icon applet should appear in system tray.

## To build and deploy

Source assumes:

1. You have a standard Mint user setup (plugins are in `~/.local/share/cinnamon/applets`) - if necessary, change this setting in deploy.sh and applet.js

2. You have a normal AT style keyboard with the regular system name `AT Translated Set 2 keyboard` - if necessary, change this setting in cmd.sh

To build and deploy:

- run the deployment script: `sh deploy.sh`
- reload Cinnamon `ctrl-F2 and then r`
- if necessary, activate `cats-lock` in the Cinnamon applets panel
