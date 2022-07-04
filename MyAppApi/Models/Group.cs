using System.ComponentModel.DataAnnotations;
namespace MyAppApi.Models
{
    public class Group
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        public string Name { get; set; }

        [MaxLength(120)]
        public string Description { get; set; }
    }
}