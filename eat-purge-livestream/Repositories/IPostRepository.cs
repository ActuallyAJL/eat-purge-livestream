using eat_purge_livestream.Models;
using System.Collections.Generic;

namespace eat_purge_livestream.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void Update(Post post);
        void Delete(int id);
        List<Post> GetAll();
        Post Get(int id);
        List<Post> GetByUserId(int id);
    }
}
