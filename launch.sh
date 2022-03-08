# Dockerを使用しない場合にこのscriptで立ち上げる
cd api &&
bundle install --jobs=5 &
cd front &&
yarn install &&
PORT=$FRONT_PORT yarn dev &
cd api && 
./scripts/migrate_by_ridgepole.sh &&
bundle exec rails s -p $API_PORT -b '0.0.0.0'