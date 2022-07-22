using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace eat_purge_livestream.Models
{
    public class Image
    {
        public int Id { get; set; }
        [Required]
        public IFormFile Body { get; set; }
    }
}
