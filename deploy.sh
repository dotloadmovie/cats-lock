path=~/.local/share/cinnamon/applets/cats-lock@cinnamon.org

rm -rf $path
mkdir $path

cp -R icons $path
cp metadata.json $path
cp applet.js $path
cp cmd.sh $path