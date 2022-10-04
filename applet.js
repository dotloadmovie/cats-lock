const Applet = imports.ui.applet;
const Util = imports.misc.util;
const PATH = "~/.local/share/cinnamon/applets/cats-lock@cinnamon.org";
const STATES = {
  unlocked: {
    desc: "Keyboard UNLOCKED. Click here to lock",
    icon: "cat",
  },
  locked: {
    desc: "Keyboard LOCKED. Click here to unlock",
  },
};

function MyApplet(orientation, panel_height, instance_id) {
  this._init(orientation, panel_height, instance_id);
}

MyApplet.prototype = {
  __proto__: Applet.IconApplet.prototype,

  _init: function (orientation, panel_height, instance_id) {
    Applet.IconApplet.prototype._init.call(
      this,
      orientation,
      panel_height,
      instance_id
    );

    this.set_applet_icon_name(STATES.unlocked.icon);
    this.set_applet_tooltip(_(STATES.unlocked.desc));
  },

  on_applet_clicked: function () {
    Util.spawnCommandLineAsyncIO(
      "sh " + PATH + "/cmd.sh",
      function (stdOut, stdErr) {
        global.log(stdOut, stdErr);
      }
    );
  },
};

function main(metadata, orientation, panel_height, instance_id) {
  return new MyApplet(orientation, panel_height, instance_id);
}
