using System.ComponentModel.DataAnnotations;
namespace MyAppApi.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber)]
        public long Number { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        public string Address { get; set; }

        [Required]
        public bool Fevourite { get; set; }
        public Group Group { get; set; }
        public int? GroupId { get; set; }
    }
}