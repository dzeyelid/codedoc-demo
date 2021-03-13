# Front-End Foxes Meetup note

## デザインシステム

- ひさこさんおすすめ本
  - [Design Systems ―デジタルプロダクトのためのデザインシステム実践ガイド](https://www.amazon.co.jp/Design-Systems-%E2%80%95%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%83%97%E3%83%AD%E3%83%80%E3%82%AF%E3%83%88%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89-%E3%82%A2%E3%83%A9%E3%83%BB%E3%82%B3%E3%83%AB%E3%83%9E%E3%83%88%E3%83%B4%E3%82%A1/dp/4862464122)
- お互いの幸せのために整理していく
- パターンライブラリ
- そのときどき流動的に動いていると、頓挫してしまうリスクも
- 今後もスケールするように動いていくべき？
- チームで、ストhttps://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslintーリーブックの運用、特に導入はいろんな人の協力が必要
- デザインシステムの構築自体が、サービス自体を作り上げるくらいの
- 終わらないプロダクト
- DesignOps
  - ref: https://forbesjapan.com/articles/detail/29569
  - ref: https://designops-conference.com/
- デザインの素材を共有しやすいプラットフォーム https://zeroheight.com/

### Q. 小規模チームでのデザインシステムのメリット
- エンジニアとデザイナが居るところは協業しやすい
- 早い段階で認識を共有できる
- コミュニケーションコストが抑えられる  

## Vue 3

- @rry さん コードサンプル https://github.com/ryamakuchi/cr-vue3-ts
- composition API 注目
- ネコ本 https://cr-vue.mio3io.com/
- `readonly`
- `ref`
- `teleport`
- `suspense`
- Vue 3 キャッチアップにおすすめ本 https://gihyo.jp/magazine/wdpress/archive/2021/vol120
- vite が爆速でおすすめ！ https://github.com/vitejs/vite
- store pattern があるので小規模なステート管理は Vuex 不要でも

## TypeScript

- 型のおかげで、ドキュメンテーションとテストが格段に楽に！