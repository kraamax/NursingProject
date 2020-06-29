using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class Student
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public string IdStudent { get; set; }
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