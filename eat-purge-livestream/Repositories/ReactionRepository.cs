using eat_purge_livestream.Models;
using eat_purge_livestream.Utils;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;

namespace eat_purge_livestream.Repositories
{
    public class ReactionRepository : BaseRepository, IReactionRepository
    {
        public ReactionRepository(IConfiguration configuration)
            : base(configuration) { }
        public Reaction Get(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    SELECT Id, Name, ImageId
                                    FROM Reaction
                                    WHERE Id=@id
                                    ";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();
                    Reaction reaction = null;
                    if (reader.Read())
                    {
                        reaction = new Reaction
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            ImageId = DbUtils.GetInt(reader, "ImageId")
                        };
                    }
                    return reaction;
                }
            }
        }
        public void Add(Reaction reaction)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Reaction (Name, ImageId)
                                    OUTPUT INSERTED.ID
                                    VALUES (@name, @imageId)
                                    ";

                    DbUtils.AddParameter(cmd, "@name", reaction.Name);
                    DbUtils.AddParameter(cmd, "@imageId", reaction.ImageId);

                    reaction.Id = (int)cmd.ExecuteScalar();
                }
                conn.Close();
            }
        }
    }
}
