using eat_purge_livestream.Models;
using eat_purge_livestream.Utils;
using Microsoft.Extensions.Configuration;

namespace eat_purge_livestream.Repositories
{
    public class PostReactionRepository : BaseRepository, IPostReactionRepository
    {
        public PostReactionRepository(IConfiguration configuration)
            : base(configuration) { }
        public void Add(PostReaction pr)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO PostReaction (PostId, ReactionId, UserProfileId)
                                    OUTPUT INSERTED.ID
                                    VALUES (@postId, @reactionId, @userProfileId)";

                    DbUtils.AddParameter(cmd, "@postId", pr.PostId);
                    DbUtils.AddParameter(cmd, "@reactionId", pr.ReactionId);
                    DbUtils.AddParameter(cmd, "@userProfileId", pr.UserProfileId);

                    pr.Id = (int)cmd.ExecuteScalar();
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
                    cmd.CommandText = @"DELETE FROM PostReaction WHERE Id=@id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    cmd.ExecuteNonQuery();
                }
                conn.Close();
            }

        }
        public int GetCountByPostId(int postId, int reactionId)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    SELECT COUNT (DISTINCT Id) AS ReactionCount
                                    FROM PostReaction
                                    WHERE PostId = @postId AND ReactionId = @reactionId
                                    ";

                    DbUtils.AddParameter(cmd, "@postId", postId);
                    DbUtils.AddParameter(cmd, "@reactionId", reactionId);

                    return (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
