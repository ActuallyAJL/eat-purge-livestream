using eat_purge_livestream.Models;
using eat_purge_livestream.Utils;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;

namespace eat_purge_livestream.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration)
            : base(configuration) { }
        public void Add(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Post (Title, Content, CreateDateTime, ImageId, UserProfileId)
                                    OUTPUT INSERTED.ID
                                    VALUES (@title, @content, @createDateTime, @imageId, @userProfileId)
                                    ";

                    DbUtils.AddParameter(cmd, "@title", post.Title);
                    DbUtils.AddParameter(cmd, "@content", post.Content);
                    DbUtils.AddParameter(cmd, "@createDateTime", post.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@imageId", post.ImageId);
                    DbUtils.AddParameter(cmd, "@userProfileId", post.UserProfileId);

                    post.Id = (int)cmd.ExecuteScalar();
                }
                conn.Close();
            }
        }
        public void Update(Post post)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE Post
                                    SET Title=@title, Content=@content, ImageId=@imageId
                                    WHERE Id=@id";

                    DbUtils.AddParameter(cmd, "@content", post.Content);
                    DbUtils.AddParameter(cmd, "@title", post.Title);
                    DbUtils.AddParameter(cmd, "@imageId", post.ImageId);
                    DbUtils.AddParameter(cmd, "@id", post.Id);

                    cmd.ExecuteNonQuery();

                }
                conn.Close();
            }
        }
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM Post WHERE Id=@id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    cmd.ExecuteNonQuery();
                }
                conn.Close();
            }
        }
        public List<Post> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    SELECT Id, Title, Content, CreateDateTime, ImageId, UserProfileId
                                    FROM Post
                                    ORDER BY CreateDateTime DESC
                                    ";

                    using (var reader = cmd.ExecuteReader())
                    {
                        var posts = new List<Post>();

                        while (reader.Read())
                        {
                            var post = new Post
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Content = DbUtils.GetString(reader, "Content"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                                ImageId = DbUtils.GetInt(reader, "ImageId"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                            };
                            posts.Add(post);
                        }
                        return posts;
                    }
                }
            }
        }
        public Post Get(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    SELECT Id, Title, Content, CreateDateTime, ImageId, UserProfileId
                                    FROM Post
                                    WHERE Id=@id
                                    ";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();
                    Post post = null;
                    if (reader.Read())
                    {
                        post = new Post
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            ImageId = DbUtils.GetInt(reader, "ImageId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                        };
                    }
                    return post;
                }
            }
        }
        public List<Post> GetByUserId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    SELECT Id, Title, Content, CreateDateTime, ImageId, UserProfileId
                                    FROM Post
                                    WHERE UserProfileId = @userProfileId
                                    ORDER BY CreateDateTime DESC
                                    ";

                    DbUtils.AddParameter(cmd, "@userProfileId", id);

                    using (var reader = cmd.ExecuteReader())
                    {
                        var posts = new List<Post>();

                        while (reader.Read())
                        {
                            var post = new Post
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Content = DbUtils.GetString(reader, "Content"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                                ImageId = DbUtils.GetInt(reader, "ImageId"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                            };
                            posts.Add(post);
                        }
                        return posts;
                    }
                }
            }
        }
    }
}
