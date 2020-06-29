using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProyectoEnfermeria.Models
{
    public class Docente
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public string IdDocente { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string FirstLastName { get; set; }
        public string SecondLastName { get; set; }
        public string BornDate { get; set; }
        public int Phone { get; set; }
        public string Sex { get; set; }
        public string Email { get; set; }
        public Account Account { get; set; }
        public string AccountId { get; set; }
        public int LocationBiannual { get; set; }
    }
}