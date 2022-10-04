const Applet = imports.ui.applet;
const Util = imports.misc.util;
const PATH = "~/.local/share/cinnamon/applets/cats-lock@cinnamon.org";
const STATES = {
  unlocked: {
    desc: "Keyboard UNLOCKED. Click here to lock",
    icon: "cat",
    response: "disable keyboard",
  },
  locked: {
    desc: "Keyboard LOCKED. Click here to unlock",
    icon: "cat-locked",
    response: "enable keyboard",
  },
};

let self = null;

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

    self = this;

    this.set_applet_icon_name(STATES.unlocked.icon);
    this.set_applet_tooltip(_(STATES.unlocked.desc));
  },

  on_applet_clicked: function () {
    Util.spawnCommandLineAsyncIO(
      "sh " + PATH + "/cmd.sh",
      function (stdOut, stdErr) {
        if (stdOut.indexOf(STATES.locked.response) > -1) {
          self.set_applet_icon_name(STATES.unlocked.icon);
          self.set_applet_tooltip(_(STATES.unlocked.desc));
        }

        if (stdOut.indexOf(STATES.unlocked.response) > -1) {
          self.set_applet_icon_name(STATES.locked.icon);
          self.set_applet_tooltip(_(STATES.locked.desc));
        }
      }
    );
  },
};

function main(metadata, orientation, panel_height, instance_id) {
  return new MyApplet(orientation, panel_height, instance_id);
}
