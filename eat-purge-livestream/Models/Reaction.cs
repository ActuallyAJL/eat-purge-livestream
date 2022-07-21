using System;
using System.ComponentModel.DataAnnotations;

namespace eat_purge_livestream.Models
{
    public class Reaction
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int ImageId { get; set; }
    
    }
}
