USE [Eat_Purge_Livestream]
GO

set identity_insert [UserProfile] on
insert into [UserProfile] ([Id] , [FirebaseUserId] , [Email] , [FirstName] , [LastName] , [ImageId] , [CreateDateTime])
VALUES  (1, '8hsauMNgFNfSv9pcYNlYrhzDiMA2', 'al@al.com', 'Alex', 'Levy', null, '2022-07-20'),
		(2, 'KTxhvZ702VhtA2zdmNo324W8WF92', 'bb@bb.com', 'Bory', 'Blark', null, '2022-07-20')
set identity_insert [UserProfile] off

set identity_insert [Post] on
insert into [Post] ([Id] , [Title] , [Content] , [CreateDateTime] , [ImageId] , [UserProfileId])
VALUES (1, 'The other side wants you to think the world is on fire', 'Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Tempor nec feugiat nisl pretium fusce. Congue nisi vitae suscipit tellus mauris a. Amet dictum sit amet justo donec. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Magnis dis parturient montes nascetur. Magnis dis parturient montes nascetur ridiculus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Justo eget magna fermentum iaculis. Netus et malesuada fames ac turpis egestas. Turpis egestas integer eget aliquet nibh praesent. Platea dictumst quisque sagittis purus sit amet volutpat. Iaculis nunc sed augue lacus viverra. Velit laoreet id donec ultrices tincidunt arcu non. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Metus dictum at tempor commodo ullamcorper a lacus. Commodo elit at imperdiet dui. Diam maecenas ultricies mi eget mauris pharetra et.', '2022-07-20', null, 1),
	 (2, 'The World is On Fire!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit eget gravida cum sociis natoque penatibus. Nunc sed blandit libero volutpat sed cras ornare. Scelerisque fermentum dui faucibus in. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Turpis egestas integer eget aliquet. Etiam erat velit scelerisque in dictum non consectetur a. Aliquet nec ullamcorper sit amet risus. Cursus turpis massa tincidunt dui ut ornare. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Vitae suscipit tellus mauris a diam maecenas sed. Purus ut faucibus pulvinar elementum integer.', '2022-07-20', null, 2)
set identity_insert [Post] off

set identity_insert [Comment] on
insert into [Comment] ([Id] , [PostId] , [UserProfileId] , [Content] , [CreateDateTime])
VALUES (1, 1, 2, 'You couldnt be more wrong. I hate you, even though were basically the same person', '2022-07-20'),
	   (2, 2, 1, 'Splish, splash, your opinion is trash. See? Hate can be cute sometimes.', '2022-07-20')
set identity_insert [Comment] off

set identity_insert [Reaction] on
insert into [Reaction] ([Id], [Name], [ImageId])
VALUES (1, 'Love', null),
	   (2, 'Hate', null)
set identity_insert [Reaction] off

set identity_insert [PostReaction] on
insert into [PostReaction] ([Id], [PostId], [ReactionId], [UserProfileId])
VALUES (1, 1, 1, 2),
	   (2, 2, 2, 1)
set identity_insert [PostReaction] off

set identity_insert [Image] on
insert into [Image] ([Id], [Body])
SELECT 1, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\id1.jpeg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 2, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\id2.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 3, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\id3.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 4, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\id4.jfif', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 5, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\id5.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 6, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\id6.jfif', SINGLE_BLOB) rs
set identity_insert [Image] off

UPDATE UserProfile SET ImageId = 1 WHERE Id = 1;
UPDATE UserProfile SET ImageId = 2 WHERE Id = 2;
UPDATE Post SET ImageId = 3 WHERE Id = 1;
UPDATE Post SET ImageId = 4 WHERE Id = 2;
UPDATE Reaction SET ImageId = 5 WHERE Id = 1;
UPDATE Reaction SET ImageId = 6 WHERE Id = 2;