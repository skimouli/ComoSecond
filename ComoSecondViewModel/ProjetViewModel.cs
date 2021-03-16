using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ComoSecondViewModel
{
    public class ProjetViewModel
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("title")]
        [StringLength(200)]
        public string Title { get; set; }
        [Column("colaborateur")]
        [StringLength(500)]
        public string Colaborateur { get; set; }
        [Column("document")]
        public string Document { get; set; }
        [Column("descriptif")]
        [StringLength(500)]
        public string Descriptif { get; set; }
        [Column("image")]
        public string Image { get; set; }
    }
}
