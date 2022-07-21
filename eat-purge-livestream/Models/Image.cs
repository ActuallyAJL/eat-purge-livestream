using System.Drawing;
using System.ComponentModel.DataAnnotations;

namespace eat_purge_livestream.Models
{
    public class Image
    {
        public int Id { get; set; }
        [Required]
        public Image Body { get; set; }
    }
}
