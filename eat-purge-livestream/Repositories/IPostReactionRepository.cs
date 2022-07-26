using eat_purge_livestream.Models;

namespace eat_purge_livestream.Repositories
{
    public interface IPostReactionRepository
    {
        void Add(PostReaction pr);
        void Delete(int id);
        int GetCountByPostId(int postId, int reactionId);
    }
}
