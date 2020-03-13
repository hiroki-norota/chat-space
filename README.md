# DB設計

usersテーブル
|Column|Type|Options|
|———|——|———-|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|

### Association
- has_many : group-users
- has_many :chats
- has_many :titles

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

titlesテーブル
|Column|Type|Options|
|———|——|———-|
|text|text|null: false|

### Association
- has_many : group-users
- has_many :chats
- has_many :users


chatsテーブル
|Column|Type|Options|
|———|——|———-|
|text|text||
|image|text||

### Association

- has_many : group-users
- has_many :users
