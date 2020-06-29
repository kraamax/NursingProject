using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProyectoEnfermeria.Models
{
    public class LifeStyle
    {
        [Key]
        public int IdLifeStyle { get; set; }
        public string PacienteId { get; set; }
        public Paciente Paciente { get; set; }
        public Habit NutricionalHabit { get; set; }  
        public Habit HygienicHabit { get; set; }
        public Habit Rest { get; set; }
        public Habit Excercise { get; set; }
        public Habit Leisure { get; set; }
        public Habit NociveHabit { get; set; }
    }
}