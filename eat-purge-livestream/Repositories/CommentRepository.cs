using eat_purge_livestream.Models;
using eat_purge_livestream.Utils;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;

namespace eat_purge_livestream.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration)
            : base(configuration) { }
        public void Add(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Comment (PostId, UserProfileId, Content, CreateDateTime)
                                    OUTPUT INSERTED.ID
                                    VALUES (@postId, @userProfileId, @content, @createDateTime)
                                    ";

                    DbUtils.AddParameter(cmd, "@postId", comment.PostId);
                    DbUtils.AddParameter(cmd, "@userProfileId", comment.UserProfileId);
                    DbUtils.AddParameter(cmd, "@content", comment.Content);
                    DbUtils.AddParameter(cmd, "@createDateTime", comment.CreateDateTime);

                    comment.Id = (int)cmd.ExecuteScalar();
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
                    cmd.CommandText = @"DELETE FROM Comment WHERE Id=@id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    cmd.ExecuteNonQuery();
                }
                conn.Close();
            }
        }
        public void Update(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE Comment
                                    SET Content=@content
                                    WHERE Id=@id";

                    DbUtils.AddParameter(cmd, "@content", comment.Content);
                    DbUtils.AddParameter(cmd, "@id", comment.Id);

                    cmd.ExecuteNonQuery();

                }
                conn.Close();
            }
        }
        public List<Comment> GetAllByPostId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    SELECT Id, PostId, UserProfileId, Content, CreateDateTime
                                    FROM Comment
                                    WHERE PostId = @postId
                                    ORDER BY CreateDateTime DESC
                                    ";

                    DbUtils.AddParameter(cmd, "@postId", id);

                    using (var reader = cmd.ExecuteReader())
                    {
                        var comments = new List<Comment>();

                        while (reader.Read())
                        {
                            var comment = new Comment
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                PostId = DbUtils.GetInt(reader, "PostId"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                                Content = DbUtils.GetString(reader, "Content"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime")
                            };
                            comments.Add(comment);
                        }
                        return comments;
                    }
                }
            }
        }
    }
}
