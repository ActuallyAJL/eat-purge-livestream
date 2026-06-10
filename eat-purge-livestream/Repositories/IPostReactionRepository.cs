using eat_purge_livestream.Models;
using System.Collections.Generic;

namespace eat_purge_livestream.Repositories
{
    public interface IPostReactionRepository
    {
        void Add(PostReaction pr);
        void Delete(int id);
        int GetCountByPostId(int postId, int reactionId);
        List<PostReaction> GetPostReactionsByPostAndReactionId(int postId, int reactionId);
    }
}
