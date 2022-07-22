using System.IO;

namespace eat_purge_livestream.Repositories
{
    public interface IImageRepository
    {
        Stream GetImageStreamById(int id);
        int CreateImage(byte[] data);

        void DeleteImage(int? id);
    }
}