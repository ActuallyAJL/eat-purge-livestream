using System;
using System.ComponentModel.DataAnnotations;

namespace eat_purge_livestream.Models
{
    public class Comment
    {
        public int Id { get; set; }
        [Required]
        public int PostId { get; set; }
        [Required]
        public int UserProfileId { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public DateTime CreateDateTime { get; set; }
    }
}