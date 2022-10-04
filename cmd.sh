#!/bin/bash
# Bash script to enable/disable keyboard: https://askubuntu.com/a/713597
# by mxdsp: https://askubuntu.com/users/458410/mxdsp 
# is licensed under http://creativecommons.org/licenses/by/4.0

Icon="/PATH/TO/ICON_ON"
Icoff="/PATH_TO_ICON_OFF"
fconfig=".keyboard" 
id=$(xinput list --id-only 'AT Translated Set 2 keyboard')

if [ ! -f $fconfig ]; then
  echo "Creating config file"
  echo "enabled" > $fconfig
  var="enabled"
else
  read -r var< $fconfig
  echo "keyboard is : $var"
fi

if [ "$var" = "disabled" ]; then
  notify-send -i $Icon "Enabling keyboard..." \ "ON - Keyboard connected !";
  echo "enable keyboard..."
  xinput enable $id
  echo "enabled" > $fconfig
elif [ "$var" = "enabled" ]; then
  notify-send -i $Icoff "Disabling Keyboard" \ "OFF - Keyboard disconnected";
  echo "disable keyboard"
  xinput disable $id
  echo 'disabled' > $fconfig
fi