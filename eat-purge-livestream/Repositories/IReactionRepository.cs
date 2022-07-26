using eat_purge_livestream.Models;
using System.Collections.Generic;

namespace eat_purge_livestream.Repositories
{
    public interface IReactionRepository
    {
        Reaction Get(int id);
        void Add(Reaction reaction);
    }
}
