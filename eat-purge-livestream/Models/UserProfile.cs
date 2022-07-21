﻿using System;
using System.ComponentModel.DataAnnotations;

namespace eat_purge_livestream.Models
{
    public class UserProfile
    {
        public int Id { get; set; }
        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }
        public string FullName
        {
            get
            {
                return $"{FirstName} {LastName}";
            }
        }
        public int ImageId { get; set; }
        [Required]
        public DateTime CreateDateTime { get; set; }
    }
}