using System;
using System.ComponentModel.DataAnnotations;

namespace eat_purge_livestream.Models
{
    public class Post
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Content { get; set; }
        [Required]
        public DateTime CreateDateTime { get; set; }
        public int ImageId { get; set; }
        [Required]
        public int UserProfileId { get; set; }
    }
}