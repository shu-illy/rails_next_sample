# Rails + Next.js + TypeScript + Docker サンプル

## 使用手順

- git clone
- `docker-compose build`
- サンプルのマイグレーションファイル削除
- `docker-compose run --rm api bundle exec rails destroy scaffold post`
- docker-compose.yml, database.yml の DB 名変更
- `docker-compose run --rm api bundle exec rails db:create`

## 参考

[https://zenn.dev/taku1115/articles/6c9fa97ab37e38](https://zenn.dev/taku1115/articles/6c9fa97ab37e38)
