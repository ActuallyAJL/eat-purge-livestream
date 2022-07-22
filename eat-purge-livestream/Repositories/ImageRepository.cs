﻿using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace eat_purge_livestream.Repositories
{
    public class ImageRepository : IImageRepository
    {
        private IConfiguration _config;

        public ImageRepository(IConfiguration config)
        {
            _config = config;
        }

        private SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }

        public Stream GetImageStreamById(int id)
        {

            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM Image WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);
                    using (var reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            var data = reader.GetStream(reader.GetOrdinal("Body"));
                            if (data.Length > 0)
                            {
                                return data;
                            }
                        }
                        return null;
                    }
                }
            }
        }

        public int CreateImage(byte[] imageData)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Image (Body) OUTPUT INSERTED.Id VALUES (@body)";
                    cmd.Parameters.AddWithValue("@body", imageData);

                    return (int)cmd.ExecuteScalar();
                }
            }
        }

        public void DeleteImage(int? id)
        {
            if (id.HasValue)
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = "DELETE FROM Image WHERE Id = @id";
                        cmd.Parameters.AddWithValue("@id", id);

                        cmd.ExecuteNonQuery();
                    }
                }
            }
        }
    }
}
