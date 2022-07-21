using System;
using System.ComponentModel.DataAnnotations;

namespace eat_purge_livestream.Models
{
    public class PostReaction
    {
        public int Id { get; set; }
        [Required]
        public int PostId { get; set; }
        [Required]
        public int ReactionId { get; set; }
        [Required]
        public int UserProfileId { get; set; }
    }
}
