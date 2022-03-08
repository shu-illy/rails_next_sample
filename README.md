# Rails + Next.js + TypeScript + TailwindCSS + Docker サンプル

## 環境

- Ruby on Rails: 7.0.2
- Next.js: 12.1.0

## 使用手順

- git clone
- `docker-compose build`
- `db/Schemafile`を編集
- `docker-compose run --rm api bundle exec rails destroy scaffold post`
- docker-compose.yml, database.yml の DB 名変更
- `docker-compose run --rm api bundle exec rails db:create`

## 起動方法

- Docker を使用する場合
  - `docker-compose up`
- Docker を使用しない場合
  - `./launch.sh`

## 参考

[https://zenn.dev/taku1115/articles/6c9fa97ab37e38](https://zenn.dev/taku1115/articles/6c9fa97ab37e38)
