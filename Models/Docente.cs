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
        public string Phone { get; set; }
        public string Sex { get; set; }
        public string Email { get; set; }
        public int LocationBiannual { get; set; }
        public string Password { get; set; }

    }
}