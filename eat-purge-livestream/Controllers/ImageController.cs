using System;
using System.Collections.Generic;
using eat_purge_livestream.Models;
using eat_purge_livestream.Repositories;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace eat_purge_livestream.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IImageRepository _imageRepository;
        public ImageController(IImageRepository imageRepository)
        {
            _imageRepository = imageRepository;
        }

        [HttpGet("{id}")]
        public ActionResult GetImageById(int id)
        {
            var stream = _imageRepository.GetImageStreamById(id);
            if (stream != null)
            {
                return File(stream, "image/jpeg", $"image_{id}.jpg");
            }

            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> Add(IFormFile data)
        {
            Image image = new Image();
            using (var memoryStream = new MemoryStream())
            {
                await data.CopyToAsync(memoryStream);

                if (memoryStream.Length == 0)
                {
                    image.Id = 0;
                }
                else if (memoryStream.Length < 289715200)
                {
                    image.Id = _imageRepository.CreateImage(memoryStream.ToArray());
                }
                else
                {
                    image.Id = 0;
                }

                return Accepted(image);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult RemoveImage(int id)
        {
            _imageRepository.DeleteImage(id);

            return NoContent();
        }
    }
}
