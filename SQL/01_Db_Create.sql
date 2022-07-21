USE [master]

IF db_id('Eat_Purge_Livestream') IS NULl
  CREATE DATABASE [Eat_Purge_Livestream]
GO

USE [Eat_Purge_Livestream]
GO


DROP TABLE IF EXISTS [PostReaction];
DROP TABLE IF EXISTS [Comment];
DROP TABLE IF EXISTS [Post];
DROP TABLE IF EXISTS [Reaction];
DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Image];
GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [FirebaseUserId] varchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [FirstName] nvarchar(255) NOT NULL,
  [LastName] nvarchar(255) NOT NULL,
  [ImageId] int,
  [CreateDateTime] datetime NOT NULL
)
GO

CREATE TABLE [Post] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Title] nvarchar(255) NOT NULL,
  [Content] nvarchar(1000),
  [CreateDateTime] datetime NOT NULL,
  [ImageId] int,
  [UserProfileId] int NOT NULL
)
GO

CREATE TABLE [Comment] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [PostId] int NOT NULL,
  [UserProfileId] int NOT NULL,
  [Content] nvarchar(255) NOT NULL,
  [CreateDateTime] datetime NOT NULL
)
GO

CREATE TABLE [Image] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Body] varbinary(max) NOT NULL
)
GO

CREATE TABLE [Reaction] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(64) NOT NULL,
  [ImageId] int
)
GO

CREATE TABLE [PostReaction] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [PostId] int NOT NULL,
  [ReactionId] int NOT NULL,
  [UserProfileId] int NOT NULL
)
GO

ALTER TABLE [Post] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Comment] ADD FOREIGN KEY ([PostId]) REFERENCES [Post] ([Id])
GO

ALTER TABLE [Comment] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [PostReaction] ADD FOREIGN KEY ([PostId]) REFERENCES [Post] ([Id])
GO

ALTER TABLE [PostReaction] ADD FOREIGN KEY ([ReactionId]) REFERENCES [Reaction] ([Id])
GO

ALTER TABLE [PostReaction] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([ImageId]) REFERENCES [Image] ([Id]) ON DELETE CASCADE
GO

ALTER TABLE [Reaction] ADD FOREIGN KEY ([ImageId]) REFERENCES [Image] ([Id]) ON DELETE CASCADE
GO

ALTER TABLE [Post] ADD FOREIGN KEY ([ImageId]) REFERENCES [Image] ([Id]) ON DELETE CASCADE
GO

