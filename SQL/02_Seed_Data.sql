USE [Eat_Purge_Livestream]
GO

set identity_insert [UserProfile] on
insert into [UserProfile] ([Id] , [FirebaseUserId] , [Email] , [FirstName] , [LastName] , [ImageId] , [CreateDateTime])
VALUES  (1, 'IouE9z5zYYTyrRzC9RfaZ1c2PtJ3', 'dale@tp.com', 'Dale', 'Cooper', null, '2022-07-20'),
		(2, 'MPAZriaoGBhuTUcprhpdq9a0ZWp1', 'harry@tp.com', 'Harry', 'Truman', null, '2022-07-20'),
		(3, 'jVE6ecXEOmfm8puzpM9wk7M3SIj2', 'shelly@tp.com', 'Shelly', 'Johnson', null, '2022-07-20'),
		(4, 'gZ8He1z0gTXhJseHuCWoJctidU33', 'bobby@tp.com', 'Bobby', 'Briggs', null, '2022-07-20'),
		(5, '5X8PSyJbqNMPdqGx2Qe7pEE6hzu2', 'benjamin@tp.com', 'Benjamin', 'Horne', null, '2022-07-20'),
		(6, 'wX1VBZS1vXQs9Dy3KOTTqqeVKyp1', 'donna@tp.com', 'Donna', 'Hayward', null, '2022-07-20'),
		(7, 'CbnIlopaL8XVWvsTWi3tR3Lt2iw2', 'audrey@tp.com', 'Audrey', 'Horne', null, '2022-07-20'),
		(8, 'JoLfy5CTCuUgFGRrAo2Ksesuo6f2', 'james@tp.com', 'James', 'Hurley', null, '2022-07-20'),
		(9, 'DMFHBUJu4MQSWl6AEnyF3hXoAng2', 'leland@tp.com', 'Leland', 'Palmer', null, '2022-07-20'),
		(10, 'pdegzb18gZf1QtgT8OJ9r6cruL72', 'lucy@tp.com', 'Lucy', 'Moran', null, '2022-07-20'),
		(11, 'aMQOxcreP9NtFHw6n6malYOXSGt2', 'laura@tp.com', 'Laura', 'Palmer', null, '2022-07-20')
set identity_insert [UserProfile] off

set identity_insert [Post] on
insert into [Post] ([Id] , [Title] , [Content] , [CreateDateTime] , [ImageId] , [UserProfileId])
VALUES  (1, 'Damn fine cup of coffee', 'Im going to let you in on a little secret: every day, once a day, give yourself a present. Dont plan it; dont wait for it; just let it happen. It could be a new shirt in a mens store, a catnap in your office chair, or two cups of good, hot, black, coffee.', '2022-07-20', null, 1),
		(2, 'Black Lodge', 'Theres a sort of evil out there. Something very, very strange in these old woods. Call it what you want. A darkness, a presence. It takes many forms, but its been out there for as long as anyone can remember and weve always been here to fight it', '2022-07-20', null, 2),
		(3, 'Ive got one man too many in my life and Im married to him', 'He was so great at first, you know. This flashy guy in his hot car. Then we get married and I find out all he was looking for was a maid he didnt have to pay. I feel so stupid.', '2022-07-20', null, 3),
		(4, 'I had a vision in my sleep last night', 'As distinguished from a dream which is mere sorting and cataloguing of the days events by the subconscious. This was a vision, fresh and clear as a mountain stream - the mind revealing itself to itself. In my vision, I was on the veranda of a vast estate, a palazzo of some fantastic proportion. There seemed to emanate from it a light from within - this gleaming radiant marble. I had known this place. I had in fact been born and raised there. This was my first return, a reunion with the deepest wellsprings of my being. Wandering about, I was happy that the house had been immaculately maintained. There had been added a number of additional rooms, but in a way it blended so seamlessly with the original construction, one would never detect any difference. Returning to the houses grand foyer, there came a knock at the door. My son was standing there. He was happy and care-free, clearly living a life of deep harmony and joy. We embraced - a warm and loving embrace, nothing withheld. We were in this moment one. My vision ended. I awoke with a tremendous of optimism and confidence in you and your future. That was my vision; it was of you. Im so glad to have had this opportunity to share it with you. I wish you nothing but the very best, always.', '2022-07-20', null, 4),
		(5, 'What is the greatest gift that one human being can give to another? The future.', 'Weve lain a gala reception for your fair-haired boys tonight. All of Twin Peaks best and brightest will be there.', '2022-07-20', null, 5),
		(6, 'There are things you cant get in books', 'There are things you cant get anywhere… but we dream they can be found in other people.', '2022-07-20', null, 6),
		(7, 'In real life, there is no algebra.', 'I just feel that sometimes I am better company only to myself, because of what is happening in my life, than I am or would be to anyone else.', '2022-07-20', null, 7),
		(8, 'New Bike', 'Sometimes I just want to get on the bike, take to the open road, and never look back', '2022-07-20', null, 8),
		(9, 'Check out my new golf clubs', 'Youve got to see how big the bag is that they came in', '2022-07-20', null, 9),
		(10, 'Who to choose?', 'I guess Im not so interested in how my bike looks as in where it can take me', '2022-07-20', null, 10),
		(11, 'Ill see you again in 25 years', 'I Feel like I know her, but sometimes my arms bend back', '2022-07-20', null, 11)
set identity_insert [Post] off

set identity_insert [Comment] on
insert into [Comment] ([Id] , [PostId] , [UserProfileId] , [Content] , [CreateDateTime])
VALUES  (1, 1, 2, 'Ugh', '2022-07-20'),
		(2, 2, 3, 'Could not agree more', '2022-07-20'),
		(3, 3, 4, 'could not disagree more', '2022-07-20'),
		(4, 4, 5, 'I never thought about it that way...', '2022-07-20'),
		(5, 5, 6, 'Sometimes I just dont understand you', '2022-07-20'),
		(6, 6, 7, 'No Way!', '2022-07-20'),
		(7, 7, 8, 'are you okay?', '2022-07-20'),
		(8, 8, 9, 'preach', '2022-07-20'),
		(9, 9, 10, 'Get It!', '2022-07-20'),
		(10, 10, 11, 'didnt know you felt this way too', '2022-07-20'),
		(11, 11, 1, 'lol did you just think of this?', '2022-07-20'),
		(12, 11, 2, 'oh please, again?', '2022-07-20'),
		(13, 10, 4, 'you and me both', '2022-07-20'),
		(14, 9, 6, 'Its been too long. We should catch up', '2022-07-20'),
		(15, 8, 8, 'I have been trying to reach you about your cars extended warranty', '2022-07-20'),
		(16, 7, 10, 'Listen here, Ill have you know I graduated top of my class...', '2022-07-20'),
		(17, 6, 1, 'mood af', '2022-07-20'),
		(18, 5, 3, 'dm me', '2022-07-20'),
		(19, 4, 5, 'so true', '2022-07-20'),
		(20, 3, 7, 'Youre just looking for attention', '2022-07-20'),
		(21, 2, 9, 'you cant really mean that!', '2022-07-20'),
		(22, 1, 11, 'Ive been waiting to hear this all my life', '2022-07-20')
set identity_insert [Comment] off

set identity_insert [Reaction] on
insert into [Reaction] ([Id], [Name], [ImageId])
VALUES (1, 'thumbsup', null),
	   (2, 'thumbsdown', null),
	   (3, 'heart', null),
	   (4, 'anger', null),
	   (5, 'laugh', null),
	   (6, 'octopus', null)
set identity_insert [Reaction] off

set identity_insert [PostReaction] on
insert into [PostReaction] ([Id], [PostId], [ReactionId], [UserProfileId])
VALUES  (1, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(2, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(3, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(4, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(5, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(6, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(7, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(8, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(9, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(10, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(11, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(12, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(13, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(14, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(15, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(16, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(17, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(18, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(19, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(20, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(21, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(22, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(23, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(24, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(25, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(26, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(27, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(28, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(29, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(30, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(31, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(32, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(33, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(34, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(35, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(36, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(37, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(38, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(39, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(40, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(41, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(42, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(43, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(44, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(45, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(46, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(47, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(48, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(49, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11)),
		(50, CEILING(RAND()*11), CEILING(RAND()*6), CEILING(RAND()*11))
set identity_insert [PostReaction] off

set identity_insert [Image] on
insert into [Image] ([Id], [Body])
SELECT 1, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\dale.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 2, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\harry.jfif', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 3, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\shelly.png', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 4, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\bobby.jfif', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 5, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\ben.jpeg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 6, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\donna.png', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 7, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\audrey.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 8, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\james.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 9, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\leland.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 10, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\lucy.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 11, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\laura.jfif', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 12, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\thumbsup.png', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 13, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\thumbsdown.png', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 14, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\heart.png', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 15, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\anger.png', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 16, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\laugh.png', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 17, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\squid.png', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 18, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\coffee.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 19, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\lodge.jfif', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 20, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\car.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 21, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\veranda.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 22, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\northern.jfif', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 23, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\book.jpeg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 24, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\algebra.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 25, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\motorcycle.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 26, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\golf.jfif', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 27, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\pencil.jpg', SINGLE_BLOB) rs
insert into [Image] ([Id], [Body])
SELECT 28, * FROM OPENROWSET(BULK N'C:\Users\zero3\workspace\sandbox\eat-purge-livestream\SQL\seedImages\palmer.jpg', SINGLE_BLOB) rs

set identity_insert [Image] off

UPDATE UserProfile SET ImageId = 1 WHERE Id = 1;
UPDATE UserProfile SET ImageId = 2 WHERE Id = 2;
UPDATE UserProfile SET ImageId = 3 WHERE Id = 3;
UPDATE UserProfile SET ImageId = 4 WHERE Id = 4;
UPDATE UserProfile SET ImageId = 5 WHERE Id = 5;
UPDATE UserProfile SET ImageId = 6 WHERE Id = 6;
UPDATE UserProfile SET ImageId = 7 WHERE Id = 7;
UPDATE UserProfile SET ImageId = 8 WHERE Id = 8;
UPDATE UserProfile SET ImageId = 9 WHERE Id = 9;
UPDATE UserProfile SET ImageId = 10 WHERE Id = 10;
UPDATE UserProfile SET ImageId = 11 WHERE Id = 11;
UPDATE Post SET ImageId = 18 WHERE Id = 1;
UPDATE Post SET ImageId = 19 WHERE Id = 2;
UPDATE Post SET ImageId = 20 WHERE Id = 3;
UPDATE Post SET ImageId = 21 WHERE Id = 4;
UPDATE Post SET ImageId = 22 WHERE Id = 5;
UPDATE Post SET ImageId = 23 WHERE Id = 6;
UPDATE Post SET ImageId = 24 WHERE Id = 7;
UPDATE Post SET ImageId = 25 WHERE Id = 8;
UPDATE Post SET ImageId = 26 WHERE Id = 9;
UPDATE Post SET ImageId = 27 WHERE Id = 10;
UPDATE Post SET ImageId = 28 WHERE Id = 11;
UPDATE Reaction SET ImageId = 12 WHERE Id = 1;
UPDATE Reaction SET ImageId = 13 WHERE Id = 2;
UPDATE Reaction SET ImageId = 14 WHERE Id = 3;
UPDATE Reaction SET ImageId = 15 WHERE Id = 4;
UPDATE Reaction SET ImageId = 16 WHERE Id = 5;
UPDATE Reaction SET ImageId = 17 WHERE Id = 6;