# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true|
|password|string|null: false|
|username|string|null: false, unique: true|

### Association
- has_many :groups, through: :groups_users_chats
- has_many :chats, through: :groups_users_chats
- has_many :groups_users_chats

## groups_users_chatsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|chat_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- belongs_to :chat

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|

### Association
- has_many :chats, through: :groups_users_chats
- has_many :users, through: :groups_users_chats
- has_many :groups_users_chats


## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||

### Association
- has_many :groups, through: :groups_users_chats
- has_many :users, through: :groups_users_chats
- has_many :groups_users_chats
