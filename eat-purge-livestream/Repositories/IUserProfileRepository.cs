using eat_purge_livestream.Models;
using System.Collections.Generic;

namespace eat_purge_livestream.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void UpdateUserProfile(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        List<UserProfile> GetAllUsers();
        UserProfile GetByUserId(int userId);
    }
}