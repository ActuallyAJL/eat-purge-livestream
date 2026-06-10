using eat_purge_livestream.Models;
using System.Collections.Generic;

namespace eat_purge_livestream.Repositories
{
    public interface ICommentRepository
    {
        void Add(Comment comment);
        void Delete(int id);
        void Update(Comment comment);
        List<Comment> GetAllByPostId(int postId);
    }
}
