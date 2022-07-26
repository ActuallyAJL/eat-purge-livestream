﻿using System;
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
        public async Task<IActionResult> Add([FromForm]IFormFile data)
        {
            Image image = new Image();
            image.Body = data;
            using (var memoryStream = new MemoryStream())
            {
                await image.Body.CopyToAsync(memoryStream);

                image.Id = _imageRepository.CreateImage(memoryStream.ToArray());
                
            }
            return CreatedAtAction(nameof(GetImageById), new { id = image.Id }, image);
        }

        [HttpDelete("{id}")]
        public IActionResult RemoveImage(int id)
        {
            _imageRepository.DeleteImage(id);

            return NoContent();
        }
    }
}
